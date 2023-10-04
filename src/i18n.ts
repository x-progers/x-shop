import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import {enLng} from './locales/en/en'
import {ruLng} from './locales/ru/ru'
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use (initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
  resources: {
    en:enLng,
    ru:ruLng
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;