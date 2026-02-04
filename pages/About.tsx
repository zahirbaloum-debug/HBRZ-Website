import type React from 'react';
import { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73774573b09?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-hbrz-gold">Story</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of transparency and institutional
            integrity.
          </p>
        </div>
      </section>

      {/* Feature: Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Institutional History
              </span>
              <h2 className="text-4xl font-bold text-hbrz-blue mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                <p>
                  HBRZ Global Purity Trading and Consulting Services Ltd,
                  together with its affiliated U.S. entity, HBRZ Purity Trading
                  and Consulting Services LLC (Delaware), was established to
                  develop a consulting and advisory firm focused on
                  institutional capacity, governance, and operational
                  effectiveness across public and private-sector organizations.
                </p>
                <p>
                  The Company was formed in response to a recognized need in the
                  West African commercial environment for professionally
                  governed, compliance-aligned structures that support
                  transparent, well-organized economic activity. From inception,
                  HBRZ has been designed around the principle that sustainable
                  participation in international markets requires strong
                  governance, disciplined systems, and clearly defined
                  institutional processes.
                </p>
                <p>
                  HBRZ’s strategic interest in the precious metals sector
                  reflects an objective to participate in this market through
                  properly structured and compliant operating models. In
                  preparation for this focus, the Company has prioritized
                  developing governance frameworks, regulatory readiness, and
                  internal operational systems to support responsible
                  participation in international commodity markets upon full
                  operational readiness.
                </p>
                <p>
                  In parallel, HBRZ has been structured to provide consulting
                  and institutional advisory services to government
                  institutions, private-sector organizations, and international
                  partners. Its planned service offerings include strategic and
                  institutional planning, trade and supply-chain advisory,
                  project coordination, operational and management consulting,
                  and general information technology (IT) advisory and systems
                  support. All services are designed to be delivered through
                  non-regulated, advisory-focused engagements aimed at
                  strengthening organizational performance and institutional
                  resilience.
                </p>
                <p>
                  HBRZ is organized under a dual-jurisdiction structure in
                  Nigeria and the United States, designed to support future
                  cross-border advisory coordination and governance alignment
                  with international professional standards. This structure
                  reflects the Company’s long-term vision of connecting local
                  institutional development with globally aligned advisory
                  methodologies. HBRZ’s approach is grounded in governance,
                  professionalism, and a commitment to building sustainable
                  institutional value over time.
                </p>
              </div>
            </div>
            <div className="relative lg:sticky lg:top-24">
              <div className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="HBRZ Headquarters"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-hbrz-gold p-10 text-white max-w-xs shadow-xl hidden md:block">
                <p className="text-2xl font-bold italic leading-tight">
                  “Designed for regulatory discipline and governance
                  excellence.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
