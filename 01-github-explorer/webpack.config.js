const path = require('path') //Path sendo usado para não precisar colocar o caminho de todos os arquivos
const HtmlWebpackPlugin = require('html-webpack-plugin') //Instalação deste puglin para otimizar nossa aplicação, o que adiciona index.html 
const isDevelopment = process.env.NODE_ENV !== 'production'
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: isDevelopment ? 'development' : 'production', //Setado o modo de desenvolvimento que é mais rápido que o convencional
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',//Faz com que no console do navegador, a informacao de linhas seja impressa corretamente
  entry: path.resolve(__dirname, 'src', 'index.tsx'), //Especificando onde está acontecendo a passagem
  output: {
    path: path.resolve(__dirname, 'dist'), //Usando o Babel
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], //Arquivos terminados com essas extensões resultam em não precisar especificar em momentos de importação e exportação de componentes.
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html') 
    })
  ].filter(Boolean),
  module: {
    rules: [
        {
            test: /\.(j|t)sx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                plugins: [
                  isDevelopment && require.resolve('react-refresh/babel')
                ].filter(Boolean)
              }
            }
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }
    ],
}
};