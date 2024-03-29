/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

const FileManagerPlugin = require('filemanager-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const generateHtmlPlugin = (title) => {
  return new HtmlWebpackPlugin({
    title,
    filename: `${title.toLowerCase()}.html`,
    template: `./src/pages/${title.toLowerCase()}/${title.toLowerCase()}.html`,
    chunks: [title],
    minify: {
      collapseWhitespace: false,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    }
  });
};

const populateHtmlPlugins = (pagesArray) => {
  res = [];
  pagesArray.forEach(page => {
    res.push(generateHtmlPlugin(page));
  })
  return res;
};

const pages = populateHtmlPlugins(['index', 'courses', 'course', 'about', 'events', 'event', 'blog', 'post', 'contacts']);

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  }];

  return loaders;
};

const config = {
  entry: {
    index: path.resolve(__dirname, './src/pages/index/index.js'),
    courses: path.resolve(__dirname, './src/pages/courses/courses.js'),
    course: path.resolve(__dirname, './src/pages/course/course.js'),
    about: path.resolve(__dirname, './src/pages/about/about.js'),
    events: path.resolve(__dirname, './src/pages/events/events.js'),
    event: path.resolve(__dirname, './src/pages/event/event.js'),
    blog: path.resolve(__dirname, './src/pages/blog/blog.js'),
    post: path.resolve(__dirname, './src/pages/post/post.js'),
    contacts: path.resolve(__dirname, './src/pages/contacts/contacts.js'),
  },
  output: {
    filename: './scripts/[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    host: 'localhost',
    static: './build',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      scripts: path.resolve(__dirname, './src/assets/scripts'),
      styles: path.resolve(__dirname, './src/assets/styles'),
      images: path.resolve(__dirname, './src/assets/images'),
    },
  },
  plugins: [
    ...pages,
    new MiniCssExtractPlugin({
      filename: './styles/[name].css',
    }),
    new ImageminWebpWebpackPlugin({
      config: [{
        test: /\.(jpe?g|png)/,
        options: {
          quality: 75
        }
      }],
      overrideExtension: true,
      strict: true
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [{
            source: './src/assets/json/*.json',
            destination: './build/assets/json/',
          }, ],
        },
      },
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [{
            source: './src/assets/images/common/speakers/*.*',
            destination: './build/assets/images/speakers/',
          }, ],
        },
      },
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [{
            source: './src/assets/images/common/blog/*.*',
            destination: './build/assets/images/blog/',
          }, ],
        },
      },
    }),
  ],
  performance: {
    maxAssetSize: 1000000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', {
                interlaced: true
              }],
              ['jpegtran', {
                progressive: true
              }],
              ['optipng', {
                optimizationLevel: 5
              }],
              [
                'svgo',
                {
                  plugins: [{
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                        addAttributesToSVGElement: {
                          params: {
                            attributes: [{
                              xmlns: 'http://www.w3.org/2000/svg'
                            }, ],
                          },
                        },
                      },
                    },
                  }],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
  module: {
    rules: [{
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [stylesHandler,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {

                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(ttf|woff2|woff|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
