import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'fibertech-language';
const FALLBACK_LANGUAGE = 'UZ';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return FALLBACK_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return savedLanguage && translations[savedLanguage] ? savedLanguage : FALLBACK_LANGUAGE;
};

const getNestedValue = (source, path) =>
  path.split('.').reduce((accumulator, part) => accumulator?.[part], source);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const value = useMemo(() => {
    const dictionary = translations[language] ?? translations[FALLBACK_LANGUAGE];

    return {
      language,
      setLanguage,
      t: (path) => getNestedValue(dictionary, path) ?? getNestedValue(translations[FALLBACK_LANGUAGE], path) ?? path,
      dictionary
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
};
