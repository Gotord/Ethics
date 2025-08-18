import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-teal/5 to-mint/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            What People Say
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Hear from students, teachers, and counselors about the importance of ethical behavior online.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="border-2 border-teal/20 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 md:p-12 text-center">
                      <div className="mb-6">
                        <Quote size={40} className="text-teal/30 mx-auto" />
                      </div>
                      
                      <blockquote className="text-lg md:text-xl text-charcoal/90 mb-8 leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="border-t border-teal/20 pt-6">
                        <p className="text-teal font-semibold text-lg mb-1">
                          {testimonial.author}
                        </p>
                        <p className="text-charcoal/60 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="lg"
              className="border-teal text-teal hover:bg-teal hover:text-white rounded-full p-3 transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-teal scale-125' 
                      : 'bg-teal/30 hover:bg-teal/50'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              variant="outline"
              size="lg"
              className="border-teal text-teal hover:bg-teal hover:text-white rounded-full p-3 transition-all duration-300 hover:scale-105"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-charcoal/50 hover:text-charcoal/70 transition-colors duration-300"
            >
              {isAutoPlaying ? '⏸️ Pause auto-play' : '▶️ Resume auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;