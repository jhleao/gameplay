module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "inline-dotenv",
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@assets': './src/assets',
            '@ts': './src/@types',
            '@globals': './src/globals',
            '@routes': './src/routes',
            '@configs': './src/configs',
            '@services': './src/services',
            '@hooks': './src/hooks',
          }
        }
      ],
    ]
  };
};
