/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				circle: '0 2px 6px rgb(0 0 0 / 0.07), 0 -2px 6px rgb(0 0 0 / 0.07), 2px 0 6px rgb(0 0 0 / 0.07), -2px 0 6px rgb(0 0 0 / 0.07)',
			},

			animation: {
				bounceUp: 'bounceUp 1s infinite;',
			},

			keyframes: {
				bounceUp: {
					'0%, 100%': {
						transform: 'translateY()',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(-25%)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
			},
		},
	},
	plugins: [],
};
