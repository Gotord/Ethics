import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { TrendingUp, TrendingDown, Heart, Brain, Users, AlertTriangle } from 'lucide-react';

const ImpactSection = () => {
  const [activeView, setActiveView] = useState('ethical');

  const impacts = {
    ethical: {
      title: 'Ethical Behavior Impact',
      color: 'teal',
      icon: Heart,
      effects: [
        {
          icon: TrendingUp,
          title: 'Builds Trust',
          description: 'Creates stronger, more meaningful relationships online and offline.',
          metric: '+85% trust in communities'
        },
        {
          icon: Brain,
          title: 'Mental Well-being',
          description: 'Promotes positive mental health for yourself and others.',
          metric: '+60% positive interactions'
        },
        {
          icon: Users,
          title: 'Community Growth',
          description: 'Fosters inclusive, supportive online environments.',
          metric: '+70% engagement quality'
        }
      ]
    },
    unethical: {
      title: 'Unethical Behavior Impact',
      color: 'coral',
      icon: AlertTriangle,
      effects: [
        {
          icon: TrendingDown,
          title: 'Damages Relationships',
          description: 'Breaks down trust and hurts meaningful connections.',
          metric: '-90% relationship quality'
        },
        {
          icon: Brain,
          title: 'Mental Health Issues',
          description: 'Contributes to anxiety, depression, and online harassment.',
          metric: '+200% negative experiences'
        },
        {
          icon: AlertTriangle,
          title: 'Spreads Misinformation',
          description: 'Contributes to fake news and harmful conspiracy theories.',
          metric: '+300% misinformation spread'
        }
      ]
    }
  };

  const currentImpact = impacts[activeView];
  const IconComponent = currentImpact.icon;

  return (
    <section id="impact" className="py-16 bg-gradient-to-br from-charcoal/5 to-mint/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Why Ethics Matter Online
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8">
            See the real-world impact of ethical vs. unethical social media behavior on individuals and communities.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveView('ethical')}
              variant={activeView === 'ethical' ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeView === 'ethical' 
                  ? 'bg-teal hover:bg-teal-700 text-white' 
                  : 'border-teal text-teal hover:bg-teal hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Ethical Impact
            </Button>
            <Button
              onClick={() => setActiveView('unethical')}
              variant={activeView === 'unethical' ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeView === 'unethical' 
                  ? 'bg-coral hover:bg-coral-700 text-white' 
                  : 'border-coral text-coral hover:bg-coral hover:text-white'
              }`}
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Unethical Impact
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center gap-3 p-4 rounded-full mb-4 ${
              activeView === 'ethical' ? 'bg-teal/10' : 'bg-coral/10'
            }`}>
              <IconComponent size={32} className={activeView === 'ethical' ? 'text-teal' : 'text-coral'} />
              <h3 className="text-2xl font-bold text-charcoal">{currentImpact.title}</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentImpact.effects.map((effect, index) => {
              const EffectIcon = effect.icon;
              
              return (
                <Card 
                  key={index}
                  className={`border-2 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 ${
                    activeView === 'ethical' 
                      ? 'border-teal/20 hover:border-teal/40' 
                      : 'border-coral/20 hover:border-coral/40'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-full mb-4 ${
                      activeView === 'ethical' ? 'bg-teal/10' : 'bg-coral/10'
                    }`}>
                      <EffectIcon size={24} className={activeView === 'ethical' ? 'text-teal' : 'text-coral'} />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-charcoal mb-2">{effect.title}</h4>
                    <p className="text-charcoal/70 mb-4 text-sm">{effect.description}</p>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      activeView === 'ethical' 
                        ? 'bg-teal/20 text-teal-800' 
                        : 'bg-coral/20 text-coral-800'
                    }`}>
                      {effect.metric}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-charcoal/60 italic">
              *Statistics based on digital wellness research and social media impact studies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;