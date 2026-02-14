import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const location = useLocation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/insights' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Careers', path: '/about/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const aboutSubLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Mission, Vision & Value', path: '/about/mission' },
    { name: 'Our Strategy', path: '/about/strategy' },
    { name: 'Our People', path: '/about/people' },
  ];

  const servicesSubLinks = [
    { name: 'Commodity Trading & Intermediation', path: '/services/trading' },
    { name: 'Institutional Consulting Services', path: '/services/consulting' },
    { name: 'General IT Services', path: '/services/it' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message}`,
        );
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-20">
          {/* Logo Container - ensures it never shrinks */}
          <div className="flex items-center flex-shrink-0 py-2">
            <Link
              to="/"
              className="hover:opacity-90 transition-opacity flex items-center"
            >
              <Logo className="h-10 md:h-12" singleLine={isFullscreen} />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-6 ml-4">
            <Link
              to="/"
              className={`text-[11px] xl:text-xs font-bold uppercase tracking-widest transition-colors duration-200 whitespace-nowrap ${
                isActive('/')
                  ? 'text-hbrz-gold border-b-2 border-hbrz-gold'
                  : 'text-gray-500 hover:text-hbrz-blue'
              } py-2`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
              ref={aboutRef}
            >
              <button
                type="button"
                className={`flex items-center text-[11px] xl:text-xs font-bold uppercase tracking-widest transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === '/about' ||
                  (
                    location.pathname.startsWith('/about') &&
                      location.pathname !== '/about/careers'
                  )
                    ? 'text-hbrz-gold border-b-2 border-hbrz-gold'
                    : 'text-gray-500 hover:text-hbrz-blue'
                } py-2 focus:outline-none`}
              >
                About Us
                <svg
                  className={`ml-1 h-3 w-3 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl py-4 transition-all duration-200 origin-top transform ${
                  aboutDropdownOpen
                    ? 'scale-y-100 opacity-100 visible'
                    : 'scale-y-95 opacity-0 invisible'
                }`}
              >
                {aboutSubLinks.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className="block px-6 py-3 text-[10px] font-bold text-gray-600 uppercase tracking-widest hover:bg-gray-50 hover:text-hbrz-gold transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              ref={servicesRef}
            >
              <button
                type="button"
                className={`flex items-center text-[11px] xl:text-xs font-bold uppercase tracking-widest transition-colors duration-200 whitespace-nowrap ${
                  location.pathname.startsWith('/services')
                    ? 'text-hbrz-gold border-b-2 border-hbrz-gold'
                    : 'text-gray-500 hover:text-hbrz-blue'
                } py-2 focus:outline-none`}
              >
                Services
                <svg
                  className={`ml-1 h-3 w-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 w-80 bg-white border border-gray-100 shadow-xl py-4 transition-all duration-200 origin-top transform ${
                  servicesDropdownOpen
                    ? 'scale-y-100 opacity-100 visible'
                    : 'scale-y-95 opacity-0 invisible'
                }`}
              >
                <Link
                  to="/services"
                  className="block px-6 py-3 text-[10px] font-bold text-hbrz-blue uppercase tracking-widest hover:bg-gray-50 hover:text-hbrz-gold transition-colors"
                >
                  Overview
                </Link>
                <div className="h-px bg-gray-50 mx-6 my-2"></div>
                {servicesSubLinks.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className="block px-6 py-3 text-[10px] font-bold text-gray-600 uppercase tracking-widest hover:bg-gray-50 hover:text-hbrz-gold transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks
              .filter((l) => l.path !== '/')
              .map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] xl:text-xs font-bold uppercase tracking-widest transition-colors duration-200 whitespace-nowrap ${
                    isActive(link.path)
                      ? 'text-hbrz-gold border-b-2 border-hbrz-gold'
                      : 'text-gray-500 hover:text-hbrz-blue'
                  } py-2`}
                >
                  {link.name}
                </Link>
              ))}

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-2 text-gray-400 hover:text-hbrz-gold transition-colors focus:outline-none flex-shrink-0"
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              {isFullscreen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-2 text-gray-400 focus:outline-none"
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-hbrz-blue focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-6 max-h-[80vh] overflow-y-auto">
          <div className="px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-md text-base font-bold uppercase tracking-wider ${
                  isActive(link.path)
                    ? 'text-hbrz-gold bg-gray-50'
                    : 'text-gray-600 hover:text-hbrz-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-b border-gray-50 pb-2">
              <div className="px-4 py-3 text-base font-bold text-gray-600 uppercase tracking-wider">
                <span>About Us</span>
              </div>
              <div className="pl-6 space-y-1">
                {aboutSubLinks.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className="block px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-b border-gray-50 pb-2">
              <div className="px-4 py-3 text-base font-bold text-gray-600 uppercase tracking-wider">
                <span>Services</span>
              </div>
              <div className="pl-6 space-y-1">
                <Link
                  to="/services"
                  className="block px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  Overview
                </Link>
                {servicesSubLinks.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className="block px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
