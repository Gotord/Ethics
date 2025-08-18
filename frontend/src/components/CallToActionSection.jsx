import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Heart, Share2, Shield, Sparkles } from 'lucide-react';

const CallToActionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [Heart, Share2, Shield, Sparkles];

  useEffect(() => {
    setIsVisible(true);
    
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(iconInterval);
  }, []);

  const IconComponent = icons[currentIcon];

  return (
    <section className="py-20 bg-gradient-to-br from-teal to-teal-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Animated Icon */}
          <div className="mb-8">
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-500 hover:scale-110">
              <IconComponent size={48} className="text-white transition-all duration-500" />
            </div>
          </div>

          {/* Main Message */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">Be the Change.</span>
            <span className="block text-yellow animate-pulse">
              Practice Ethical Behavior
            </span>
            <span className="block">Every Day!</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your online actions create ripple effects that can inspire others, 
            build stronger communities, and make the internet a better place for everyone.
          </p>

          {/* Action Items */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Heart className="text-white mb-4 mx-auto" size={32} />
              <h3 className="text-white font-semibold mb-2">Spread Kindness</h3>
              <p className="text-white/80 text-sm">Use your platform to uplift others and share positive content</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Shield className="text-white mb-4 mx-auto" size={32} />
              <h3 className="text-white font-semibold mb-2">Stand Up</h3>
              <p className="text-white/80 text-sm">Be an upstander when you see harmful behavior online</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Share2 className="text-white mb-4 mx-auto" size={32} />
              <h3 className="text-white font-semibold mb-2">Share Responsibly</h3>
              <p className="text-white/80 text-sm">Think before you post and verify information before sharing</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-teal hover:bg-white/90 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Test Your Knowledge
            </Button>
          </div>

          {/* Motivational Quote */}
          <div className="mt-12 max-w-2xl mx-auto">
            <blockquote className="text-white/90 text-lg italic font-light leading-relaxed">
              "The internet is not just a technology, it's a community. 
              And communities thrive when their members treat each other with respect, 
              compassion, and integrity."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-off-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"/>
        </svg>
      </div>
    </section>
  );
};

export default CallToActionSection;