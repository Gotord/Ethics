import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import EthicalValuesSection from "./components/EthicalValuesSection";
import ImpactSection from "./components/ImpactSection";
import ExamplesSection from "./components/ExamplesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BullyingSection from "./components/BullyingSection";
import EthicsChecklistSection from "./components/EthicsChecklistSection";
import QuizSection from "./components/QuizSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const Home = () => {
  // Smooth scrolling utility
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Add smooth scrolling to the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection 
        onStartLearning={() => scrollToSection('ethical-values')}
        onTakeQuiz={() => scrollToSection('quiz')}
      />
      <EthicalValuesSection />
      <ImpactSection />
      <ExamplesSection />
      <TestimonialsSection />
      <BullyingSection />
      <EthicsChecklistSection />
      <QuizSection />
      <CallToActionSection />
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
