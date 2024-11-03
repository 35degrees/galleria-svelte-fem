/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '390px',
			md: '768px',
			lg: '1400px'
		},
		fontFamily: {
			main: ['Libre Baskerville', 'serif']
		},
		extend: {
			gridTemplateRows: {
				// Simple 16 row grid
				16: 'repeat(16, minmax(0, 1fr))'
			},
			colors: {
				darkGrey: 'hsl(0,0%,3%)',
				medGrey: 'hsl(0,0%,90%)',
				lightGrey: 'hsl(0,0%,95%)',
				cream: 'hsl(30, 38%, 95%)'
			}
		}
	}
};
