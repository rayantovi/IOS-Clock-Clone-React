/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/index.html",
            "./src/*.jsx",
            "./src/**/*.jsx"],
  theme: {  
    extend: {
      colors:{
        "white": "#ffffff",
        "gray": "#9a9a9a",
        "dark-gray": "#1e1e21",
        "orange": "#ea9950",
        "dark-green": "#132b14",
        "green": "#6cd86b"
      },
    },
  },
  plugins: [],
}

