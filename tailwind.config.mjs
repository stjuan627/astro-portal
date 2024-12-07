/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["emerald"],
		darkTheme: "emerald",
		base: true,
		styled: true,
		utils: true,
		logs: true,
	}
}
