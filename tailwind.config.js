/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
<<<<<<< HEAD
        white: "#fff",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.03)",
          "300": "rgba(217, 217, 217, 0)",
        },
        black: "#000",
        red: "#f91414",
        whitesmoke: "#f5f2f2",
        darkgray: {
          "100": "#b5abab",
          "200": "#a7a6a6",
        },
        dimgray: "#5c585a",
=======
        "text-color": "#fff",
        black: "#000",
        gray: "rgba(0, 0, 0, 0.2)",
        red: "#f91414",
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
<<<<<<< HEAD
=======
        "image-text": "'DM Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "15xl-2": "34.2px",
        "81xl": "100px",
        "3xs": "10px",
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
      },
    },
    fontSize: {
      base: "16px",
<<<<<<< HEAD
      "9xl": "28px",
      "17xl": "36px",
=======
      "3xs": "10px",
      xs: "12px",
      "9xl": "28px",
      "17xl": "36px",
      xl: "20px",
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
<<<<<<< HEAD
  plugins: [
    require('tailwindcss-gradients'),
    // ... other plugins
  ],
};
=======
}
>>>>>>> 6226169c9f3fda3167cbc0abe94e7eae27327698
