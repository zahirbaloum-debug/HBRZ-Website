import type React from 'react';
import { useEffect } from 'react';
import SEO from '../components/SEO';

const Consulting: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Institutional Consulting & Advisory Services"
        description="HBRZ provides consulting services to government institutions, MDAs, and private sector organizations. Strategic planning, trade advisory, project coordination, and capacity building."
        keywords="institutional consulting, government advisory services, strategic planning, capacity building, organizational development"
        canonical="https://hbrzglobalpurity.com/services/consulting"
      />
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">
            Institutional{' '}
            <span className="text-hbrz-gold">Consulting Services</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="mb-6 inline-block bg-hbrz-blue/5 p-3 rounded-lg">
                <svg
                  className="w-10 h-10 text-hbrz-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-hbrz-blue mb-6">
                Strategic Advisory & Support
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                HBRZ is structured to provide strategic advisory and technical
                assistance to governments, ministries, departments, and agencies
                (MDAs), as well as international partners. The Company’s
                advisory focus is on institutional development and policy
                implementation support through governance-aligned, systems-based
                consulting.
              </p>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 border-l-4 border-hbrz-gold shadow-sm">
                  <h4 className="font-bold text-hbrz-blue text-sm uppercase tracking-wider mb-2">
                    Policy & Strategy Advisory
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    HBRZ is structured to provide advisory support to
                    state-owned enterprises and government departments in
                    strategic planning, policy development, and long-term
                    organizational strengthening through governance-aligned and
                    systems-based advisory services.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-hbrz-gold shadow-sm">
                  <h4 className="font-bold text-hbrz-blue text-sm uppercase tracking-wider mb-2">
                    Capacity Building & Development
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    HBRZ is designed to deliver technical assistance and
                    tailored training to NGOs, private-sector organizations, and
                    international development partners, with a focus on
                    institutional capacity strengthening, operational
                    effectiveness, and leadership development. These services
                    emphasize governance practices, management systems, and
                    decision-making frameworks through non-certifying advisory
                    and training engagements.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-hbrz-gold shadow-sm">
                  <h4 className="font-bold text-hbrz-blue text-sm uppercase tracking-wider mb-2">
                    Project Management & Evaluation
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    HBRZ intends to provide advisory support across project
                    planning, monitoring, evaluation, and
                    management-effectiveness assessments for institutional
                    programs and initiatives. This includes advisory support
                    related to technology and equipment deployment programs,
                    delivered through coordination, analytical review, and
                    systems-based consulting rather than direct procurement or
                    execution.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200"
                  alt="Consulting Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
