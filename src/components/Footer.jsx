import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-2 py-0.5 rounded text-xs">
              DS
            </div>
            <span className="font-extrabold text-gray-900">Dev Stack</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase text-gray-900 tracking-wider mb-4">Product</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase text-gray-900 tracking-wider mb-4">Company</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase text-gray-900 tracking-wider mb-4">Legal</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;