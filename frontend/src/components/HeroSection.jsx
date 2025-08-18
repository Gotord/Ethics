import React from 'react';
import { Button } from './ui/button';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const FloatingIcon = ({ Icon, delay, className }) => (
  <div 
    className={`absolute opacity-20 animate-bounce ${className}`}
    style={{ 
      animationDelay: `${delay}s`, 
      animationDuration: '3s',
      animationIterationCount: 'infinite'
    }}
  >
    <Icon size={40} className="text-teal-600" />
  </div>
);

const HeroSection = ({ onStartLearning, onTakeQuiz }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mint to-off-white">
      {/* Floating Social Media Icons */}
      <FloatingIcon Icon={Instagram} delay={0} className="top-20 left-10 md:left-20" />
      <FloatingIcon Icon={Twitter} delay={0.5} className="top-32 right-16 md:right-32" />
      <FloatingIcon Icon={Youtube} delay={1} className="bottom-40 left-16 md:left-24" />
      <FloatingIcon Icon={Facebook} delay={1.5} className="bottom-20 right-10 md:right-20" />
      <FloatingIcon Icon={Instagram} delay={2} className="top-40 left-1/2 transform -translate-x-1/2" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
          <span className="block">Ethical Behavior</span>
          <span className="block text-teal bg-gradient-to-r from-teal to-teal-700 bg-clip-text text-transparent">
            on Social Media
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Learn to use social networks with respect, empathy, and responsibility. 
          Build a positive digital presence that reflects your values.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onStartLearning}
            size="lg"
            className="bg-teal hover:bg-teal-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Start Learning
          </Button>
          
          <Button 
            onClick={onTakeQuiz}
            variant="outline"
            size="lg"
            className="border-2 border-coral text-coral hover:bg-coral hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Take the Quiz
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-coral/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-teal/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;