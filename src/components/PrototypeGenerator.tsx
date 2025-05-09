
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/utils/i18n';

type FormStep = 'intro' | 'business-info' | 'challenge' | 'goals' | 'preview';

interface FormData {
  businessName: string;
  industry: string;
  teamSize: string;
  challenge: string;
  goals: string[];
}

const PrototypeGenerator: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [currentStep, setCurrentStep] = useState<FormStep>('intro');
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    industry: '',
    teamSize: '',
    challenge: '',
    goals: []
  });
  
  const { language } = useLanguage();
  
  const handleNext = () => {
    switch (currentStep) {
      case 'intro':
        setCurrentStep('business-info');
        break;
      case 'business-info':
        setCurrentStep('challenge');
        break;
      case 'challenge':
        setCurrentStep('goals');
        break;
      case 'goals':
        setCurrentStep('preview');
        break;
      default:
        break;
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleGoalToggle = (goal: string) => {
    setFormData(prev => {
      if (prev.goals.includes(goal)) {
        return { ...prev, goals: prev.goals.filter(g => g !== goal) };
      } else {
        return { ...prev, goals: [...prev.goals, goal] };
      }
    });
  };
  
  const possibleGoals = [
    'Increase operational efficiency',
    'Improve customer experience',
    'Reduce manual work',
    'Centralize customer data',
    'Enable data-driven decisions',
    'Automate sales processes',
    'Enhance team collaboration'
  ];
  
  return (
    <section ref={ref} id="prototype-generator" className="py-24 px-6 bg-depth-2">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="heading text-3xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('prototype.title', language)}
          </motion.h2>
          <motion.p 
            className="subheading max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('prototype.subtitle', language)}
          </motion.p>
        </div>
        
        <motion.div
          className="bg-depth-1 rounded-xl border border-white/10 overflow-hidden shadow-glow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-1">
            <div className="flex">
              {(['intro', 'business-info', 'challenge', 'goals', 'preview'] as FormStep[]).map((step, index) => (
                <div 
                  key={step} 
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors duration-300",
                    currentStep === step ? "bg-sand" : 
                    ((['intro', 'business-info', 'challenge', 'goals', 'preview'] as FormStep[]).indexOf(currentStep) > index) ? "bg-sand/50" : "bg-white/10"
                  )}
                />
              ))}
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="min-h-[400px] flex flex-col">
              {currentStep === 'intro' && (
                <motion.div 
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-20 h-20 bg-sand/20 rounded-full flex items-center justify-center mb-6">
                    <div className="text-sand text-3xl font-bold">8</div>
                  </div>
                  
                  <h3 className="text-2xl font-syne mb-4">Let's map your business potential.</h3>
                  <p className="text-ai8ty-grey max-w-lg mb-8">
                    Answer a few quick questions about your business, and we'll show you how AI8TY
                    can transform your operations into a unified growth system.
                  </p>
                  
                  <button 
                    onClick={handleNext}
                    className="btn btn-secondary inline-flex items-center gap-2"
                  >
                    <span>Begin</span>
                    <ChevronRight size={16} />
                  </button>
                </motion.div>
              )}
              
              {currentStep === 'business-info' && (
                <motion.div 
                  className="space-y-6 flex-grow"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-syne">About your business</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="businessName" className="block text-ai8ty-white mb-2">Business name</label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full bg-depth-3 border border-white/10 rounded-md px-4 py-3 text-ai8ty-white focus:border-sand focus:outline-none transition-colors"
                        placeholder="Enter your business name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-ai8ty-white mb-2">Industry</label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full bg-depth-3 border border-white/10 rounded-md px-4 py-3 text-ai8ty-white focus:border-sand focus:outline-none transition-colors"
                      >
                        <option value="" disabled>Select your industry</option>
                        <option value="retail">Retail / E-commerce</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance / Banking</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="education">Education</option>
                        <option value="technology">Technology</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="teamSize" className="block text-ai8ty-white mb-2">Team size</label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full bg-depth-3 border border-white/10 rounded-md px-4 py-3 text-ai8ty-white focus:border-sand focus:outline-none transition-colors"
                      >
                        <option value="" disabled>Select team size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501+">501+ employees</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button 
                      onClick={handleNext}
                      disabled={!formData.businessName || !formData.industry || !formData.teamSize}
                      className={cn(
                        "btn btn-secondary inline-flex items-center gap-2",
                        (!formData.businessName || !formData.industry || !formData.teamSize) ? "opacity-50 cursor-not-allowed" : ""
                      )}
                    >
                      <span>Continue</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
              
              {currentStep === 'challenge' && (
                <motion.div 
                  className="space-y-6 flex-grow"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-syne">What's your biggest operational challenge?</h3>
                  
                  <div>
                    <textarea
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleInputChange}
                      className="w-full bg-depth-3 border border-white/10 rounded-md px-4 py-3 text-ai8ty-white focus:border-sand focus:outline-none transition-colors h-40"
                      placeholder="Describe your current operational challenges..."
                    />
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button 
                      onClick={handleNext}
                      disabled={!formData.challenge}
                      className={cn(
                        "btn btn-secondary inline-flex items-center gap-2",
                        !formData.challenge ? "opacity-50 cursor-not-allowed" : ""
                      )}
                    >
                      <span>Continue</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
              
              {currentStep === 'goals' && (
                <motion.div 
                  className="space-y-6 flex-grow"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-syne">What are your main goals?</h3>
                  <p className="text-ai8ty-grey">Select all that apply.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {possibleGoals.map(goal => (
                      <div 
                        key={goal}
                        onClick={() => handleGoalToggle(goal)}
                        className={cn(
                          "p-4 rounded-lg border cursor-pointer transition-all",
                          formData.goals.includes(goal) 
                            ? "border-sand bg-sand/10" 
                            : "border-white/10 bg-depth-3 hover:border-white/30"
                        )}
                      >
                        <div className="flex items-center">
                          <div className={cn(
                            "w-5 h-5 rounded-full border flex items-center justify-center mr-3",
                            formData.goals.includes(goal) 
                              ? "border-sand text-sand" 
                              : "border-white/30"
                          )}>
                            {formData.goals.includes(goal) && <CheckCircle2 size={14} />}
                          </div>
                          <span className="text-ai8ty-white">{goal}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <button 
                      onClick={handleNext}
                      disabled={formData.goals.length === 0}
                      className={cn(
                        "btn btn-secondary inline-flex items-center gap-2",
                        formData.goals.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                      )}
                    >
                      <span>Generate Preview</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
              
              {currentStep === 'preview' && (
                <motion.div 
                  className="space-y-6 flex-grow"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-8">
                    <div className="inline-block p-3 rounded-full bg-sand/20 mb-4">
                      <CheckCircle2 size={24} className="text-sand" />
                    </div>
                    <h3 className="text-2xl font-syne mb-2">Your AI8TY Preview is Ready</h3>
                    <p className="text-ai8ty-grey">
                      Based on your inputs, we've created a custom transformation roadmap for {formData.businessName}.
                    </p>
                  </div>
                  
                  <div className="bg-depth-3 p-6 rounded-lg border border-white/10">
                    <div className="aspect-[16/9] bg-depth-2 rounded-lg mb-6 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-neural-grid-bg">
                        <div className="text-center">
                          <div className="text-sand text-lg mb-2">AI8TY Dashboard Preview</div>
                          <div className="text-ai8ty-grey text-sm">for {formData.businessName}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sand text-sm uppercase tracking-wider mb-1">Transformation Focus</h4>
                        <p className="text-ai8ty-white">
                          {formData.industry} Operations Optimization
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sand text-sm uppercase tracking-wider mb-1">Key Growth Opportunities</h4>
                        <ul className="space-y-1">
                          {formData.goals.slice(0, 3).map((goal, index) => (
                            <li key={index} className="text-ai8ty-white flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-sand"></span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 pt-4">
                    <a 
                      href="#" 
                      className="btn btn-secondary flex-1 justify-center"
                    >
                      Download Full Preview
                    </a>
                    <a 
                      href="https://wa.me/+971xxxxxxxx?text=I've%20just%20created%20my%20AI8TY%20Prototype%20for%20my%20business%20and%20would%20like%20to%20discuss%20next%20steps." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline flex-1 justify-center"
                    >
                      Schedule a Walkthrough
                    </a>
                  </div>
                  
                  <div className="text-center text-ai8ty-grey text-sm pt-6">
                    <p>
                      Because the best time to fix your system was last year.
                      <br />The second best is now.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrototypeGenerator;
