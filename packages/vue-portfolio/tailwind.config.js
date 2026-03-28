import sharedConfig from '../shared/tailwind.config.js';

/** @type {import('tailwindcss').Config} */
export default {
  ...sharedConfig,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', '../shared/src/**/*.{js,ts,jsx,tsx}'],
};
