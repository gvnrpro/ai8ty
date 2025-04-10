
import { Language } from '@/contexts/LanguageContext';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import fr from '@/locales/fr.json';

// Import all translation files
const translations = {
  en,
  ar,
  fr
};

// Helper to get a nested property using a dot path
export const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, obj);
};

// Main translation function
export const t = (key: string, language: Language): string => {
  const translation = getNestedValue(translations[language], key);
  
  // Fallback to English if translation is missing
  if (!translation && language !== 'en') {
    return getNestedValue(translations.en, key) || key;
  }
  
  return translation || key;
};
