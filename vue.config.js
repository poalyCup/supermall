module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',
        'store': '@/store'
      }
    }
  },
  publicPath: './',

  assetsDir: 'public'
}