// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Adicionar regra para arquivos de fonte customizados
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/fonts/', // Caminho onde as fontes serão servidas
          outputPath: `${isServer ? '../' : ''}static/fonts/`, // Caminho de saída na compilação
          esModule: false,
        },
      },
    });

    return config;
  },
};
