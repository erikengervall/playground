module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '**/*.ts',
      options: {
        parser: 'typescript',
      },
    },
  ],
}
