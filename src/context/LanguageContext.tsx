import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  TOP_INDIAN_LANGUAGES,
  getSavedLanguageCode,
  applyGoogleTranslateLanguage,
} from '../config/languages';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (code: string) => void;
  isSelectorOpen: boolean;
  setIsSelectorOpen: (open: boolean) => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCode, setCurrentCode] = useState<string>(() => getSavedLanguageCode());
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const currentLanguage =
    TOP_INDIAN_LANGUAGES.find((lang) => lang.code === currentCode) || TOP_INDIAN_LANGUAGES[0];

  useEffect(() => {
    // 1. Define global Google Translate callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'hi',
            includedLanguages: 'hi,en,bn,mr,te,ta,gu,kn,ml,pa,or,as',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // 2. Load script if not already in document
    const existingScript = document.getElementById('google-translate-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }
  }, []);

  const handleSetLanguage = (code: string) => {
    setCurrentCode(code);
    applyGoogleTranslateLanguage(code);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage: handleSetLanguage,
        isSelectorOpen,
        setIsSelectorOpen,
        languages: TOP_INDIAN_LANGUAGES,
      }}
    >
      {/* Hidden container for Google Translate element */}
      <div
        id="google_translate_element"
        style={{ display: 'none', position: 'absolute', left: '-9999px', top: '-9999px' }}
        aria-hidden="true"
      />
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
