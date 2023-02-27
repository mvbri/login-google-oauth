/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			stone: {
				100: '#cffafe',
				200: '#a5f3fc',
				300: '#67e8f9',
				400: '#22d3ee',
				500: '#06b6d4',
				600: '#0891b2',
				700: '#44403c',
				800: '#292524',
				900: '#164e63',
			},
			blue: {
				700: '#0e7490',
			},
			slate: {
				100: '#f8fafc',
			},
			white: {
				100: '#ffffff',
			},
		},
	},
	plugins: [],
};
