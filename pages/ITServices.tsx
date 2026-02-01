import React, { useEffect } from 'react';

const ITServices: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">General <span className="text-hbrz-gold">IT Services</span></h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-3/5">
              <div className="mb-6 inline-block bg-hbrz-blue/5 p-3 rounded-lg">
                <svg className="w-10 h-10 text-hbrz-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-hbrz-blue mb-8">Operational Digital Efficiency</h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-sm font-light">
                <p>
                  HBRZ Global Purity provides general information technology (IT) services focused on non-regulated, non-licensed activities that enhance organizational efficiency and institutional capacity. Drawing on a design-led, systems-based approach, these services include IT advisory and support, technology needs assessment, systems optimization, digital workflow design, data organization and reporting support, business systems integration, website and digital presence coordination, and technology procurement advisory.
                </p>
                <p>
                  The Company emphasizes structured execution, operational continuity, and governance-aligned delivery through standardized project coordination, performance monitoring, and value measurement frameworks. In addition, the Company supports human capital development through non-certifying technical training and advisory services in digital literacy, operational systems use, and management information practices, enabling organizations to align technology adoption with leadership, decision-making, and institutional effectiveness.
                </p>
                <div className="bg-gray-50 p-6 border-l-4 border-hbrz-gold italic text-xs text-gray-500">
                  <p>
                    <strong>Institutional Disclaimer:</strong> The Company does not provide regulated telecommunications services, data hosting, cybersecurity certification, financial systems processing, or any activity requiring sector-specific licensing. All services are strictly limited to lawful advisory, support, and coordination functions.
                  </p>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] font-bold text-hbrz-blue uppercase tracking-widest">
                <div className="p-4 bg-gray-50 border border-gray-100 rounded flex items-center">
                   <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mr-3"></span> Systems Assessment & Optimization
                </div>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded flex items-center">
                   <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mr-3"></span> Digital Workflow Design
                </div>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded flex items-center">
                   <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mr-3"></span> Business Systems Integration
                </div>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded flex items-center">
                   <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mr-3"></span> Technology Procurement Advisory
                </div>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded flex items-center">
                   <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mr-3"></span> Data Organization & Reporting
                </div>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded flex items-center">
                   <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mr-3"></span> IT Project Coordination
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 lg:sticky lg:top-24">
              <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Technology Systems" className="w-full h-full object-cover" />
              </div>
              <div className="mt-8 p-6 bg-hbrz-blue text-white rounded-sm">
                <h4 className="text-hbrz-gold text-xs font-bold uppercase tracking-widest mb-3">Strategic Mandate</h4>
                <p className="text-xs font-light leading-relaxed text-gray-300">
                  Aligning technology adoption with leadership and institutional effectiveness through disciplined operational frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;