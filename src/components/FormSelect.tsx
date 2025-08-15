import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false
}) => {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-white/90"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 pr-10
            text-white backdrop-blur-xl appearance-none cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
            transition-all duration-200 ease-out
            hover:border-white/30 hover:bg-white/10
          `}
        >
          {placeholder && (
            <option value="" disabled className="text-white/50">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option 
              key={option} 
              value={option}
              className="bg-slate-800 text-white"
            >
              {option}
            </option>
          ))}
        </select>
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-white/50" />
        </div>
      </div>
    </motion.div>
  );
};

export default FormSelect;