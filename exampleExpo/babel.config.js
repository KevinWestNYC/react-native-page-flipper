const path = require('path');
const pak = require('../package.json');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-transform-runtime',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.ios.tsx', '.android.tsx', '.svg'],
          alias: {
            '@': './src',
            [pak.name]: path.join(__dirname, '..', pak.main),
          },
        },
      ],
      'react-native-reanimated/plugin',
      'inline-dotenv',
      '@babel/plugin-syntax-dynamic-import',
    ],
  };
};

//

// const path = require('path');
// const pak = require('../package.json');

// module.exports = function (api) {
//     api.cache(true);

//     return {
//         presets: ['babel-preset-expo'],
//         plugins: [
//             [
//                 'module-resolver',
//                 {
//                     extensions: ['.tsx', '.ts', '.js', '.json'],
//                     alias: {
//                         [pak.name]: path.join(__dirname, '..', pak.main),
//                     },
//                 },
//             ],
//             'react-native-reanimated/plugin',
//             'inline-dotenv',
//             '@babel/plugin-syntax-dynamic-import',
//         ],
//     };
// };
