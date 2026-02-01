import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const whatWeDo = [
    {
      title: "Commodity Trade Facilitation & Intermediation",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      desc: "HBRZ provides advisory and coordination support for lawful commodity trade activities, with a focus on the precious metals sector, delivered through structured governance and institutional best practices. The Company supports clients by providing oversight of documentation, process design, and systems-based coordination to strengthen transparency and compliance across trade-related workflows. Operating independently of mining activities and adhering to a strict no-cash policy, HBRZ assists counterparties in maintaining compliant processes through licensed agents and regulated financial institutions, in accordance with applicable customs, foreign exchange, and regulatory requirements."
    },
    {
      title: "Export Coordination & Documentation Support",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      desc: "Our team provides advisory and coordination support for export-related documentation and compliance processes, ensuring alignment with Nigerian Export Promotion Council (NEPC) requirements and Central Bank of Nigeria (CBN) Form NXP procedures. Using a systems-based approach, we support the organization and validation of shipment documentation with an emphasis on accuracy, transparency, and consistency of trade records. Through structured coordination with licensed customs agents and designated financial institutions, we assist clients in maintaining compliant export processes and well-governed transactional workflows."
    },
    {
      title: "Consulting & Advisory Services",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      desc: "We provide consulting and advisory services to government institutions, ministries, departments, and agencies (MDAs), private sector organizations, and international partners. Our capabilities include strategic and institutional planning, trade and supply-chain advisory, project coordination, operational and institutional support, financial and management advisory, and policy-oriented analytical services. All engagements are non-regulated in nature and focused on advisory, coordination, and capacity-building functions designed to strengthen organizational performance and institutional effectiveness."
    },
    {
      title: "General IT Advisory & Systems Support",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      desc: "We provide general information technology (IT) advisory and systems support services designed to enhance organizational efficiency and digital workflow effectiveness. Our services include technology needs assessment, systems optimization, business process digitization, data organization and reporting support, website and digital presence coordination, and technology procurement advisory. All IT services are advisory in nature and focused on non-regulated activities. The Company does not provide regulated telecommunications services, data hosting, cybersecurity certification, or financial systems processing services."
    },
    {
      title: "Cross-Border Advisory Coordination",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      desc: "Operating through a dual-jurisdictional presence in Nigeria and the United States, HBRZ delivers coordinated consulting and advisory services aligned with applicable governance and regulatory frameworks. The Nigerian entity focuses on local implementation support and institutional capacity-building engagements, while the U.S. entity provides strategic advisory coordination and systems-based support. Both entities operate independently and on an arm’s-length basis, ensuring clear governance, structured service delivery, and compliance with relevant legal and professional standards."
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-hbrz-blue py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-hbrz-blue via-hbrz-blue/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 border border-hbrz-gold text-hbrz-gold text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded-sm bg-hbrz-gold/10">
              Strategic Trade Intermediation and Institutional Advisory Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Purity in Trade <br />
              <span className="text-hbrz-gold">Integrity in Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl">
              HBRZ Global Purity is structured to provide institutional consulting and advisory services focused on capacity building and organizational strengthening, general information technology (IT) advisory and systems support, and governance-aligned coordination frameworks for future participation in lawful precious metals markets. All activities are designed to operate within principles of strong governance, transparency, and accountability.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-hbrz-gold text-white px-10 py-5 rounded-sm font-bold text-center hover:bg-[#D4AF37] transition-all shadow-xl uppercase tracking-wider text-sm">
                Engage Our Services
              </Link>
              <Link to="/compliance" className="border border-white/40 text-white px-10 py-5 rounded-sm font-bold text-center hover:bg-white hover:text-hbrz-blue transition-all uppercase tracking-wider text-sm backdrop-blur-sm">
                Compliance Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-24">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-px w-12 bg-hbrz-gold"></div>
              <span className="text-hbrz-gold font-bold uppercase tracking-[0.3em] text-xs">Our Mandate</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-hbrz-blue mb-8">What We Do</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              HBRZ Global Purity Trading and Consulting Services Ltd, together with its affiliated U.S. entity, HBRZ Global Purity Trading and Consulting Services LLC (Delaware and Virginia), is structured to provide institutional consulting and advisory services, as well as governance-aligned coordination support for lawful commodity market participation and general information technology (IT) advisory. All activities are designed to be delivered within strong governance frameworks, compliance discipline, and systems-based operating models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whatWeDo.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-10 border border-gray-100 bg-white hover:border-hbrz-gold transition-all duration-500 shadow-sm hover:shadow-xl group flex flex-col ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="mb-8 text-hbrz-gold group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-hbrz-blue mb-6 leading-tight group-hover:text-hbrz-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Link Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="bg-gray-100 rounded-sm aspect-[4/3] relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" alt="Consulting Team collaborating" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-hbrz-blue/20"></div>
            </div>
            <div>
              <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Our Approach</span>
              <h2 className="text-4xl font-bold text-hbrz-blue mb-6">Built on <span className="text-hbrz-gold">Governance</span></h2>
              <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">
                Our approach is defined by professionalism, institutional discipline, and a commitment to long-term value creation. Operating on an arm’s-length basis, we ensure that all advisory engagements and operational support activities are delivered through transparent, accountable, and well-governed processes.
              </p>
              <Link to="/about" className="inline-block text-xs font-bold text-hbrz-gold uppercase tracking-[0.2em] border-b-2 border-hbrz-gold pb-1 hover:text-hbrz-blue hover:border-hbrz-blue transition-all">
                Learn More About Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Alignment Banner */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-12 bg-hbrz-gold"></div>
              <span className="text-hbrz-gold font-bold uppercase tracking-[0.4em] text-xs">Governance & Alignment</span>
              <div className="h-px w-12 bg-hbrz-gold"></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-hbrz-blue leading-relaxed">
              Governance-led advisory and coordination services aligned with regulatory and institutional standards.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;