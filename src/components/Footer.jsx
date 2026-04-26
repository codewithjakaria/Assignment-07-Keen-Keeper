import React from 'react';
import FooterLogo from '../assets/logo-xl.png';
import FacebookLogo from '../assets/facebook.png';
import InstagramLogo from '../assets/instagram.png';
import TwitterLogo from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          <img
            src={FooterLogo}
            className="h-10 object-contain"
            alt="KeenKeeper Logo"
          />

          <p className="text-center text-gray-300 text-sm max-w-lg mx-auto leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="text-center">
            <p className="text-sm font-medium mb-4 text-gray-200 uppercase tracking-widest">
              Social Links
            </p>
            <div className="flex gap-4 justify-center items-center">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full transition hover:scale-110"
              >
                <img
                  src={InstagramLogo}
                  alt="Instagram"
                  className="w-10 h-10 object-contain"
                />
              </a>

              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full transition hover:scale-110"
              >
                <img
                  src={FacebookLogo}
                  alt="Facebook"
                  className="w-10 h-10 object-contain"
                />
              </a>

              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full transition hover:scale-110"
              >
                <img
                  src={TwitterLogo}
                  alt="Twitter"
                  className="w-10 h-10 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600/50 my-10 max-w-6xl mx-auto"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4 max-w-6xl mx-auto">
          <p className="text-center md:text-left">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
            <li className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Cookies
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
