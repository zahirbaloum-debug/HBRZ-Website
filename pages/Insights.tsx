import emailjs from "@emailjs/browser";
import type React from "react";
import { useEffect, useState } from "react";

// Utility functions for validation and sanitization
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sanitizeInput = (input: string): string => {
  return input.replace(/<[^>]*>/g, "").trim();
};

const Insights: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    // Validate email
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const serviceId = "service_jicy06g";
    const templateId = "template_fsyhxji";
    const publicKey = "2Stb0Xb7oNBWEwb1Z";

    setIsSubmitting(true);

    try {
      // Sanitize email before sending
      const templateParams = {
        from_name: "Subscriber",
        from_email: sanitizeInput(email),
        organization: "N/A",
        inquiry_type: "Newsletter Subscription",
        message: "Please add this email to the subscription list.",
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
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
      alert("Successfully subscribed to Institutional Briefs!");
    } catch (err) {
      console.error("EmailJS subscription error:", err);
      alert(
        "Unable to process your subscription at this time. Please try again later or contact us at Info@hbrzglobalpurity.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const papers = [
    {
      category: "Strategic Brief",
      title: "Nigeria’s Trade Documentation Framework",
      desc: "An institutional overview of the Central Bank of Nigeria’s Form NXP process and its relevance to governance and documentation standards.",
    },
    {
      category: "Compliance Brief",
      title: "Trade Governance in West Africa",
      desc: "An analytical perspective on regulatory alignment and governance frameworks supporting responsible and transparent commodity market participation.",
    },
    {
      category: "Operational Systems Note",
      title: "Coordinated Process Models for Cross-Border Commerce",
      desc: "A systems-based perspective on structured coordination between regional and international commercial processes.",
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Knowledge Hub
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Institutional <span className="text-hbrz-gold">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Analytical perspectives on global trade governance, institutional
            strengthening, and structured operational frameworks. This section
            presents HBRZ’s thematic focus areas for research, analysis, and
            future thought leadership.
          </p>
        </div>
      </section>

      {/* Insight Papers Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {papers.map((paper, idx) => (
              <div
                key={idx}
                className="group border border-gray-100 p-10 bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between h-full border-t-4 hover:border-t-hbrz-gold border-t-hbrz-blue"
              >
                <div>
                  <div className="text-hbrz-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border-b border-gray-50 pb-2">
                    {paper.category}
                  </div>
                  <h4 className="text-2xl font-bold text-hbrz-blue mb-6 group-hover:text-hbrz-gold transition-colors leading-tight">
                    {paper.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light italic">
                    {paper.desc}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-hbrz-blue uppercase tracking-widest group-hover:translate-x-2 transition-transform cursor-pointer">
                  Read Paper <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Subscription Callout */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-hbrz-blue mb-6">
            Subscribe to Institutional Briefs
          </h2>
          <p className="text-gray-500 font-light leading-relaxed mb-10">
            Receive curated strategic analyses and regulatory updates directly
            from our global advisory team.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Professional Email Address"
              className="flex-grow px-6 py-4 rounded-sm border border-gray-200 focus:border-hbrz-gold focus:ring-1 focus:ring-hbrz-gold outline-none transition-all text-sm"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-hbrz-blue text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest">
            HBRZ values your privacy and strictly adheres to professional
            communication standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Insights;
