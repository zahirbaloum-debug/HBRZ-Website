import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = "service_jicy06g";
    const templateId = "template_fsyhxji";
    const publicKey = "2Stb0Xb7oNBWEwb1Z";

    try {
      const templateParams = {
        from_name: fullName,
        from_email: email,
        organization,
        inquiry_type: inquiryType,
        message,
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
        limitRate: {
          throttle: 10000, // 10 seconds between submissions
        },
        blockList: {
          watchVariable: "from_email",
        },
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);

      setFullName("");
      setOrganization("");
      setEmail("");
      setInquiryType("");
      setMessage("");
    } catch (err) {
      const origin = window.location.origin;
      const msg =
        typeof err === "object" && err && "text" in (err as any)
          ? (err as any).text
          : String(err);
      console.error("EmailJS send error:", err);
      if (msg && msg.toLowerCase().includes("origin is not allowed")) {
        alert(
          `Sending blocked: authorize "${origin}" in EmailJS Dashboard → Account → Security → Allowed Origins, then retry.`,
        );
      } else {
        alert("Sorry — your message could not be sent. Please try again.");
      }
    }
  };

  return (
    <div className="animate-fadeIn">
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
                <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                  <svg
                    className="w-12 h-12 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                        Full Name
                      </label>
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                        Organization
                      </label>
                      <input
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all bg-white"
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
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-hbrz-blue text-white font-bold py-4 rounded hover:bg-opacity-90 transition-all shadow-md uppercase tracking-widest text-sm"
                  >
                    Submit Professional Inquiry
                  </button>
                  <p className="text-[10px] text-gray-400 text-center italic">
                    By submitting this form, you acknowledge that HBRZ operates
                    under strict AML/KYC protocols.
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
