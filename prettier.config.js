// prettier.config.js
module.exports = {
  bracketSpacing: true,
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: './tailwind.config.js',
}
