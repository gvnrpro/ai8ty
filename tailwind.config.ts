
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
                // Enhanced AI8TY intelligence-focused color palette
                ai8ty: {
                    black: '#0A0A0B',
                    violet: '#6366F1',
                    teal: '#06B6D4',
                    grey: '#9CA3AF',
                    white: '#FFFFFF',
                },
                // Apple-inspired grays
                gray: {
                    50: 'hsl(var(--gray-50))',
                    100: 'hsl(var(--gray-100))',
                    200: 'hsl(var(--gray-200))',
                    300: 'hsl(var(--gray-300))',
                    400: 'hsl(var(--gray-400))',
                    500: 'hsl(var(--gray-500))',
                    600: 'hsl(var(--gray-600))',
                    700: 'hsl(var(--gray-700))',
                    800: 'hsl(var(--gray-800))',
                    900: 'hsl(var(--gray-900))',
                    950: 'hsl(var(--gray-950))',
                },
                // Intelligence-focused color system
                neural: {
                    DEFAULT: '#3B82F6',
                    light: '#60A5FA',
                    dark: '#1D4ED8',
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    200: '#BFDBFE',
                    300: '#93C5FD',
                    400: '#60A5FA',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E40AF',
                    900: '#1E3A8A',
                },
                quantum: {
                    DEFAULT: '#8B5CF6',
                    light: '#A78BFA',
                    dark: '#7C3AED',
                    50: '#F5F3FF',
                    100: '#EDE9FE',
                    200: '#DDD6FE',
                    300: '#C4B5FD',
                    400: '#A78BFA',
                    500: '#8B5CF6',
                    600: '#7C3AED',
                    700: '#6D28D9',
                    800: '#5B21B6',
                    900: '#4C1D95',
                },
                intelligence: {
                    DEFAULT: '#10B981',
                    light: '#34D399',
                    dark: '#047857',
                    50: '#ECFDF5',
                    100: '#D1FAE5',
                    200: '#A7F3D0',
                    300: '#6EE7B7',
                    400: '#34D399',
                    500: '#10B981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065F46',
                    900: '#064E3B',
                },
                sand: {
                    DEFAULT: '#F59E0B',
                    light: '#FCD34D',
                    dark: '#D97706',
                    50: '#FFFBEB',
                    100: '#FEF3C7',
                    200: '#FDE68A',
                    300: '#FCD34D',
                    400: '#FBBF24',
                    500: '#F59E0B',
                    600: '#D97706',
                    700: '#B45309',
                    800: '#92400E',
                    900: '#78350F',
                },
                depth: {
                    '1': '#111111',
                    '2': '#1A1A1A',
                    '3': '#262626',
                    '4': '#404040',
                }
			},
			fontFamily: {
                sans: ['SF Pro Text', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
                display: ['SF Pro Display', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
                avant: ['Avant Garde', 'Inter', 'system-ui', 'sans-serif'],
                satoshi: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
                syne: ['Syne', 'Inter', 'system-ui', 'sans-serif'],
                space: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
            },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'neural-grid': 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                'quantum-dots': 'radial-gradient(rgba(139, 92, 246, 0.2) 2px, transparent 2px)',
                'intelligence-flow': 'repeating-linear-gradient(45deg, rgba(16, 185, 129, 0.03), rgba(59, 130, 246, 0.05) 10px)',
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
                // Apple-style animations
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'scale-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.95)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    }
                },
                'slide-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'glow': {
                    '0%, 100%': {
                        opacity: '1'
                    },
                    '50%': {
                        opacity: '0.5'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-up': 'slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                'glow': 'glow 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
			},
            transitionTimingFunction: {
                'ease-out-expo': 'var(--ease-out-expo)',
                'ease-out-quart': 'var(--ease-out-quart)',
                'ease-out-circ': 'var(--ease-out-circ)',
                'ease-apple': 'var(--ease-in-out)',
            },
            transitionDuration: {
                '150': 'var(--duration-150)',
                '200': 'var(--duration-200)',
                '300': 'var(--duration-300)',
                '500': 'var(--duration-500)',
                '700': 'var(--duration-700)',
                '1000': 'var(--duration-1000)',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
