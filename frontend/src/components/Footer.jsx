import React from 'react';
import { Instagram, Twitter, Youtube, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Project Info */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Educational Project</h3>
            <p className="text-white/80 text-lg">
              Project by <span className="text-yellow font-semibold">Jesús Gómez</span> – 
              <span className="text-teal font-semibold"> 10A</span> – 
              <span className="text-mint font-semibold"> IED María Cano</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer">
              <Instagram size={24} className="text-white" />
            </div>
            <div className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer">
              <Twitter size={24} className="text-white" />
            </div>
            <div className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer">
              <Youtube size={24} className="text-white" />
            </div>
            <div className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer">
              <Facebook size={24} className="text-white" />
            </div>
          </div>

          {/* Inspirational Message */}
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-white/70 text-sm leading-relaxed">
              "Education is the most powerful weapon which you can use to change the world. 
              Let's use technology responsibly to build a better digital future for everyone."
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-coral" />
              <span>by Gotord.</span>
            </div>
            <p className="text-white/40 text-xs mt-2">
              © 2025 - Ethical Behavior on Social Media Educational Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;