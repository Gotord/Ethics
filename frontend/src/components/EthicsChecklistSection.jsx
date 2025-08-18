import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Download, CheckCircle, Circle, Heart, Shield, Eye, HandHeart } from 'lucide-react';
import { ethicsChecklist } from '../data/mockData';

const EthicsChecklistSection = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [showSummary, setShowSummary] = useState(false);

  const categoryIcons = {
    'Privacy': Eye,
    'Honesty': Shield,
    'Respect': Heart,
    'Empathy': HandHeart,
    'Responsibility': CheckCircle
  };

  const categoryColors = {
    'Privacy': 'teal',
    'Honesty': 'coral',
    'Respect': 'yellow',
    'Empathy': 'mint',
    'Responsibility': 'teal'
  };

  const handleItemCheck = (itemId) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const generateSummary = () => {
    const checkedCount = checkedItems.size;
    const totalCount = ethicsChecklist.length;
    const percentage = Math.round((checkedCount / totalCount) * 100);
    
    return {
      checkedCount,
      totalCount,
      percentage,
      checkedItems: ethicsChecklist.filter(item => checkedItems.has(item.id))
    };
  };

  const downloadSummary = () => {
    const summary = generateSummary();
    const content = `
SOCIAL MEDIA ETHICS CHECKLIST SUMMARY
=====================================

Completion: ${summary.checkedCount}/${summary.totalCount} items (${summary.percentage}%)

ITEMS YOU'VE COMMITTED TO:
${summary.checkedItems.map(item => `
✓ ${item.title}
  ${item.description}
  Category: ${item.category}
`).join('\n')}

Remember: Ethical behavior online starts with small, consistent actions. 
Keep this checklist handy and review it regularly!

Generated from: Ethical Behavior on Social Media
Project by: Jesús Gómez - 10A - IED María Cano
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'social-media-ethics-checklist.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const summary = generateSummary();

  return (
    <section id="checklist" className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ethics in Action
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Make a commitment to ethical behavior with this interactive checklist. Check off the practices you'll adopt in your social media use.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <Card className="border-2 border-teal/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-charcoal">Your Progress</h3>
                <span className="text-teal font-bold">{summary.percentage}% Complete</span>
              </div>
              <div className="w-full bg-teal/20 rounded-full h-3">
                <div 
                  className="bg-teal rounded-full h-3 transition-all duration-500 ease-out"
                  style={{ width: `${summary.percentage}%` }}
                />
              </div>
              <p className="text-sm text-charcoal/60 mt-2">
                {summary.checkedCount} of {summary.totalCount} ethical practices committed to
              </p>
            </CardContent>
          </Card>

          {/* Checklist Items */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {ethicsChecklist.map((item, index) => {
              const IconComponent = categoryIcons[item.category] || Circle;
              const color = categoryColors[item.category] || 'teal';
              const isChecked = checkedItems.has(item.id);
              
              return (
                <Card 
                  key={item.id}
                  className={`border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    isChecked 
                      ? `border-${color} bg-${color}/5` 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => handleItemCheck(item.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <Checkbox
                          checked={isChecked}
                          onChange={() => handleItemCheck(item.id)}
                          className={`w-5 h-5 ${isChecked ? `bg-${color} border-${color}` : ''}`}
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent size={18} className={`text-${color}`} />
                          <h4 className={`font-semibold transition-colors duration-300 ${
                            isChecked ? `text-${color}` : 'text-charcoal'
                          }`}>
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-charcoal/70 mb-2">{item.description}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-${color}/20 text-${color}-800`}>
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {summary.checkedCount > 0 && (
              <Button
                onClick={downloadSummary}
                className="bg-teal hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Download My Commitment ({summary.checkedCount} items)
              </Button>
            )}
            
            <Button
              onClick={() => setShowSummary(!showSummary)}
              variant="outline"
              className="border-teal text-teal hover:bg-teal hover:text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              {showSummary ? 'Hide' : 'Show'} Summary
            </Button>
          </div>

          {/* Summary Display */}
          {showSummary && summary.checkedCount > 0 && (
            <Card className="mt-8 border-2 border-teal/20 bg-gradient-to-br from-teal/5 to-mint/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-teal">
                  <CheckCircle size={24} />
                  Your Ethical Commitment Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-charcoal/80">
                    You've committed to <strong>{summary.checkedCount}</strong> out of <strong>{summary.totalCount}</strong> ethical practices 
                    ({summary.percentage}% complete). Keep up the great work!
                  </p>
                </div>
                
                <div className="space-y-2">
                  {summary.checkedItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-teal flex-shrink-0" />
                      <span className="text-charcoal/80">{item.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default EthicsChecklistSection;