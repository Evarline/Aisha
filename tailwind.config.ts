import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#d2ff00',
          dark: '#001407',
          light: '#f5f5f5',
        },
        semantic: {
          error: '#e94235',
          success: '#00a541',
          warning: '#ff9500',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ['12px', { lineHeight: 'normal' }],
        sm: ['13px', { lineHeight: 'normal' }],
        base: ['14px', { lineHeight: 'normal' }],
        lg: ['16px', { lineHeight: 'normal' }],
        xl: ['20px', { lineHeight: 'normal' }],
        '2xl': ['32px', { lineHeight: 'normal' }],
      },
      borderRadius: {
        'sm': '10px',
        'md': '15px',
        'lg': '20px',
      },
      boxShadow: {
        'glow': '0px 0px 4px 0px #d2ff00',
      },
    },
  },
  plugins: [],
};

export default config;
