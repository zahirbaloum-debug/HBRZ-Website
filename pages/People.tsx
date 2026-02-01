import React, { useEffect } from 'react';

const People: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const boardOfDirectors = [
    {
      name: "Zahir Baloum",
      pos: "Chairman of the Board",
      desc: "Provides strategic oversight and leads the Board in setting the Company’s long-term direction and governance priorities. Ensures alignment between the Company’s mission, advisory mandate, and institutional values, and supports the Board in maintaining high standards of corporate governance, transparency, and regulatory awareness."
    },
    {
      pos: "Non-Executive Director (Regulatory Affairs)",
      desc: "Provides independent board-level guidance on regulatory developments relevant to cross-border advisory and coordination activities. Advises on international trade law, West African regulatory frameworks, and evolving AML/CFT standards to support the Company’s governance framework, compliance policies, and regulatory preparedness."
    },
    {
      pos: "Non-Executive Director (Strategic Finance)",
      desc: "Provides independent board-level oversight of the Company’s financial governance framework and risk management policies. Supports the Audit and Risk Committee and advises on the design and integrity of financial control systems, including approval structures and banking governance arrangements, to promote accountability and institutional readiness."
    },
    {
      pos: "Legal Counsel & Board Secretary",
      desc: "Oversees corporate secretarial functions and advises the Board on corporate governance, regulatory obligations, and legal matters affecting the Company’s advisory and coordination mandate. Ensures that board resolutions, governance documentation, and statutory records are maintained in alignment with applicable Nigerian and U.S. corporate law."
    },
    {
      pos: "Independent Non-Executive Director (Governance & Ethics)",
      desc: "Provides independent oversight on corporate governance standards, ethical conduct, and institutional integrity. Advises the Board on governance best practices, conflict-of-interest management, and accountability frameworks, supporting balanced decision-making and reinforcing the Company’s commitment to transparency and professionalism."
    }
  ];

  const leadership = [
    { 
      name: "Zahir Baloum",
      pos: "Managing Director / CEO", 
      bio: "Zahir Baloum serves as Managing Director and Chief Executive Officer of HBRZ Global Purity Trading and Consulting Services Ltd, providing strategic leadership for the Company’s cross-border consulting and advisory operations. He oversees the development and delivery of institutional advisory, governance, and systems-based consulting engagements across HBRZ’s Nigeria and United States structure.\n\nHis leadership approach emphasizes professionalism, transparency, and disciplined governance, ensuring that all advisory and coordination activities align with applicable regulatory and compliance frameworks. A Global Chief Financial Officer with extensive experience across highly regulated sectors, including healthcare, energy, food and beverage, and infrastructure-intensive industries, he is a trusted advisor to boards, senior executives, and institutional stakeholders on financial governance, enterprise risk management, and long-term value creation.\n\nZahir brings deep expertise in guiding organizations through growth, transformation, and complex regulatory environments, including multi-jurisdictional operating contexts. His professional strengths include strategic planning, mergers and acquisitions, audit and risk management, project and infrastructure finance, treasury management, and institutional capacity development. He also has broad experience in procurement, human resources, contract management, and business development.\n\nHe is recognized for balancing capital discipline with sustainable growth strategies, strengthening governance frameworks, and equipping operational leaders with clear financial and performance insights. His professional experience includes advisory and leadership roles supporting non-governmental organizations, international development partners, institutional investors, lenders, and philanthropic organizations across the United States, Africa, Asia, Latin America, and the Caribbean.",
      image: new URL('../Pictures/ED-CEO.jpeg', import.meta.url).href,
      isCEO: true
    },
    {
      name: "Zahir Baloum",
      pos: "Chief Financial Officer (CFO)",
      desc: "Provides leadership over the Company’s financial governance, capital strategy, and institutional control framework. Oversees multi-jurisdictional financial reporting, treasury oversight, and the implementation of disciplined internal controls and audit protocols to support transparency, accountability, and sound financial management across the organization’s advisory and coordination activities."
    },
    { 
      pos: "Director of Compliance", 
      desc: "Provides leadership over the Company’s governance, risk, and compliance frameworks, ensuring that advisory and coordination activities align with applicable regulatory, banking, and institutional standards. Oversees the development and implementation of internal compliance policies, counterparty due diligence procedures, and documentation controls, and coordinates with licensed counterparties and external advisors to support regulatory alignment across jurisdictions." 
    },
    { 
      pos: "Director of Operations", 
      desc: "Oversees the design and execution of organizational workflows and service delivery frameworks, ensuring that consulting and advisory engagements are delivered with professional discipline, operational consistency, and alignment with institutional governance standards. Supports the coordination of trade-related processes through structured documentation, process oversight, and systems-based operational support." 
    },
    { 
      pos: "Head of Institutional Advisory", 
      desc: "Leads the design and delivery of institutional consulting and advisory services for government ministries, departments, and agencies (MDAs) and international development partners. The role focuses on governance frameworks, policy implementation support, and structured program and systems-based advisory engagements that strengthen institutional capacity, operational effectiveness, and public-sector performance." 
    },
    { 
      pos: "Director of Digital Systems & IT Advisory", 
      desc: "Leads the Company’s IT advisory and systems support services focused on non-regulated activities that enhance organizational efficiency and institutional capacity. Oversees technology assessments, systems optimization, digital workflow design, data organization and reporting support, business systems integration, and digital presence coordination. Ensures delivery through a design-led, systems-based approach aligned with governance standards, and supports institutional capacity building through technical training and advisory in digital literacy and operational systems use." 
    },
    { 
      pos: "Director of Human Resources & Organizational Development", 
      desc: "Leads the Company’s human capital strategy and organizational development function, supporting recruitment, professional development, and performance management across the Nigeria and United States operations. Oversees talent acquisition, training and capacity-building programs, and workforce policies aligned with governance standards and institutional best practices. Supports leadership in building a high-performance, values-driven professional organization." 
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Governance & Leadership</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our <span className="text-hbrz-gold">People</span></h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            HBRZ is governed by an esteemed Board of Directors and led by an executive team of industry professionals dedicated to integrity and excellence.
          </p>
        </div>
      </section>

      {/* Featured Leadership Profile (CEO) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Managing Director Profile */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Sidebar: Image and Narrative Mandate */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="relative z-10 aspect-[3/4] overflow-hidden bg-gray-100 shadow-2xl border border-gray-100">
                  <img 
                    src={leadership[0].image} 
                    alt={leadership[0].name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                {/* Architectural background elements for institutional feel */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-hbrz-gold z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hbrz-blue/5 -z-10"></div>
                
                {/* Narrative block */}
                <div className="mt-8 p-8 bg-gray-50 border border-gray-100 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-hbrz-gold"></div>
                   <h5 className="text-hbrz-blue font-bold text-xs uppercase tracking-widest mb-4">Executive Mandate</h5>
                   <p className="text-sm text-gray-600 leading-relaxed font-light whitespace-pre-wrap">
                     {leadership[0].bio}
                   </p>
                </div>
              </div>

              {/* Main Content: Identity and Strategic Highlights */}
              <div className="lg:col-span-7 pt-4">
                <div className="max-w-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-px w-12 bg-hbrz-gold"></div>
                    <span className="text-hbrz-gold font-bold uppercase tracking-[0.3em] text-xs">Principal Leadership</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-hbrz-blue mb-4 leading-tight">{leadership[0].name}</h2>
                  <h3 className="text-2xl text-hbrz-gold font-light mb-12 uppercase tracking-wide">{leadership[0].pos}</h3>
                  
                  <div className="space-y-12">
                    {/* Summary Tagline */}
                    <div className="p-8 bg-hbrz-blue text-white rounded-sm shadow-lg">
                      <p className="text-lg font-light leading-relaxed italic">
                        "Known for balancing capital discipline with growth strategies to advance governance-led organizational performance."
                      </p>
                    </div>

                    {/* Reach and Sector Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                      <div>
                        <h5 className="text-hbrz-blue font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Geographic & Institutional Exposure</h5>
                        <ul className="text-gray-500 text-sm space-y-4 font-light">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span>United States, Africa, Asia, Eastern Europe, and Latin America & the Caribbean</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span>International development, government, and non-governmental organizations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span>Funding partners and philanthropic organizations.</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-hbrz-blue font-bold text-xs uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Sector Experience</h5>
                        <ul className="text-gray-500 text-sm space-y-4 font-light">
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span>Healthcare systems and power distribution infrastructure</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span>Digital health and health informatics</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span>Food, beverage, and agriculture value chains</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-hbrz-gold rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span>Microinsurance and trade-supporting institutional environments</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Operational Competencies Grid */}
                    <div className="pt-8 border-t border-gray-100">
                      <h5 className="text-hbrz-blue font-bold text-xs uppercase tracking-widest mb-8">Operational Competencies</h5>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Strategic Planning", "Human Resources", "Corporate Finance", "Audit", "Risk Mgmt", "Procurement", "Contract Mgmt", "Institutional Capacity", "Business Development"].map(item => (
                          <div key={item} className="p-4 bg-gray-50 border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center group hover:bg-hbrz-gold hover:text-white transition-all cursor-default">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Board of Directors Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Corporate Governance</span>
              <h3 className="text-3xl font-bold text-hbrz-blue mb-4 uppercase tracking-tight">Board of Directors</h3>
              <div className="h-0.5 w-16 bg-hbrz-gold mx-auto"></div>
              <p className="mt-6 text-gray-500 font-light max-w-2xl mx-auto text-sm">
                The Board of Directors is responsible for the overall governance, risk management, and strategic direction of HBRZ Global Purity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boardOfDirectors.map((director, idx) => (
                <div key={idx} className="p-10 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-sm relative group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg className="w-16 h-16 text-hbrz-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  {director.name && (
                    <h4 className="text-hbrz-blue font-bold text-xl mb-1">{director.name}</h4>
                  )}
                  <h5 className={`${director.name ? 'text-hbrz-gold text-xs font-bold uppercase tracking-widest' : 'text-hbrz-blue font-bold text-lg uppercase tracking-wider'} mb-4 border-b border-gray-200 pb-3`}>
                    {director.pos}
                  </h5>
                  <p className="text-gray-500 text-sm leading-relaxed font-light italic">
                    {director.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Management Team Grid */}
          <div>
            <div className="text-center mb-16">
              <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Operational Excellence</span>
              <h3 className="text-3xl font-bold text-hbrz-blue mb-4 uppercase tracking-tight">Institutional Management Team</h3>
              <div className="h-0.5 w-16 bg-hbrz-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.slice(1).map((person, idx) => (
                <div key={idx} className="group p-10 border border-gray-100 bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div>
                    {person.name && (
                      <h4 className="text-hbrz-blue font-bold text-xl mb-1">{person.name}</h4>
                    )}
                    <h5 className={`${person.name ? 'text-hbrz-gold text-xs font-bold uppercase tracking-widest' : 'text-hbrz-blue font-bold text-base uppercase tracking-wider'} mb-4 border-b border-gray-100 pb-3`}>
                      {person.pos}
                    </h5>
                    <p className="text-gray-500 text-sm leading-relaxed font-light mb-6">
                      {person.desc}
                    </p>
                  </div>
                  <div className="flex items-center text-hbrz-blue text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-hbrz-gold transition-colors">
                    <span className="mr-2">Governance Pillar</span>
                    <div className="flex-grow h-px bg-gray-100 group-hover:bg-hbrz-gold/30 transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-hbrz-blue text-white rounded-sm shadow-xl">
              <h4 className="text-hbrz-gold font-bold uppercase tracking-widest text-xs mb-6">Professional Rigor</h4>
              <p className="text-gray-300 font-light leading-relaxed">
                Our professionals are selected for their commitment to high standards of governance, ethics, and disciplined execution. We believe professional excellence is achieved through continuous development in institutional best practices, regulatory awareness, and systems-based advisory methodologies. Every HBRZ leader upholds the Company’s principles of transparency, accountability, and professional integrity in all engagements.
              </p>
            </div>
            <div className="p-12 bg-white border border-gray-200 rounded-sm">
              <h4 className="text-hbrz-blue font-bold uppercase tracking-widest text-xs mb-6">Institutional Discipline</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                We foster a culture of discipline across all advisory and operational activities. Our leadership team ensures that strategic decisions and service delivery are aligned with the Company’s governance frameworks, professional standards, and applicable regulatory and compliance expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Verification Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <svg className="w-12 h-12 text-hbrz-gold mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="text-hbrz-blue font-bold text-sm uppercase tracking-[0.3em] mb-4">Verification & Transparency</p>
          <p className="text-gray-400 font-light leading-relaxed text-sm max-w-2xl mx-auto italic">
            "The HBRZ executive board undergoes regular independent auditing and vetting to maintain the absolute institutional integrity of our international coordination services."
          </p>
        </div>
      </section>
    </div>
  );
};

export default People;