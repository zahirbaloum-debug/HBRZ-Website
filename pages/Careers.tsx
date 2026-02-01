import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const values = [
    {
      title: "Institutional Rigor",
      desc: "We are interested in professionals who appreciate the importance of structured governance and who are comfortable working within clearly defined regulatory and professional frameworks."
    },
    {
      title: "Analytical Excellence",
      desc: "Success at HBRZ will be driven by the ability to analyze complex information and translate it into practical, strategic insights that strengthen organizational performance and institutional resilience."
    },
    {
      title: "Global Perspective",
      desc: "HBRZ is being organized through a dual-jurisdictional structure in Nigeria and the United States. This model requires a mindset that values cultural intelligence, cross-border collaboration, and internationally aligned professional standards."
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-hbrz-blue py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540331547168-8b6472b78339?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"></div>
          <div className="absolute inset-0 bg-hbrz-blue/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Human Capital</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Careers at <span className="text-hbrz-gold">HBRZ</span></h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Building the next generation of institutional consulting and advisory professionals through professional discipline and global standards.
          </p>
        </div>
      </section>

      {/* Recruitment Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-hbrz-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl font-bold text-hbrz-blue mb-8 leading-tight">Exceptional People. <br/>Institutional Impact.</h2>
              <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
                At HBRZ Global Purity, we are building a consulting and advisory firm grounded in transparency, professionalism, and ethical excellence. We seek individuals who are not only strong in their technical disciplines but who also value governance, structured systems, and responsible institutional engagement.
              </p>
              <p className="text-gray-500 font-light leading-relaxed">
                Our organization is being structured to bring together professionals in institutional advisory, governance and compliance, financial and operational systems, and technology-enabled service delivery. We aim to create a professional environment where intellectual curiosity is supported by disciplined, systems-based approaches to work.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-8 bg-gray-50 border-l-4 border-hbrz-gold shadow-sm">
                  <h4 className="text-hbrz-blue font-bold text-sm uppercase tracking-wider mb-2">{v.title}</h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities / Application Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-hbrz-blue mb-6">Current Opportunities</h2>
            <div className="text-gray-500 font-light leading-relaxed text-left max-w-xl mx-auto">
              <p className="mb-4">At this stage, HBRZ welcomes expressions of interest from professionals with experience in:</p>
              <ul className="space-y-2 mb-8 list-disc pl-5">
                <li>Governance, Policy, and Compliance</li>
                <li>Trade and Financial Systems Advisory</li>
                <li>Public sector and institutional Capacity Building</li>
                <li>Human Resources and Organizational Development</li>
                <li>IT Advisory and Technical Support</li>
                <li>Finance and Accounting</li>
                <li>Project MGMT</li>
                <li>Procurement and Contract MGMT</li>
                <li>Board Of Directors Candidates</li>
                <li>Operations and Logistics</li>
              </ul>
              <p className="italic text-sm text-center">Formal recruitment will be announced as operational activities commence.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-12 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-hbrz-blue mb-8 uppercase tracking-widest">How to Connect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex flex-col">
                <span className="text-hbrz-gold font-bold text-lg mb-2">01.</span>
                <span className="text-xs font-bold text-hbrz-blue uppercase tracking-wider mb-2">Institutional Alignment</span>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Ensure your profile reflects a commitment to structured governance and professional excellence in line with our core pillars.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-hbrz-gold font-bold text-lg mb-2">02.</span>
                <span className="text-xs font-bold text-hbrz-blue uppercase tracking-wider mb-2">Expression of Interest</span>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Submit your professional CV and a brief cover note explaining your interest in HBRZ's institutional mission.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-hbrz-gold font-bold text-lg mb-2">03.</span>
                <span className="text-xs font-bold text-hbrz-blue uppercase tracking-wider mb-2">Talent Pipeline</span>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Suitable profiles are maintained within our institutional talent pipeline for future formal recruitment phases.</p>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-gray-100">
              <p className="text-sm font-bold text-hbrz-blue mb-4">Contact Human Capital:</p>
              <a href="mailto:Careers@hbrzglobalpurity.com" className="text-2xl font-light text-hbrz-gold hover:text-hbrz-blue transition-colors">
                Careers@hbrzglobalpurity.com
              </a>
              <p className="text-[10px] text-gray-400 mt-6 uppercase tracking-[0.2em] font-bold">
                HBRZ Global Purity is an Equal Opportunity Employer and values institutional diversity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-hbrz-blue mb-8">Professional Engagement</h2>
          <Link to="/contact" className="inline-block bg-hbrz-blue text-white px-10 py-5 rounded-sm font-bold hover:bg-hbrz-blue/90 transition-all shadow-lg uppercase tracking-wider text-sm">
            General Talent Inquiries
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;