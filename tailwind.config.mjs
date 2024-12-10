/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			// xl: '1280px',
		},
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			keyframes: {
				'pulse-scale': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				}
			},
			animation: {
				'pulse-slow': 'pulse-scale 2s ease-in-out infinite',
			},
		},
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography')],
	daisyui: {
		themes: ["emerald"],
		darkTheme: "emerald",
		base: true,
		styled: true,
		utils: true,
		logs: true,
	}
}
