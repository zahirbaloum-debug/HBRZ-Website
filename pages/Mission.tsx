import type React from 'react';
import { useEffect } from 'react';
import SEO from '../components/SEO';

const Mission: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Our Mission - Institutional Excellence"
        description="HBRZ's mission is to provide governance-aligned consulting, advisory services, and structured coordination for lawful commodity market participation with transparency and institutional integrity."
        keywords="HBRZ mission, institutional consulting, governance framework, commodity market advisory, transparency"
        canonical="https://hbrzglobalpurity.com/about/mission"
      />
      {/* Hero Section */}
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Institutional Mandate
          </span>
          <h1 className="text-5xl font-bold text-white mb-6">
            Mission, Vision <span className="text-hbrz-gold">& Values</span>
          </h1>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="bg-gray-50 p-12 border-t-4 border-hbrz-blue relative overflow-hidden group min-h-[400px] flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <svg
                  className="w-16 h-16 text-hbrz-blue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-hbrz-blue mb-6 uppercase tracking-wider">
                Mission
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
                Our mission is to deliver world-class consulting and
                institutional advisory services, supported by operational and
                digital systems expertise, through uncompromising transparency,
                strong governance, and regulatory alignment enabling
                organizations to strengthen performance, build capacity, and
                operate in accordance with global standards of professionalism
                and integrity.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-12 border-t-4 border-hbrz-gold relative overflow-hidden group min-h-[400px] flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <svg
                  className="w-16 h-16 text-hbrz-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-hbrz-blue mb-6 uppercase tracking-wider">
                Vision
              </h4>
              <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
                Our vision is to be a trusted regional and international
                advisory firm recognized for strengthening institutions,
                improving organizational performance, and supporting
                transparent, well-governed operations through professional
                consulting and systems-driven solutions.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gray-50 p-12 border-t-4 border-hbrz-blue relative overflow-hidden group min-h-[400px] flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <svg
                  className="w-16 h-16 text-hbrz-blue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-hbrz-blue mb-6 uppercase tracking-wider">
                Values
              </h4>
              <ul className="space-y-4 text-gray-500 font-light text-sm">
                <li className="flex items-start">
                  <span className="text-hbrz-gold font-bold mr-3">•</span>
                  <span>
                    <strong>Integrity & Transparency:</strong> We operate with
                    openness, ethical discipline, and full accountability in all
                    advisory and operational engagements.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-hbrz-gold font-bold mr-3">•</span>
                  <span>
                    <strong>Institutional Strengthening:</strong> We focus on
                    building durable systems, processes, and governance
                    structures that support long-term organizational
                    performance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-hbrz-gold font-bold mr-3">•</span>
                  <span>
                    <strong>Professional Excellence:</strong> We deliver
                    services grounded in best practices, structured
                    methodologies, and measurable outcomes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-hbrz-gold font-bold mr-3">•</span>
                  <span>
                    <strong>Collaboration & Partnership:</strong> We work
                    alongside clients as trusted advisors, emphasizing knowledge
                    transfer and capacity development.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-hbrz-gold font-bold mr-3">•</span>
                  <span>
                    <strong>Compliance & Governance:</strong> We align our
                    services with applicable laws, regulatory expectations, and
                    global standards of professionalism.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alignment Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-hbrz-blue mb-8">
            Aligned with Objective Excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light italic">
            "Our mission is a direct reflection of our corporate objectives: to
            serve as a high-integrity partner for governments, multinational
            organizations, and international development partners in the pursuit
            of sustainable trade and operational efficiency."
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <span className="px-4 py-2 bg-white border border-gray-200 text-[10px] font-bold text-hbrz-blue uppercase tracking-widest">
              Trade Intermediation
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 text-[10px] font-bold text-hbrz-blue uppercase tracking-widest">
              Strategic Advisory
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 text-[10px] font-bold text-hbrz-blue uppercase tracking-widest">
              Digital Systems Support
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
