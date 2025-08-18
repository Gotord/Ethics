import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Users, Shield, AlertTriangle, Heart, ArrowRight } from 'lucide-react';
import { bullyingScenarios } from '../data/mockData';

const BullyingSection = () => {
  const [selectedScenario, setSelectedScenario] = useState('bystander');
  const [showBefore, setShowBefore] = useState(true);

  const scenarioIcons = {
    bystander: Users,
    upstander: Shield,
    harasser: AlertTriangle,
    target: Heart
  };

  const scenarioColors = {
    bystander: 'yellow',
    upstander: 'teal',
    harasser: 'coral',
    target: 'mint'
  };

  const currentScenario = bullyingScenarios.find(s => s.id === selectedScenario);
  const IconComponent = scenarioIcons[selectedScenario];
  const color = scenarioColors[selectedScenario];

  // Sample comment threads for before/after demonstration
  const commentThreads = {
    before: [
      { user: "Alex_99", comment: "This is so stupid 🙄", type: "negative" },
      { user: "Tyler_M", comment: "Yeah totally agree, what a loser", type: "negative" },
      { user: "Sam_K", comment: "Maybe we shouldn't...", type: "hesitant" },
      { user: "Jordan_L", comment: "Haha can't believe someone posted this", type: "negative" }
    ],
    after: [
      { user: "Alex_99", comment: "This is so stupid 🙄", type: "negative" },
      { user: "Maya_S", comment: "Hey, that's not cool. This took courage to share.", type: "positive" },
      { user: "Sam_K", comment: "I agree with Maya. Let's be supportive.", type: "positive" },
      { user: "Jordan_L", comment: "You're right, sorry. Great job sharing this!", type: "positive" }
    ]
  };

  return (
    <section id="bullying" className="py-16 bg-charcoal/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Cyberbullying: Choose Your Role
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            In any online situation, you can choose to be part of the problem or part of the solution. Explore different scenarios and their consequences.
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {bullyingScenarios.map((scenario) => {
            const Icon = scenarioIcons[scenario.id];
            const isSelected = selectedScenario === scenario.id;
            const btnColor = scenarioColors[scenario.id];
            
            return (
              <Button
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario.id)}
                variant={isSelected ? "default" : "outline"}
                className={`p-4 h-auto flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105 ${
                  isSelected 
                    ? `bg-${btnColor} hover:bg-${btnColor}-700 text-white` 
                    : `border-${btnColor} text-${btnColor} hover:bg-${btnColor} hover:text-white`
                }`}
              >
                <Icon size={24} />
                <span className="text-sm font-medium">{scenario.title}</span>
              </Button>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Scenario Details */}
          <Card className={`border-2 border-${color}/20 hover:border-${color}/40 transition-all duration-300`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`p-2 rounded-full bg-${color}/10`}>
                  <IconComponent size={24} className={`text-${color}`} />
                </div>
                {currentScenario.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Scenario:</h4>
                <p className="text-charcoal/80">{currentScenario.description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Consequence:</h4>
                <p className="text-charcoal/80">{currentScenario.consequence}</p>
              </div>
              
              <div className="bg-mint/20 p-4 rounded-lg">
                <h4 className="font-semibold text-teal mb-2">Better Choice:</h4>
                <p className="text-charcoal/80">{currentScenario.betterChoice}</p>
              </div>
            </CardContent>
          </Card>

          {/* Before/After Comment Thread */}
          <Card className="border-2 border-teal/20">
            <CardHeader>
              <CardTitle className="text-center">Comment Thread Example</CardTitle>
              <div className="flex justify-center gap-2 mt-4">
                <Button
                  onClick={() => setShowBefore(true)}
                  variant={showBefore ? "default" : "outline"}
                  size="sm"
                  className={showBefore ? "bg-coral text-white" : "border-coral text-coral hover:bg-coral hover:text-white"}
                >
                  Before (Harmful)
                </Button>
                <Button
                  onClick={() => setShowBefore(false)}
                  variant={!showBefore ? "default" : "outline"}
                  size="sm"
                  className={!showBefore ? "bg-teal text-white" : "border-teal text-teal hover:bg-teal hover:text-white"}
                >
                  After (Helpful)
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {commentThreads[showBefore ? 'before' : 'after'].map((comment, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      comment.type === 'positive' 
                        ? 'bg-teal/10 border-l-4 border-teal' 
                        : comment.type === 'negative'
                        ? 'bg-coral/10 border-l-4 border-coral'
                        : 'bg-yellow/10 border-l-4 border-yellow'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-2">
                      <div className="font-semibold text-sm text-charcoal/80">
                        {comment.user}
                      </div>
                    </div>
                    <p className="text-sm text-charcoal/90 mt-1">{comment.comment}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <div className={`inline-flex items-center gap-2 p-3 rounded-full ${
                  showBefore ? 'bg-coral/20 text-coral' : 'bg-teal/20 text-teal'
                }`}>
                  {showBefore ? <AlertTriangle size={16} /> : <Shield size={16} />}
                  <span className="text-sm font-medium">
                    {showBefore ? 'Toxic Environment' : 'Supportive Community'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl max-w-2xl mx-auto border border-teal/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="text-teal" size={24} />
              <h3 className="text-xl font-semibold text-charcoal">Be an Upstander</h3>
            </div>
            <p className="text-charcoal/80 text-sm leading-relaxed">
              When you see cyberbullying, you have the power to change the narrative. 
              Your voice matters, and speaking up can make all the difference for someone in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BullyingSection;