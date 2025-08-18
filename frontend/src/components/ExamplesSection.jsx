import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { positiveExamples, negativeExamples } from '../data/mockData';
import * as LucideIcons from 'lucide-react';

const ExamplesSection = () => {
  const [activeTab, setActiveTab] = useState('positive');

  const examples = activeTab === 'positive' ? positiveExamples : negativeExamples;
  const tabColor = activeTab === 'positive' ? 'teal' : 'coral';

  return (
    <section id="examples" className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Real Examples in Action
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8">
            Learn from positive role models and understand what behaviors to avoid online.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab('positive')}
              variant={activeTab === 'positive' ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'positive' 
                  ? 'bg-teal hover:bg-teal-700 text-white' 
                  : 'border-teal text-teal hover:bg-teal hover:text-white'
              }`}
            >
              <LucideIcons.ThumbsUp className="w-4 h-4 mr-2" />
              Positive Examples
            </Button>
            <Button
              onClick={() => setActiveTab('negative')}
              variant={activeTab === 'negative' ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'negative' 
                  ? 'bg-coral hover:bg-coral-700 text-white' 
                  : 'border-coral text-coral hover:bg-coral hover:text-white'
              }`}
            >
              <LucideIcons.ThumbsDown className="w-4 h-4 mr-2" />
              What to Avoid
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {examples.map((example, index) => {
            const IconComponent = LucideIcons[example.icon];
            
            return (
              <Card 
                key={example.id}
                className={`group border-2 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 overflow-hidden ${
                  activeTab === 'positive' 
                    ? 'border-teal/20 hover:border-teal/40' 
                    : 'border-coral/20 hover:border-coral/40'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    activeTab === 'positive' 
                      ? 'from-teal/80 to-transparent' 
                      : 'from-coral/80 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-full ${
                      activeTab === 'positive' ? 'bg-teal/20' : 'bg-coral/20'
                    } backdrop-blur-sm`}>
                      <IconComponent size={20} className={activeTab === 'positive' ? 'text-white' : 'text-white'} />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-3 group-hover:text-teal transition-colors duration-300">
                    {example.title}
                  </h4>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {example.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className={`inline-block p-6 rounded-2xl ${
            activeTab === 'positive' ? 'bg-teal/10' : 'bg-coral/10'
          }`}>
            <p className="text-charcoal font-medium mb-2">
              {activeTab === 'positive' ? '✨ Remember' : '⚠️ Important'}
            </p>
            <p className="text-charcoal/80 text-sm max-w-md">
              {activeTab === 'positive' 
                ? 'Small positive actions can create ripple effects that improve the entire online community.'
                : 'One moment of poor judgment online can have lasting consequences. Always think before you post.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;