
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // AI8TY brand colors
                ai8ty: {
                    black: '#0C0C0C',
                    violet: '#8C52FF',
                    teal: '#00F5D4',
                    grey: '#C0C0C0',
                    white: '#FFFFFF',
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                avant: ['Avant Garde', 'Inter', 'system-ui', 'sans-serif'],
                satoshi: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'neural-grid': 'linear-gradient(to right, rgba(140, 82, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(140, 82, 255, 0.1) 1px, transparent 1px)',
                'tech-dots': 'radial-gradient(rgba(0, 245, 212, 0.15) 2px, transparent 2px)',
                'data-flow': 'repeating-linear-gradient(45deg, rgba(140, 82, 255, 0.03), rgba(0, 245, 212, 0.05) 10px)',
            },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'glitch': {
                    '0%': {
                        transform: 'translate(0)',
                    },
                    '20%': {
                        transform: 'translate(-2px, 2px)',
                    },
                    '40%': {
                        transform: 'translate(-2px, -2px)',
                    },
                    '60%': {
                        transform: 'translate(2px, 2px)',
                    },
                    '80%': {
                        transform: 'translate(2px, -2px)',
                    },
                    '100%': {
                        transform: 'translate(0)',
                    },
                },
                'pulse': {
                    '0%, 100%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '0.5',
                    },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)',
                    },
                },
                'wave': {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                    '100%': { transform: 'translateY(0)' }
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-out': {
                    '0%': { opacity: '1', transform: 'translateY(0)' },
                    '100%': { opacity: '0', transform: 'translateY(10px)' }
                },
                'slide-in': {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' }
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                'rotate-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'pulse-glow': {
                    '0%, 100%': { 
                        boxShadow: '0 0 5px 0 rgba(140, 82, 255, 0.5)',
                        borderColor: 'rgba(140, 82, 255, 0.5)'
                    },
                    '50%': { 
                        boxShadow: '0 0 20px 5px rgba(140, 82, 255, 0.7)',
                        borderColor: 'rgba(140, 82, 255, 0.8)'
                    },
                },
                'hover-shimmer': {
                    '0%': { 
                        backgroundPosition: '0% 0%',
                        filter: 'brightness(1)'
                    },
                    '50%': { 
                        backgroundPosition: '100% 0%',
                        filter: 'brightness(1.2)'
                    },
                    '100%': { 
                        backgroundPosition: '0% 0%',
                        filter: 'brightness(1)'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'glitch': 'glitch 0.5s infinite',
                'pulse': 'pulse 2s infinite',
                'float': 'float 6s ease-in-out infinite',
                'wave': 'wave 2s ease-in-out infinite',
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-out': 'fade-out 0.5s ease-out',
                'slide-in': 'slide-in 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'shimmer': 'shimmer 4s ease-in-out infinite',
                'rotate-slow': 'rotate-slow 15s linear infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'hover-shimmer': 'hover-shimmer 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
