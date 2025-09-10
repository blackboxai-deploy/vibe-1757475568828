/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // APEX AGENT v3 Color Scheme - Sophisticated Agent Theme
        'agent-primary': '#1a202c',     // Deep charcoal - sophisticated base
        'agent-secondary': '#2d3748',   // Medium slate - professional depth
        'agent-accent': '#4a90e2',      // Agent blue - intelligent trust
        'agent-highlight': '#00d4aa',   // Teal green - success and progress
        'agent-warning': '#f6ad55',     // Warm amber - alerts and notifications
        'agent-danger': '#e53e3e',      // Clear red - errors and critical states
        'agent-surface': '#1a202c',     // Surface color matching primary
        'agent-elevated': '#2d3748',    // Elevated surfaces
        'agent-border': '#4a5568',      // Border and dividers
        'agent-muted': '#718096',       // Muted text and secondary elements
        'agent-subtle': '#e2e8f0',      // Light text and subtle elements
        
        // Gradient combinations for sophisticated effects
        'agent-gradient-from': '#1a202c',
        'agent-gradient-to': '#2d3748',
        'agent-accent-gradient-from': '#4a90e2',
        'agent-accent-gradient-to': '#00d4aa',
        
        // Legacy support for existing components
        'neon-blue': '#4a90e2',
        'neon-green': '#00d4aa', 
        'neon-purple': '#667eea',
        'neon-pink': '#f093fb',
        'rockstar-dark': '#1a202c',
        'rockstar-gray': '#2d3748',
        'rockstar-light': '#4a5568',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'agent-gradient': 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        'agent-accent-gradient': 'linear-gradient(135deg, #4a90e2 0%, #00d4aa 100%)',
        'agent-hero': 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)',
      },
      boxShadow: {
        'agent-glow': '0 0 20px rgba(74, 144, 226, 0.25)',
        'agent-glow-strong': '0 0 30px rgba(74, 144, 226, 0.4), 0 0 60px rgba(74, 144, 226, 0.2)',
        'agent-success': '0 0 20px rgba(0, 212, 170, 0.25)',
        'agent-warning': '0 0 20px rgba(246, 173, 85, 0.25)',
        'professional-deep': '0 20px 40px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)',
        'agent-card': '0 8px 25px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.1)',
        'agent-elevated': '0 12px 35px rgba(0, 0, 0, 0.2), 0 4px 15px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'pulse-agent': 'pulse-agent 4s ease-in-out infinite',
        'glow-agent': 'glow-agent 3s ease-in-out infinite alternate',
        'slide-up-gentle': 'slide-up-gentle 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
      },
      keyframes: {
        'pulse-agent': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(74, 144, 226, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(74, 144, 226, 0.4)' },
        },
        'glow-agent': {
          '0%': { textShadow: '0 0 8px rgba(74, 144, 226, 0.3)' },
          '100%': { textShadow: '0 0 12px rgba(74, 144, 226, 0.5)' },
        },
        'slide-up-gentle': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}