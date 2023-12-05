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
        "text-color": "#fff",
        black: "#000",
        gray: "rgba(0, 0, 0, 0.2)",
        red: "#f91414",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "image-text": "'DM Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "15xl-2": "34.2px",
        "81xl": "100px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "3xs": "10px",
      xs: "12px",
      "9xl": "28px",
      "17xl": "36px",
      xl: "20px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
}
