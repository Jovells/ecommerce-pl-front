module.exports = {
  rules: {
    'no-console': 'off',
  },
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
}
