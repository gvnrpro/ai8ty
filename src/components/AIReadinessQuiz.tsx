
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, Brain, Zap, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Question {
  id: number;
  question: string;
  options: { text: string; value: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your current digital infrastructure?",
    options: [
      { text: "Fully integrated cloud systems", value: 5 },
      { text: "Mostly digital with some gaps", value: 4 },
      { text: "Mix of digital and manual processes", value: 3 },
      { text: "Basic digital presence", value: 2 },
      { text: "Primarily manual operations", value: 1 }
    ]
  },
  {
    id: 2,
    question: "How do you currently handle customer data and insights?",
    options: [
      { text: "Advanced analytics with AI insights", value: 5 },
      { text: "Structured data analysis", value: 4 },
      { text: "Basic reporting and metrics", value: 3 },
      { text: "Manual tracking and reports", value: 2 },
      { text: "Minimal data collection", value: 1 }
    ]
  },
  {
    id: 3,
    question: "What's your current approach to automation?",
    options: [
      { text: "Extensive automation across operations", value: 5 },
      { text: "Automated key processes", value: 4 },
      { text: "Some workflow automation", value: 3 },
      { text: "Basic automation tools", value: 2 },
      { text: "Mostly manual processes", value: 1 }
    ]
  },
  {
    id: 4,
    question: "How ready is your team for AI integration?",
    options: [
      { text: "Highly skilled and eager", value: 5 },
      { text: "Ready with some training", value: 4 },
      { text: "Willing to learn", value: 3 },
      { text: "Cautiously interested", value: 2 },
      { text: "Resistant to change", value: 1 }
    ]
  },
  {
    id: 5,
    question: "What's your primary goal for AI transformation?",
    options: [
      { text: "Revolutionary business model change", value: 5 },
      { text: "Significant competitive advantage", value: 4 },
      { text: "Improved efficiency and growth", value: 3 },
      { text: "Better customer experience", value: 2 },
      { text: "Cost reduction", value: 1 }
    ]
  }
];

const AIReadinessQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newAnswers.reduce((sum, answer) => sum + answer, 0);
      setScore(totalScore);
      setIsComplete(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
    setScore(0);
  };

  const getReadinessLevel = (score: number) => {
    if (score >= 20) return { level: "AI Pioneer", color: "text-intelligence", description: "Ready for advanced AI transformation" };
    if (score >= 15) return { level: "AI Ready", color: "text-neural", description: "Strong foundation for AI integration" };
    if (score >= 10) return { level: "AI Potential", color: "text-quantum", description: "Good opportunity for AI advancement" };
    if (score >= 5) return { level: "AI Starter", color: "text-sand", description: "Beginning the AI journey" };
    return { level: "AI Explorer", color: "text-white", description: "Exploring AI possibilities" };
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  const readiness = getReadinessLevel(score);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="bg-neural hover:bg-neural-dark text-white rounded-full p-4 shadow-lg shadow-neural/30 backdrop-blur-sm border border-neural/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Brain size={24} />
            <motion.div
              className="absolute -top-1 -right-1 w-6 h-6 bg-intelligence rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap size={12} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-96 max-w-[calc(100vw-3rem)] shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-syne font-semibold text-lg text-white">
                AI Readiness Assessment
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            {!isComplete ? (
              <>
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/70">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-neural">
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-neural to-quantum rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-space text-white mb-4 leading-relaxed">
                    {questions[currentQuestion].question}
                  </h4>

                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(option.value)}
                        className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neural/30 transition-all duration-200 text-sm text-white/80 hover:text-white"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option.text}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={goBack}
                    disabled={currentQuestion === 0}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200",
                      currentQuestion === 0
                        ? "text-white/40 cursor-not-allowed"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <ChevronLeft size={16} />
                    Back
                  </button>
                  
                  <div className="text-xs text-white/50">
                    {answers.length} / {questions.length} answered
                  </div>
                </div>
              </>
            ) : (
              /* Results */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neural to-quantum rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <CheckCircle size={32} className="text-white" />
                </motion.div>

                <h4 className={cn("font-syne font-bold text-xl mb-2", readiness.color)}>
                  {readiness.level}
                </h4>
                
                <p className="text-white/80 text-sm mb-6">
                  {readiness.description}
                </p>

                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-neural mb-1">
                    {score}/25
                  </div>
                  <div className="text-xs text-white/60">
                    AI Readiness Score
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => window.location.href = 'mailto:futureis@ai8ty.com?subject=AI Readiness Assessment Results'}
                    className="w-full btn-primary text-sm"
                  >
                    Get Custom Strategy
                  </button>
                  
                  <button
                    onClick={resetQuiz}
                    className="w-full text-white/70 hover:text-white text-sm transition-colors"
                  >
                    Retake Assessment
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIReadinessQuiz;
