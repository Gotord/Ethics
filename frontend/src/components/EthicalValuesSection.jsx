import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Heart, Users, Shield, Eye, HandHeart, Globe } from 'lucide-react';
import { ethicalValues } from '../data/mockData';

const iconMap = {
  respect: Users,
  empathy: Heart,
  honesty: Shield,
  privacy: Eye,
  responsibility: HandHeart,
  citizenship: Globe
};

const EthicalValuesSection = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <section id="ethical-values" className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            What is Ethical Behavior?
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Discover the core values that guide respectful and responsible social media use.
          </p>
        </div>

        {/* Desktop: Flip Cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {ethicalValues.map((value) => {
            const IconComponent = iconMap[value.id];
            const isFlipped = flippedCard === value.id;
            
            return (
              <div key={value.id} className="perspective-1000 h-64">
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => setFlippedCard(isFlipped ? null : value.id)}
                >
                  {/* Front */}
                  <Card className="absolute inset-0 backface-hidden border-2 border-teal/20 hover:border-teal/40 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center h-full text-center p-6">
                      <div className="bg-teal/10 p-4 rounded-full mb-4">
                        <IconComponent size={40} className="text-teal" />
                      </div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">{value.title}</h3>
                      <p className="text-sm text-charcoal/60">Click to learn more</p>
                    </CardContent>
                  </Card>
                  
                  {/* Back */}
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 border-2 border-coral/20 bg-gradient-to-br from-coral/5 to-yellow/5">
                    <CardContent className="flex flex-col justify-center h-full p-6">
                      <h3 className="text-lg font-semibold text-charcoal mb-3">{value.title}</h3>
                      <p className="text-sm text-charcoal/80 mb-4">{value.description}</p>
                      <div className="bg-white/50 p-3 rounded-lg">
                        <p className="text-xs text-charcoal/70 font-medium">Example:</p>
                        <p className="text-xs text-charcoal/80">{value.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {ethicalValues.map((value) => {
              const IconComponent = iconMap[value.id];
              
              return (
                <AccordionItem 
                  key={value.id} 
                  value={value.id}
                  className="border border-teal/20 rounded-lg px-4"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="bg-teal/10 p-2 rounded-full">
                        <IconComponent size={24} className="text-teal" />
                      </div>
                      <span className="text-lg font-semibold text-charcoal">{value.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-charcoal/80 mb-4">{value.description}</p>
                    <div className="bg-mint/20 p-3 rounded-lg">
                      <p className="text-sm text-charcoal/70 font-medium mb-1">Example:</p>
                      <p className="text-sm text-charcoal/80">{value.example}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default EthicalValuesSection;