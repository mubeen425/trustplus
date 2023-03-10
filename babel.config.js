module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          components: './app/components',
          screens: './app/screens',
          config: './app/config',
          navigations: './app/navigations',
          utils: './app/utils',
          theme: './app/theme',
          navigators: './app/navigations/navigators',
          assets: './app/assets',
          i18n: './app/i18n',
        },
      },
    ],
  ],
};
