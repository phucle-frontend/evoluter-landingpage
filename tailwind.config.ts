import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1200px',
    },
    fontFamily: {
      sans: ['Inter Tight', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
    },
    fontSize: {
      'h1-dt': [
        '64px',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-1.92px',
        },
      ],
      'h2-dt': [
        '48px',
        {
          lineHeight: '120%',
          fontWeight: '600',
          letterSpacing: '-1.44px',
        },
      ],
      'h3-dt': [
        '28px',
        {
          lineHeight: '140%',
          fontWeight: '600',
          letterSpacing: '-0.84px',
        },
      ],
      'h4-dt': [
        '24px',
        {
          lineHeight: '130%',
          fontWeight: '600',
          letterSpacing: '-0.72px',
        },
      ],
      'body1-dt': [
        '20px',
        {
          lineHeight: '150%',
          fontWeight: '500',
          letterSpacing: '0.2px',
        },
      ],
      'body1-dt-bold': [
        '20px',
        {
          lineHeight: '150%',
          fontWeight: '600',
          letterSpacing: '0.2px',
        },
      ],
      'body2-dt': [
        '18px',
        {
          lineHeight: '150%',
          fontWeight: '400',
          letterSpacing: '0.18px',
        },
      ],
      'h1-mb': [
        '48px',
        {
          lineHeight: '120%',
          fontWeight: '700',
          letterSpacing: '-1.44px',
        },
      ],
      'h2-mb': [
        '32px',
        {
          lineHeight: '120%',
          fontWeight: '600',
          letterSpacing: '-1.44px',
        },
      ],
      'h3-mb': [
        '22px',
        {
          lineHeight: '140%',
          fontWeight: '600',
          letterSpacing: '-0.84px',
        },
      ],
      'h4-mb': [
        '24px',
        {
          lineHeight: '130%',
          fontWeight: '600',
          letterSpacing: '-0.72px',
        },
      ],
      'body1-mb': [
        '20px',
        {
          lineHeight: '150%',
          fontWeight: '500',
          letterSpacing: '0.2px',
        },
      ],
      'body1-mb-bold': [
        '16px',
        {
          lineHeight: '150%',
          fontWeight: '600',
          letterSpacing: '0.2px',
        },
      ],
      'body2-mb': [
        '16px',
        {
          lineHeight: '150%',
          fontWeight: '400',
          letterSpacing: '0.18px',
        },
      ],
      'button-big': [
        '20px',
        {
          lineHeight: '130%',
          fontWeight: '700',
        },
      ],
      'button-small': [
        '18px',
        {
          lineHeight: '130%',
          fontWeight: '600',
        },
      ],
    },
    extend: {
      colors: {
        primary: '#FF5538',
        secondary: '#202540',
        gray: {
          100: '#F8F8F8',
          200: '#EAEAEA',
          500: '#B2B2B2',
          700: '#787878',
          800: '#595959',
          850: '#202020',
          900: '#262626',
          medium: '#383838',
          1000: '#141414',
        },
        highLight: 'linear-gradient(90deg, #FF5538, #4A5CFF)',
      },
      borderRadius: {
        btn: '83px',
        lg: '56px',
        md: 'calc(56px - 16px)',
        sm: 'calc(56px - 32px)',
        xs: 'calc(56px - 38px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
//   plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;