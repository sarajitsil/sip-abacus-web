// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Add this line
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nature-green': '#4CAF50',
        'slate-gray': '#708090',
        'off-white': '#F8F9FA',
      },
    },
  },
  plugins: [],
};
export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         'nature-green': '#4CAF50', // SIP primary branding [cite: 1, 10]
//         'slate-gray': '#708090',   // Your requested text color
//         'off-white': '#f8faf9',    // Your requested background
//       },
//       fontFamily: {
//         montserrat: ['var(--font-montserrat)', 'sans-serif'],
//         inter: ['var(--font-inter)', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;