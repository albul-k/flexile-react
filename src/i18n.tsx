import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: process.env.REACT_APP_LANG,
    debug: false,

    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    backend: {
      loadPath: process.env.PUBLIC_URL + '/locales/' + process.env.REACT_APP_LANG + '/translation.json'
    }
  });

export default i18n;
