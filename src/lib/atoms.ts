import { atom } from 'jotai';

export const userAtom = atom({
  id: '',
  name: '',
  isAuthenticated: false,
});

export const themeAtom = atom<'light' | 'dark'>('light');
export const mobileMenuAtom = atom(false);