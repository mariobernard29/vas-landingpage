import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';
export const dicts = { es, en };
export const t = (lang: Lang) => dicts[lang];
export const homePath = (lang: Lang) => (lang === 'es' ? '/' : '/en/');
export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
