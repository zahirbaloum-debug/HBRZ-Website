import type React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const methodology = [
    {
      title: 'Assessment & Diagnosis',
      desc: 'We begin by evaluating organizational objectives, systems, and operating environments to identify performance gaps and development priorities.',
    },
    {
      title: 'Strategic Design',
      desc: 'We develop tailored solutions aligned with governance frameworks, leadership objectives, and operational requirements.',
    },
    {
      title: 'Implementation Support',
      desc: 'We provide advisory and coordination support to assist clients in executing recommended actions through structured project management and monitoring.',
    },
    {
      title: 'Capacity Development',
      desc: 'We support human capital development through non-certifying technical training and advisory services to embed sustainable practices.',
    },
    {
      title: 'Performance Monitoring',
      desc: 'We apply performance indicators and value-measurement tools to track progress and support continuous improvement.',
    },
  ];

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Our Services - Consulting, Trading & IT Advisory"
        description="HBRZ offers institutional consulting, commodity trade facilitation, export coordination, and IT advisory services. Serving government agencies, private sector, and international partners in Nigeria and USA."
        keywords="institutional consulting services, commodity trading, IT advisory, export coordination, capacity building, strategic planning"
        canonical="https://hbrzglobalpurity.com/services"
      />
      {/* Header */}
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-hbrz-gold">Services</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            HBRZ Global Purity offers a specialized suite of services designed
            for institutional excellence, regulatory compliance, and digital
            efficiency.
          </p>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Core Competencies
            </span>
            <h2 className="text-4xl font-bold text-hbrz-blue">
              Service Portfolio
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-gray-50 border border-gray-100 flex flex-col justify-between group hover:border-hbrz-gold transition-colors">
              <div>
                <div className="text-hbrz-gold mb-6">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-hbrz-blue mb-4 leading-tight">
                  Commodity Advisory & Trade Process Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Governance-led advisory and coordination services supporting
                  lawful commodity trade activities, with a focus on precious
                  metals. Services emphasize documentation oversight, process
                  design, and systems-based coordination delivered through
                  licensed third-party operators and regulated financial
                  institutions.
                </p>
              </div>
              <Link
                to="/services/trading"
                className="text-xs font-bold text-hbrz-gold uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block"
              >
                Learn More →
              </Link>
            </div>

            <div className="p-10 bg-gray-50 border border-gray-100 flex flex-col justify-between group hover:border-hbrz-gold transition-colors">
              <div>
                <div className="text-hbrz-gold mb-6">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-hbrz-blue mb-4 leading-tight">
                  Institutional Consulting
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Strategic and operational advisory services supporting
                  institutional capacity building, governance frameworks, and
                  policy and program development for governments, ministries,
                  agencies, private sector entities, and international
                  development partners.
                </p>
              </div>
              <Link
                to="/services/consulting"
                className="text-xs font-bold text-hbrz-gold uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block"
              >
                Learn More →
              </Link>
            </div>

            <div className="p-10 bg-gray-50 border border-gray-100 flex flex-col justify-between group hover:border-hbrz-gold transition-colors">
              <div>
                <div className="text-hbrz-gold mb-6">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-hbrz-blue mb-4 leading-tight">
                  General Information Technology (IT) Services
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Advisory and support services focused on systems optimization,
                  digital workflow design, data organization, and technology
                  coordination to improve organizational efficiency and
                  institutional performance.
                </p>
              </div>
              <Link
                to="/services/it"
                className="text-xs font-bold text-hbrz-gold uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology: HOW WE WORK */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Our Methodology
            </span>
            <h2 className="text-4xl font-bold text-hbrz-blue mb-6">
              HOW WE WORK
            </h2>
            <div className="h-0.5 w-16 bg-hbrz-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
              HBRZ applies a structured, systems-based consulting methodology
              designed to strengthen institutions and improve operational
              effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-gray-200 bg-white">
            {methodology.map((step, idx) => (
              <div
                key={idx}
                className={`p-8 flex flex-col group relative ${idx !== methodology.length - 1 ? 'md:border-r border-b md:border-b-0 border-gray-100' : ''}`}
              >
                <div className="text-hbrz-gold text-4xl font-light mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  0{idx + 1}
                </div>
                <h4 className="text-hbrz-blue font-bold text-sm uppercase tracking-wider mb-4 h-12 flex items-center">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed font-light">
                  {step.desc}
                </p>
                {/* Visual Step Indicator Line */}
                {idx !== methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-hbrz-gold/20 z-10"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-400 font-light italic">
              "Every engagement follows this rigorous lifecycle to ensure
              measurable outcomes and institutional durability."
            </p>
          </div>
        </div>
      </section>

      {/* Final Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link
            to="/contact"
            className="inline-block bg-hbrz-blue text-white px-10 py-5 rounded-sm font-bold hover:bg-hbrz-blue/90 transition-all shadow-lg uppercase tracking-wider text-sm"
          >
            Discuss a Strategic Engagement
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
