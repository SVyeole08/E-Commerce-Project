import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 border-t border-white/6 bg-transparent fixed bottom-0 left-0">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="text-sm text-muted">© {new Date().getFullYear()} MyStore — Built with ❤️</div>
        <div className="flex items-center gap-4 text-sm text-muted">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
