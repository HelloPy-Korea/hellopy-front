/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // TODO: 추후 디자인 팀에서 컬러 토큰 정의하면 나머지 값 추가
        'hellopy-purple': '#9248db',
        'hellopy-yellow': '#ffd54d',
      }
    },
  },
  plugins: [],
};
