import React, { useEffect } from 'react';

const Strategy: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Operational Framework</span>
          <h1 className="text-5xl font-bold text-white mb-6">Our <span className="text-hbrz-gold">Strategy</span></h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Executing a dual-jurisdictional advisory model built on governance, regulatory alignment, and institutional strengthening.
          </p>
        </div>
      </section>

      {/* Strategic Execution Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Strategy Text Column */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-hbrz-blue mb-8">Strategic Execution</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
                HBRZ applies a multi-jurisdictional operating framework that leverages its presence in Nigeria and the United States to deliver structured consulting and advisory services aligned with international governance benchmarks. This model enables the Company to support institutional capacity building, operational strengthening, and systems-based advisory engagements while maintaining arm’s-length coordination and adherence to applicable regulatory and compliance frameworks across jurisdictions.
              </p>
              
              <div className="space-y-8">
                {/* Operational Model */}
                <div className="p-8 bg-gray-50 border-l-4 border-hbrz-gold shadow-sm group hover:bg-white hover:shadow-md transition-all">
                  <h5 className="font-bold text-hbrz-blue uppercase tracking-widest text-xs mb-3">Operational Model</h5>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    HBRZ operates through a coordinated Nigeria–United States structure designed to support consulting and institutional advisory engagements. The Nigeria entity focuses on local implementation and institutional support activities, while the U.S. entity provides strategic advisory coordination and systems-based support. This operating model allows the Company to align local execution with international best practices, ensuring that advisory services are delivered through disciplined governance, structured methodologies, and compliance-aligned processes.
                  </p>
                </div>
                
                {/* Value Proposition */}
                <div className="p-8 bg-gray-50 border-l-4 border-hbrz-blue shadow-sm group hover:bg-white hover:shadow-md transition-all">
                  <h5 className="font-bold text-hbrz-blue uppercase tracking-widest text-xs mb-3">Value Proposition</h5>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    HBRZ delivers consulting and advisory services that help organizations strengthen governance, improve operational systems, and build institutional capacity. Through a structured, systems-based approach, the Company supports clients in aligning leadership, strategy, and execution with global best practices. Our dual-jurisdictional structure enables us to combine local operational insight with international advisory standards, providing clients with practical solutions grounded in transparency, accountability, and measurable performance outcomes.
                  </p>
                </div>

                {/* How We Execute */}
                <div className="p-8 bg-gray-50 border-l-4 border-hbrz-gold shadow-sm group hover:bg-white hover:shadow-md transition-all">
                  <h5 className="font-bold text-hbrz-blue uppercase tracking-widest text-xs mb-3">How We Execute</h5>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    HBRZ employs a structured execution methodology that integrates institutional assessment, strategic design, and implementation support. Engagements begin with an evaluation of governance structures and operational systems, followed by the development of tailored advisory solutions aligned with client objectives. The Company supports execution through coordinated project management, performance monitoring, and capacity-building initiatives, ensuring that advisory recommendations translate into sustainable institutional improvements.
                  </p>
                </div>
              </div>
            </div>

            {/* Jurisdictional Map Column */}
            <div className="order-1 lg:order-2 space-y-8 lg:sticky lg:top-28">
              <div className="relative bg-gray-50 p-8 border border-gray-100 rounded-sm">
                <div className="text-center mb-6">
                  <span className="text-hbrz-gold text-[10px] font-bold uppercase tracking-[0.4em]">Global Connectivity</span>
                </div>
                
                {/* Minimalist World Map Illustration */}
                <div className="relative aspect-video w-full flex items-center justify-center opacity-80 group">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                    alt="World Map Graphic" 
                    className="w-full h-full object-contain grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  {/* Highlight Overlays for USA and Nigeria */}
                  <div className="absolute top-[25%] left-[20%] w-6 h-6 bg-hbrz-gold rounded-full animate-ping opacity-40"></div>
                  <div className="absolute top-[25%] left-[20%] w-3 h-3 bg-hbrz-gold rounded-full border-2 border-white shadow-lg"></div>
                  
                  <div className="absolute top-[55%] left-[48%] w-6 h-6 bg-hbrz-gold rounded-full animate-ping opacity-40"></div>
                  <div className="absolute top-[55%] left-[48%] w-3 h-3 bg-hbrz-gold rounded-full border-2 border-white shadow-lg"></div>
                </div>

                {/* Model Caption */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h4 className="text-hbrz-blue font-bold text-sm uppercase tracking-[0.2em] mb-4">International Advisory Operating Model</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-hbrz-gold rounded-full mr-3"></span>
                      <span className="text-gray-600"><strong>Nigeria</strong> – Institutional Development & Local Engagement</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-hbrz-gold rounded-full mr-3"></span>
                      <span className="text-gray-600"><strong>United States</strong> – Governance, Strategy & Systems Integration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Integrity Statement */}
              <div className="p-6 bg-hbrz-blue text-white rounded-sm text-center">
                <p className="text-xs font-light italic text-gray-300">
                  "Our international operating framework connects local implementation with global governance and systems-based advisory delivery."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Milestones Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-hbrz-blue mb-12 uppercase tracking-tight">Institutional Strengthening</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="h-0.5 w-12 bg-hbrz-gold mx-auto mb-4"></div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Governance-Aligned Operations</p>
            </div>
            <div>
              <div className="h-0.5 w-12 bg-hbrz-gold mx-auto mb-4"></div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Systems-Based Execution</p>
            </div>
            <div>
              <div className="h-0.5 w-12 bg-hbrz-gold mx-auto mb-4"></div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Transparent Advisory Frameworks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategy;