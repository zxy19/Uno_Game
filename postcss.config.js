const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.tsx", "./pages_/**/*.tsx"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};

// module.exports = {
//     plugins: [
//       require('autoprefixer'),
//       require('postcss-nested')
//     ]
//   }