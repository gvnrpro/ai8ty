import React from 'react';
import { motion } from 'framer-motion';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  multiline = false,
  rows = 4
}) => {
  const inputClasses = `
    w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3
    text-white placeholder-white/50 backdrop-blur-xl
    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
    transition-all duration-200 ease-out
    hover:border-white/30 hover:bg-white/10
  `;

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
      
      {multiline ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
        />
      )}
    </motion.div>
  );
};

export default FormField;