import type React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const location = useLocation();
  const isCompliancePage = location.pathname === '/compliance';

  return (
    <footer className="bg-hbrz-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="block mb-8 hover:opacity-95 transition-opacity"
            >
              <Logo className="h-12 md:h-14" variant="light" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg mt-6">
              HBRZ Global Purity Trading and Consulting Services Ltd is a
              Nigeria-registered company established to develop institutional
              consulting services and compliant operating models for future
              participation in lawful commodity markets.
            </p>
            {isCompliancePage && (
              <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-sm">
                <p className="text-xs text-hbrz-gold font-bold uppercase tracking-widest mb-3">
                  Compliance Notice
                </p>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  HBRZ does not engage in mining activities and conducts no
                  cash-based transactions. All trade is bank-led and subject to
                  rigorous AML/KYC controls.
                </p>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-hbrz-gold mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li>
                <Link
                  to="/about"
                  className="hover:text-hbrz-gold transition-colors"
                >
                  About Our Entity
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-hbrz-gold transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="hover:text-hbrz-gold transition-colors"
                >
                  Institutional Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/about/careers"
                  className="hover:text-hbrz-gold transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance"
                  className="hover:text-hbrz-gold transition-colors"
                >
                  Governance Framework
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-hbrz-gold transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-hbrz-gold mb-8">
              Global Presence
            </h4>
            <div className="space-y-6 text-sm text-gray-400">
              <div>
                <p className="font-bold text-gray-100 uppercase text-xs tracking-wider">
                  Nigeria (Kano)
                </p>
                <p className="mt-1">Regional HQ & Operations</p>
              </div>
              <div>
                <p className="font-bold text-gray-100 uppercase text-xs tracking-wider">
                  USA (Delaware & Virginia)
                </p>
                <div className="mt-2 text-[11px] leading-relaxed text-gray-400 font-light">
                  <p className="font-bold text-gray-300">
                    HBRZ Global Purity Trading and Consulting Services LLC
                  </p>
                  <p>10505 Judicial Dr. Suite 300</p>
                  <p>Fairfax, VA 22030, USA</p>
                </div>
                <p className="mt-2 text-[10px] leading-relaxed italic opacity-60">
                  Registered in Delaware and Virginia.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-bold">
                  Email: Info@hbrzglobalpurity.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} HBRZ Global Purity Trading and
            Consulting Services Ltd.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span className="text-gray-500">Privacy Policy</span>
            <span className="text-gray-500">Terms of Service</span>
            <span className="text-gray-500">AML Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
