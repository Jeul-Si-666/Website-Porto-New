 tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                        mono: ['"JetBrains Mono"', 'monospace'],
                    },
                    colors: {
                        obsidian: {
                            950: '#06070B',
                            900: '#0A0C12',
                            850: '#0E111A',
                        }
                    },
                    animation: {
                        'float-slow': 'floatSlow 18s ease-in-out infinite',
                        'float-reverse': 'floatReverse 22s ease-in-out infinite',
                        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
                    },
                    keyframes: {
                        floatSlow: {
                            '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
                            '50%': { transform: 'translate3d(30px, -25px, 0) scale(1.06)' },
                        },
                        floatReverse: {
                            '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
                            '50%': { transform: 'translate3d(-35px, 20px, 0) scale(1.08)' },
                        },
                        pulseSoft: {
                            '0%, 100%': { opacity: '0.75' },
                            '50%': { opacity: '1' },
                        }
                    }
                }
            }
        }