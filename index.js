module.exports = function() {
  return {
    plugins: [require('@babel/plugin-proposal-class-properties')],
    presets: [
      [
        require('@babel/preset-env'),
        {
          targets: {
            node: '10.15',
          },
        },
      ],
      require('@babel/preset-typescript'),
    ],
  };
};
