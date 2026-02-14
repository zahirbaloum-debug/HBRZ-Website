import type React from 'react';
import { useEffect } from 'react';
import SEO from '../components/SEO';

const Compliance: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Compliance & Governance Framework"
        description="HBRZ operates with strong governance and compliance principles. Learn about our regulatory framework, AML/CFT policies, export compliance, and institutional standards."
        keywords="compliance framework, corporate governance, AML CFT, regulatory compliance, export regulations, institutional standards"
        canonical="https://hbrzglobalpurity.com/compliance"
      />
      {/* Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-hbrz-blue mb-8">
              Compliance <span className="text-hbrz-gold">& Governance</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              HBRZ is structured around governance and compliance principles to
              support transparent, well-governed advisory and trade-related
              coordination processes. The Company’s operating model is designed
              to align advisory and coordination activities with applicable
              regulatory, banking, and institutional standards.
            </p>
          </div>
        </div>
      </section>

      {/* Core Vetting Framework */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-hbrz-blue mb-6">
                  Regulatory Alignment
                </h2>
                <div className="h-1 w-16 bg-hbrz-gold mb-8"></div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
                  HBRZ is being structured to align its consulting and
                  trade-related advisory services with relevant Nigerian
                  regulatory requirements and internationally recognized
                  governance and compliance practices.
                </p>
                <div className="p-8 bg-hbrz-blue/5 rounded-sm border border-hbrz-blue/10">
                  <h4 className="text-xs font-bold text-hbrz-blue uppercase tracking-widest mb-6">
                    Relevant regulatory bodies include:
                  </h4>
                  <ul className="space-y-4 text-xs text-gray-500 font-semibold tracking-wide">
                    <li className="flex items-center">
                      <span className="text-hbrz-gold mr-3">•</span>
                      Central Bank of Nigeria (CBN)
                    </li>
                    <li className="flex items-center">
                      <span className="text-hbrz-gold mr-3">•</span>
                      Nigeria Export Promotion Council (NEPC)
                    </li>
                    <li className="flex items-center">
                      <span className="text-hbrz-gold mr-3">•</span>
                      Nigeria Customs Service
                    </li>
                    <li className="flex items-center">
                      <span className="text-hbrz-gold mr-3">•</span>
                      Delaware Division of Corporations (USA)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-12">
                {/* 01 – Export & Trade Documentation */}
                <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-hbrz-blue text-white rounded-full flex items-center justify-center mr-5 font-bold text-base shadow-lg">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-hbrz-blue uppercase tracking-wider">
                      Export & Trade Documentation (Advisory Support)
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-bold text-hbrz-gold text-xs uppercase tracking-widest mb-4">
                        NEPC Registration
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        HBRZ is registered with the Nigeria Export Promotion
                        Council and is structured to provide advisory and
                        coordination support for export-related documentation
                        processes conducted through licensed counterparties.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-hbrz-gold text-xs uppercase tracking-widest mb-4">
                        Form NXP Process Support
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        The Company’s advisory framework is designed to support
                        clients in organizing and maintaining export
                        documentation in alignment with the Central Bank of
                        Nigeria’s Form NXP procedures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 02 – Banking & Financial Governance */}
                <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-hbrz-blue text-white rounded-full flex items-center justify-center mr-5 font-bold text-base shadow-lg">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-hbrz-blue uppercase tracking-wider">
                      Banking & Financial Governance
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-bold text-hbrz-gold text-xs uppercase tracking-widest mb-4">
                        Dual-Signatory Governance
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        Corporate financial activities are governed by
                        structured approval frameworks that promote
                        accountability and internal control.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-hbrz-gold text-xs uppercase tracking-widest mb-4">
                        Regulated Financial Channels
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        All financial flows associated with trade-related
                        coordination activities are intended to be conducted
                        through licensed counterparties and regulated financial
                        institutions. HBRZ does not engage in cash-based
                        commercial transactions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 03 – AML / KYC & Documentation Controls */}
                <div className="bg-gray-50 p-10 rounded-sm border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-hbrz-blue text-white rounded-full flex items-center justify-center mr-5 font-bold text-base shadow-lg">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-hbrz-blue uppercase tracking-wider">
                      AML / KYC & Documentation Controls
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-bold text-hbrz-gold text-xs uppercase tracking-widest mb-4">
                        Counterparty Due Diligence
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        HBRZ’s governance framework incorporates due diligence
                        principles, including identity verification and risk
                        screening, to support responsible engagement with
                        commercial counterparties.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-hbrz-gold text-xs uppercase tracking-widest mb-4">
                        Documentation & Traceability
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        The Company’s operating model emphasizes the
                        organization and maintenance of transaction records to
                        promote transparency, traceability, and alignment with
                        applicable regulatory and institutional standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Border Governance Structure Banner */}
      <section className="py-24 bg-hbrz-blue text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Cross-Border Governance Structure
            </h2>
            <p className="text-gray-300 font-light leading-relaxed max-w-3xl mx-auto text-lg">
              HBRZ Global Purity Trading and Consulting Services LLC (United
              States) and HBRZ Global Purity Trading and Consulting Services Ltd
              (Nigeria) are structured as legally independent entities with
              distinct governance and jurisdictional responsibilities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="p-10 border border-white/10 bg-white/5 rounded-sm">
              <h4 className="text-hbrz-gold font-bold text-sm uppercase tracking-widest mb-6">
                Arm’s-Length Operations
              </h4>
              <p className="text-gray-300 leading-relaxed font-light">
                The Company’s governance framework is designed to ensure that
                all intercompany interactions are conducted on an arm’s-length
                basis, supported by documented governance procedures,
                transparent invoicing, and clear jurisdiction-specific
                accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Governance Orientation */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-12 bg-hbrz-gold"></div>
            <h2 className="text-2xl font-bold text-hbrz-blue uppercase tracking-tight">
              Global Governance Orientation
            </h2>
            <div className="h-px w-12 bg-hbrz-gold"></div>
          </div>
          <p className="text-lg text-gray-500 leading-relaxed font-light italic max-w-3xl mx-auto">
            "Through its dual-jurisdictional structure, HBRZ is designed to
            align its advisory and coordination services with international
            governance and professional standards. The Company’s operating model
            is intended to support transparent and well-governed commercial and
            institutional processes through structured advisory and
            systems-based coordination."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
