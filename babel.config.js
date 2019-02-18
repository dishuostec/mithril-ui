const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: '10',
      },
      modules: 'false',
    },
  ],
];

const plugins = [
  [
    '@babel/plugin-transform-react-jsx',
    {
      pragma: 'm',
      useBuiltIns: true,
    },
  ],
];

module.exports = { presets, plugins };
