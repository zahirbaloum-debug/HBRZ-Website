import emailjs from '@emailjs/browser';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { FORM_FIELD_IDS, TIMING, VALIDATION_LIMITS } from '../utils/constants';
import {
  sanitizeInput,
  validateEmail,
  validateLength,
} from '../utils/validation';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle success message timeout cleanup to prevent memory leaks and race conditions
  useEffect(() => {
    if (submitted) {
      // Clear any existing timer to prevent race conditions
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setSubmitted(false);
        timerRef.current = null;
      }, TIMING.SUCCESS_MESSAGE_DURATION);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    // Clear previous errors
    setErrors({});
    const newErrors: Record<string, string> = {};

    // Sanitize inputs first
    const sanitizedFullName = sanitizeInput(fullName);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedOrganization = sanitizeInput(organization);
    const sanitizedInquiryType = sanitizeInput(inquiryType);
    const sanitizedMessage = sanitizeInput(message);

    // Validate sanitized inputs
    if (
      !validateLength(
        sanitizedFullName,
        VALIDATION_LIMITS.FULL_NAME_MIN,
        VALIDATION_LIMITS.FULL_NAME_MAX,
      )
    ) {
      newErrors[FORM_FIELD_IDS.FULL_NAME] =
        `Full name must be between ${VALIDATION_LIMITS.FULL_NAME_MIN} and ${VALIDATION_LIMITS.FULL_NAME_MAX} characters.`;
    }

    if (!validateEmail(sanitizedEmail)) {
      newErrors[FORM_FIELD_IDS.EMAIL] = 'Please enter a valid email address.';
    }

    if (
      !validateLength(
        sanitizedOrganization,
        VALIDATION_LIMITS.ORGANIZATION_MIN,
        VALIDATION_LIMITS.ORGANIZATION_MAX,
      )
    ) {
      newErrors[FORM_FIELD_IDS.ORGANIZATION] =
        `Organization name must be between ${VALIDATION_LIMITS.ORGANIZATION_MIN} and ${VALIDATION_LIMITS.ORGANIZATION_MAX} characters.`;
    }

    if (
      !validateLength(
        sanitizedMessage,
        VALIDATION_LIMITS.MESSAGE_MIN,
        VALIDATION_LIMITS.MESSAGE_MAX,
      )
    ) {
      newErrors[FORM_FIELD_IDS.MESSAGE] =
        `Message must be between ${VALIDATION_LIMITS.MESSAGE_MIN} and ${VALIDATION_LIMITS.MESSAGE_MAX} characters.`;
    }

    if (!sanitizedInquiryType) {
      newErrors[FORM_FIELD_IDS.INQUIRY_TYPE] = 'Please select an inquiry type.';
    }

    // If there are errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const serviceId = 'service_jicy06g';
    const templateId = 'template_fsyhxji';
    const publicKey = '2Stb0Xb7oNBWEwb1Z';

    setIsSubmitting(true);

    try {
      // Use already sanitized inputs
      const templateParams = {
        from_name: sanitizedFullName,
        from_email: sanitizedEmail,
        organization: sanitizedOrganization,
        inquiry_type: sanitizedInquiryType,
        message: sanitizedMessage,
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
        limitRate: {
          throttle: TIMING.EMAILJS_THROTTLE,
        },
        blockList: {
          watchVariable: 'from_email',
        },
      });

      setSubmitted(true);
      setErrors({});

      setFullName('');
      setOrganization('');
      setEmail('');
      setInquiryType('');
      setMessage('');
    } catch (err) {
      console.error('EmailJS send error:', err);
      setErrors({
        submit:
          'Unable to send your message at this time. Please try again later or contact us directly at Info@hbrzglobalpurity.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact HBRZ Global Purity for institutional consulting, commodity trading, and export coordination services. Nigeria office in Kano, USA office in Fairfax, VA. Email: Info@hbrzglobalpurity.com"
        keywords="contact HBRZ, Nigeria consulting, Kano office, Fairfax Virginia, institutional inquiry, commodity trading contact"
        canonical="https://hbrzglobalpurity.com/contact"
      />
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-hbrz-blue mb-4">
            Connect With HBRZ
          </h1>
          <p className="text-hbrz-gold font-medium uppercase tracking-widest text-sm">
            Global Coordination. Local Expertise.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-hbrz-blue mb-8">
                Our Global Locations
              </h2>

              <div className="space-y-12">
                {/* Nigeria */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-hbrz-blue text-white rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hbrz-blue mb-2 uppercase tracking-wide">
                      Nigeria Operations
                    </h3>
                    <p className="text-gray-600 mb-1">
                      HBRZ Global Purity Trading and Consulting Services Ltd
                    </p>
                    <p className="text-gray-600 font-semibold mb-3">
                      Kano, Nigeria
                    </p>
                    <p className="text-sm text-gray-500">
                      Phone: +234 813 453 6052
                    </p>
                  </div>
                </div>

                {/* USA */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-hbrz-gold text-white rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hbrz-blue mb-2 uppercase tracking-wide">
                      United States (Affiliates)
                    </h3>
                    <p className="text-[10px] font-bold text-hbrz-gold uppercase tracking-widest mb-2">
                      Registered in Delaware and Virginia
                    </p>
                    <p className="text-gray-600 mb-1">
                      HBRZ Global Purity Trading and Consulting Services LLC
                    </p>
                    <div className="text-gray-600 font-semibold mb-3 leading-relaxed">
                      <p>10505 Judicial Dr.</p>
                      <p>Suite 300</p>
                      <p>Fairfax, VA 22030</p>
                      <p>USA</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Phone: +1 571 268 4110
                    </p>
                  </div>
                </div>

                {/* General Inquiry */}
                <div className="flex">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-gray-100 text-hbrz-blue rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hbrz-blue mb-2 uppercase tracking-wide">
                      Email Inquiries
                    </h3>
                    <p className="text-gray-600">Info@hbrzglobalpurity.com</p>
                    <p className="text-xs text-gray-400 mt-2 italic">
                      Expect a response within 24-48 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-hbrz-blue mb-6">
                Institutional Inquiry Form
              </h2>

              {submitted ? (
                <div
                  className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg text-center"
                  role="status"
                  aria-live="polite"
                >
                  <svg
                    className="w-12 h-12 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="text-xl font-bold mb-2">
                    Message Sent Successfully
                  </h4>
                  <p>
                    Our compliance or strategic advisory team will review your
                    inquiry and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {errors.submit && (
                    <div
                      className="bg-red-50 border border-red-200 text-red-800 p-4 rounded"
                      role="alert"
                    >
                      {errors.submit}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor={FORM_FIELD_IDS.FULL_NAME}
                        className="block text-xs font-bold text-gray-500 uppercase mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id={FORM_FIELD_IDS.FULL_NAME}
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors[FORM_FIELD_IDS.FULL_NAME]) {
                            setErrors((prev) => {
                              const newErrors = { ...prev };
                              delete newErrors[FORM_FIELD_IDS.FULL_NAME];
                              return newErrors;
                            });
                          }
                        }}
                        type="text"
                        required
                        aria-invalid={!!errors[FORM_FIELD_IDS.FULL_NAME]}
                        aria-describedby={
                          errors[FORM_FIELD_IDS.FULL_NAME]
                            ? `${FORM_FIELD_IDS.FULL_NAME}-error`
                            : undefined
                        }
                        className={`w-full px-4 py-3 rounded border ${errors[FORM_FIELD_IDS.FULL_NAME] ? 'border-red-500' : 'border-gray-300'} focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all`}
                      />
                      {errors[FORM_FIELD_IDS.FULL_NAME] && (
                        <p
                          id={`${FORM_FIELD_IDS.FULL_NAME}-error`}
                          className="text-red-600 text-xs mt-1"
                          role="alert"
                        >
                          {errors[FORM_FIELD_IDS.FULL_NAME]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor={FORM_FIELD_IDS.ORGANIZATION}
                        className="block text-xs font-bold text-gray-500 uppercase mb-2"
                      >
                        Organization
                      </label>
                      <input
                        id={FORM_FIELD_IDS.ORGANIZATION}
                        value={organization}
                        onChange={(e) => {
                          setOrganization(e.target.value);
                          if (errors[FORM_FIELD_IDS.ORGANIZATION]) {
                            setErrors((prev) => {
                              const newErrors = { ...prev };
                              delete newErrors[FORM_FIELD_IDS.ORGANIZATION];
                              return newErrors;
                            });
                          }
                        }}
                        type="text"
                        required
                        aria-invalid={!!errors[FORM_FIELD_IDS.ORGANIZATION]}
                        aria-describedby={
                          errors[FORM_FIELD_IDS.ORGANIZATION]
                            ? `${FORM_FIELD_IDS.ORGANIZATION}-error`
                            : undefined
                        }
                        className={`w-full px-4 py-3 rounded border ${errors[FORM_FIELD_IDS.ORGANIZATION] ? 'border-red-500' : 'border-gray-300'} focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all`}
                      />
                      {errors[FORM_FIELD_IDS.ORGANIZATION] && (
                        <p
                          id={`${FORM_FIELD_IDS.ORGANIZATION}-error`}
                          className="text-red-600 text-xs mt-1"
                          role="alert"
                        >
                          {errors[FORM_FIELD_IDS.ORGANIZATION]}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor={FORM_FIELD_IDS.EMAIL}
                      className="block text-xs font-bold text-gray-500 uppercase mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id={FORM_FIELD_IDS.EMAIL}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors[FORM_FIELD_IDS.EMAIL]) {
                          setErrors((prev) => {
                            const newErrors = { ...prev };
                            delete newErrors[FORM_FIELD_IDS.EMAIL];
                            return newErrors;
                          });
                        }
                      }}
                      type="email"
                      required
                      aria-invalid={!!errors[FORM_FIELD_IDS.EMAIL]}
                      aria-describedby={
                        errors[FORM_FIELD_IDS.EMAIL]
                          ? `${FORM_FIELD_IDS.EMAIL}-error`
                          : undefined
                      }
                      className={`w-full px-4 py-3 rounded border ${errors[FORM_FIELD_IDS.EMAIL] ? 'border-red-500' : 'border-gray-300'} focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all`}
                    />
                    {errors[FORM_FIELD_IDS.EMAIL] && (
                      <p
                        id={`${FORM_FIELD_IDS.EMAIL}-error`}
                        className="text-red-600 text-xs mt-1"
                        role="alert"
                      >
                        {errors[FORM_FIELD_IDS.EMAIL]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor={FORM_FIELD_IDS.INQUIRY_TYPE}
                      className="block text-xs font-bold text-gray-500 uppercase mb-2"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id={FORM_FIELD_IDS.INQUIRY_TYPE}
                      value={inquiryType}
                      onChange={(e) => {
                        setInquiryType(e.target.value);
                        if (errors[FORM_FIELD_IDS.INQUIRY_TYPE]) {
                          setErrors((prev) => {
                            const newErrors = { ...prev };
                            delete newErrors[FORM_FIELD_IDS.INQUIRY_TYPE];
                            return newErrors;
                          });
                        }
                      }}
                      required
                      aria-invalid={!!errors[FORM_FIELD_IDS.INQUIRY_TYPE]}
                      aria-describedby={
                        errors[FORM_FIELD_IDS.INQUIRY_TYPE]
                          ? `${FORM_FIELD_IDS.INQUIRY_TYPE}-error`
                          : undefined
                      }
                      className={`w-full px-4 py-3 rounded border ${errors[FORM_FIELD_IDS.INQUIRY_TYPE] ? 'border-red-500' : 'border-gray-300'} focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all bg-white`}
                    >
                      <option value="">Select a service category</option>
                      <option value="trading">Commodity Trading Inquiry</option>
                      <option value="consulting">
                        Institutional Consulting
                      </option>
                      <option value="it">IT Support Services</option>
                      <option value="compliance">
                        Compliance & Governance Inquiry
                      </option>
                    </select>
                    {errors[FORM_FIELD_IDS.INQUIRY_TYPE] && (
                      <p
                        id={`${FORM_FIELD_IDS.INQUIRY_TYPE}-error`}
                        className="text-red-600 text-xs mt-1"
                        role="alert"
                      >
                        {errors[FORM_FIELD_IDS.INQUIRY_TYPE]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor={FORM_FIELD_IDS.MESSAGE}
                      className="block text-xs font-bold text-gray-500 uppercase mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id={FORM_FIELD_IDS.MESSAGE}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors[FORM_FIELD_IDS.MESSAGE]) {
                          setErrors((prev) => {
                            const newErrors = { ...prev };
                            delete newErrors[FORM_FIELD_IDS.MESSAGE];
                            return newErrors;
                          });
                        }
                      }}
                      rows={5}
                      required
                      aria-invalid={!!errors[FORM_FIELD_IDS.MESSAGE]}
                      aria-describedby={
                        errors[FORM_FIELD_IDS.MESSAGE]
                          ? `${FORM_FIELD_IDS.MESSAGE}-error`
                          : undefined
                      }
                      className={`w-full px-4 py-3 rounded border ${errors[FORM_FIELD_IDS.MESSAGE] ? 'border-red-500' : 'border-gray-300'} focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all resize-none`}
                    />
                    {errors[FORM_FIELD_IDS.MESSAGE] && (
                      <p
                        id={`${FORM_FIELD_IDS.MESSAGE}-error`}
                        className="text-red-600 text-xs mt-1"
                        role="alert"
                      >
                        {errors[FORM_FIELD_IDS.MESSAGE]}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-hbrz-blue text-white font-bold py-4 rounded hover:bg-opacity-90 transition-all shadow-md uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? 'Sending...'
                      : 'Submit Professional Inquiry'}
                  </button>
                  <p className="text-[10px] text-gray-400 text-center italic">
                    By submitting this form, you acknowledge that HBRZ operates
                    under strict AML/KYC protocols and agree to our data
                    handling practices.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
