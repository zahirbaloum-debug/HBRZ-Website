import React, { useEffect } from 'react';
import AfricaGlobe from '../Pictures/Africa Globe.png';

const Trading: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${AfricaGlobe})` }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Core Market Operations</span>
          <h1 className="text-5xl font-bold text-white mb-6">Commodity Trading <span className="text-hbrz-gold">& Intermediation</span></h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="mb-6 inline-block bg-hbrz-blue/5 p-3 rounded-lg">
                <svg className="w-10 h-10 text-hbrz-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-hbrz-blue mb-6 leading-tight">Compliant Precious Metals Advisory & Coordination</h2>
              <div className="text-gray-600 mb-10 leading-relaxed font-light text-lg space-y-4">
                <p>
                  HBRZ is structured to provide advisory and coordination support for lawful commodity trade activities, with a strategic focus on the precious metals sector, delivered through structured governance and institutional best practices. The Company’s operating model is designed to support counterparties through documentation oversight, process design, and systems-based coordination to strengthen transparency, traceability, and compliance across trade-related workflows. All physical handling, processing, and logistics activities are intended to be performed by licensed third-party service providers in accordance with applicable regulatory requirements.
                </p>
                <p className="font-semibold text-hbrz-blue text-base">Our support includes:</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] font-bold text-gray-700 uppercase tracking-widest">
                <div className="flex items-center p-5 bg-gray-50 border-l-4 border-hbrz-gold group hover:bg-white hover:shadow-md transition-all">
                  <span className="text-hbrz-gold mr-3">✓</span> Advisory & Process Coordination
                </div>
                <div className="flex items-center p-5 bg-gray-50 border-l-4 border-hbrz-gold group hover:bg-white hover:shadow-md transition-all">
                  <span className="text-hbrz-gold mr-3">✓</span> Refining Process Liaison (via licensed refiners)
                </div>
                <div className="flex items-center p-5 bg-gray-50 border-l-4 border-hbrz-gold group hover:bg-white hover:shadow-md transition-all">
                  <span className="text-hbrz-gold mr-3">✓</span> Storage & Logistics Coordination (through third parties)
                </div>
                <div className="flex items-center p-5 bg-gray-50 border-l-4 border-hbrz-gold group hover:bg-white hover:shadow-md transition-all">
                  <span className="text-hbrz-gold mr-3">✓</span> Export Process Advisory
                </div>
                <div className="flex items-center p-5 bg-gray-50 border-l-4 border-hbrz-gold group hover:bg-white hover:shadow-md transition-all">
                  <span className="text-hbrz-gold mr-3">✓</span> Assaying Process Coordination
                </div>
                <div className="flex items-center p-5 bg-gray-50 border-l-4 border-hbrz-gold group hover:bg-white hover:shadow-md transition-all">
                  <span className="text-hbrz-gold mr-3">✓</span> Documentation & Records Oversight
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-[12px] border-gray-50 bg-gray-100 transition-all duration-700 hover:shadow-hbrz-gold/20">
                  <img
                    src={AfricaGlobe}
                    alt="Africa Globe"
                    className="w-full h-full object-cover block"
                    onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                    style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hbrz-gold opacity-10 -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-hbrz-gold/20 scale-105 pointer-events-none rounded-sm"></div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Transaction Transparency Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-hbrz-blue font-bold text-sm uppercase tracking-[0.3em] mb-8">Governance & Transaction Transparency</h3>
          <p className="text-xl font-light text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            HBRZ is structured to promote transparent and well-governed commercial processes through the use of structured documentation, accountable workflows, and compliance-aligned systems designed to reduce operational opacity and strengthen institutional oversight.
          </p>
          
          <div className="max-w-2xl mx-auto">
             <p className="text-xs font-bold text-hbrz-gold uppercase tracking-[0.2em] mb-8">Key principles:</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 "Documented Process Trails",
                 "Governance-Aligned Frameworks",
                 "Responsible Sourcing Alignment",
                 "Counterparty Due Diligence"
               ].map((principle) => (
                 <div key={principle} className="flex items-center justify-center p-5 bg-white border border-gray-200 text-[11px] font-bold text-hbrz-blue uppercase tracking-widest shadow-sm hover:shadow-md transition-shadow">
                   <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mr-3"></span>
                   {principle}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trading;