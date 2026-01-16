
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
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
                // Digital Bauhaus - Service category colors
                neural: {
                    DEFAULT: "hsl(217 91% 60%)",  // Blue for AI/Tech services
                },
                quantum: {
                    DEFAULT: "hsl(250 60% 65%)",  // Purple for branding services
                },
                intelligence: {
                    DEFAULT: "hsl(160 60% 45%)",  // Green for development
                },
                sand: {
                    DEFAULT: "hsl(35 60% 55%)",   // Amber for media services
                },
			},
			fontFamily: {
                sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
                display: ["SF Pro Display", "Inter", "system-ui", "sans-serif"],
                body: ["SF Pro Text", "Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "Space Mono", "Menlo", "Monaco", "Courier New", "monospace"],
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
