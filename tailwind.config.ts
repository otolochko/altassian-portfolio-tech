import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Daylight Terminal backgrounds
        background: {
          DEFAULT: '#FAFBFC',
          elevated: '#FFFFFF',
          dark: '#1E1E2E',
          terminal: '#1A1B26',
        },
        // Text colors
        foreground: {
          DEFAULT: '#1A1B26',
          muted: '#565869',
          inverse: '#FFFFFF',
          'inverse-muted': '#A9B1D6',
        },
        // Borders
        border: {
          DEFAULT: '#E1E4E8',
          dark: '#363B54',
        },
        // Syntax highlighting colors
        syntax: {
          teal: '#73DACA',
          orange: '#FF9E64',
          purple: '#BB9AF7',
          green: '#9ECE6A',
          red: '#F7768E',
          blue: '#7AA2F7',
          yellow: '#E0AF68',
          cyan: '#7DCFFF',
        },
        // Traffic light colors
        traffic: {
          red: '#FF5F56',
          yellow: '#FFBD2E',
          green: '#27C93F',
        },
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
        sans: ['var(--font-ibm-plex-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'terminal-glow': 'terminal-glow 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'terminal-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(115, 218, 202, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(115, 218, 202, 0.2)' },
        },
      },
      boxShadow: {
        'terminal': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'terminal-hover': '0 30px 60px -12px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'terminal': '12px',
      },
    },
  },
  plugins: [],
};
export default config;
