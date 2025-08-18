import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain } from 'lucide-react';
import { quizQuestions } from '../data/mockData';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
    
    setShowFeedback(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowFeedback({});
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreMessage = (score) => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 90) return { message: "Excellent! You're a social media ethics champion!", color: "teal" };
    if (percentage >= 70) return { message: "Great job! You have a solid understanding of ethical behavior.", color: "teal" };
    if (percentage >= 50) return { message: "Good start! Review the content and try again to improve.", color: "yellow" };
    return { message: "Keep learning! Review the content and take the quiz again.", color: "coral" };
  };

  if (quizCompleted) {
    const score = calculateScore();
    const scoreMessage = getScoreMessage(score);
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <section id="quiz" className="py-16 bg-gradient-to-br from-teal/5 to-mint/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-2 border-teal/20 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <Trophy className={`text-${scoreMessage.color}`} size={32} />
                  Quiz Complete!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`text-4xl font-bold text-${scoreMessage.color} mb-2`}>
                    {score}/{quizQuestions.length}
                  </div>
                  <div className={`text-lg text-${scoreMessage.color} mb-4`}>
                    {percentage}% Correct
                  </div>
                  <p className="text-charcoal/80">{scoreMessage.message}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-charcoal mb-4">Key Takeaways:</h3>
                  <ul className="text-left space-y-2 text-sm text-charcoal/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
                      Always fact-check information before sharing to prevent misinformation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
                      Treat others online with the same respect you'd show in person
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
                      Be an upstander - speak up against cyberbullying when you see it
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
                      Remember that your digital footprint is permanent and public
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={resetQuiz}
                  className="bg-teal hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Take Quiz Again
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];
  const hasAnswered = showFeedback[question.id];
  const selectedAnswer = selectedAnswers[question.id];

  return (
    <section id="quiz" className="py-16 bg-gradient-to-br from-teal/5 to-mint/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Interactive Quiz
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Test your knowledge of social media ethics. Get instant feedback to learn as you go!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-charcoal/60">Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span className="text-sm text-charcoal/60">{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-teal/20 rounded-full h-2">
              <div 
                className="bg-teal rounded-full h-2 transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <Card className="border-2 border-teal/20 bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Brain className="text-teal" size={24} />
                <span className="text-xl">{question.question}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correctAnswer;
                  const showResult = hasAnswered;
                  
                  let buttonStyle = "border-gray-200 text-charcoal hover:border-teal";
                  if (showResult) {
                    if (isCorrect) {
                      buttonStyle = "border-teal bg-teal/10 text-teal";
                    } else if (isSelected && !isCorrect) {
                      buttonStyle = "border-coral bg-coral/10 text-coral";
                    }
                  } else if (isSelected) {
                    buttonStyle = "border-teal bg-teal/5 text-teal";
                  }

                  return (
                    <Button
                      key={index}
                      onClick={() => !hasAnswered && handleAnswerSelect(question.id, index)}
                      disabled={hasAnswered}
                      variant="outline"
                      className={`w-full text-left p-4 h-auto justify-start transition-all duration-300 ${buttonStyle}`}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex-shrink-0">
                          {showResult && isCorrect && <CheckCircle size={20} className="text-teal" />}
                          {showResult && isSelected && !isCorrect && <XCircle size={20} className="text-coral" />}
                          {!showResult && <div className="w-5 h-5 rounded-full border-2 border-current" />}
                        </div>
                        <span className="flex-grow">{option}</span>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Explanation */}
              {hasAnswered && (
                <div className="mt-6 p-4 bg-teal/5 rounded-lg border-l-4 border-teal">
                  <h4 className="font-semibold text-teal mb-2">Explanation:</h4>
                  <p className="text-charcoal/80 text-sm">{question.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
              className="border-teal text-teal hover:bg-teal hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </Button>

            <div className="flex gap-1">
              {quizQuestions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentQuestion 
                      ? 'bg-teal' 
                      : index < currentQuestion 
                      ? 'bg-teal/50' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextQuestion}
              disabled={!hasAnswered}
              className="bg-teal hover:bg-teal-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;