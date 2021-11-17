module.exports = (api) => {
  const isProd = api.env('production');

  if (isProd) {
    return {
      plugins: [
        '@babel/plugin-transform-runtime',
        'babel-plugin-styled-components',
      ],
      presets: [
        ['@babel/preset-react'],
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
      ],
    };
  }

  return {
    plugins: [
      '@babel/plugin-transform-runtime',
      'babel-plugin-styled-components',
    ],
    presets: [
      ['@babel/preset-react'],
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
    ],
  };
};
