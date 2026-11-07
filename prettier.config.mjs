/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  semi: true,
  printWidth: 100,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './app/globals.css',
};

export default config;
