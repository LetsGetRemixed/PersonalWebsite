	/** @type {import('tailwindcss').Config} */
	module.exports = {
	  content: [
	    "./src/**/*.{js,jsx,ts,tsx}",
	  ],
	  theme: {
	    extend: {

        fontFamily: {
          'firacode': ['"Fira Code"', 'monospace'],
        },

      },
	  },
	  plugins: [],
};

