
//引入path模块
const path = require('path');

const webpack = require('webpack');
//引入一个生成html页面的模块插件 ， 只要是插件 ，都要写到plugins里new一 下
/*
  这个插件的两个作用
    - 会根据指定的页面生成内存中的页面
    - 自动是把bundle.js引入到页面中去
 */
const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
//新版本的webpack，在运行vue时，还要引入一个外部插件，在plugins数组里面new一下

module.exports = {
  //在配置中需要指定一个入口和一个出口
  entry: path.join(__dirname , './src/main.js'), //入口，表示要webpack打包的是哪个文件
  output: {//输出相关的配置
    path: path.join(__dirname , './dist'), //指定打包号的文件要输出到哪里
    filename: 'bundle.js' //这是指定输出的文件名称
  },
  devServer: {
    host: '127.0.0.1',
    //这是配置dev-server的第二种方式，相对来说，比较麻烦一些
    open: true, //自动打开浏览器
    port: 8080, //设置启动时候的端口
    contentBase: 'src', //滴定托管的目录
    hot: true //启用热更新
  },
  plugins: [ //配置插件的节点
    new webpack.HotModuleReplacementPlugin(),//new 一个热更新
    
    new htmlWebpackPlugin({
      template: path.join(__dirname , './src/index.html'), //指定模块页面，将来会根据指定的页面去生成内存中的页面
      filename: 'index.html' //指定生成的页面的名称
    }),
    new VueLoaderPlugin()
  ],
  module: { //这个节点用于配置所有第三方模块加载器
    rules: [ //所有第三方模块的匹配规则
      {test: /\.css$/ , use: ['style-loader' , 'css-loader']},
      {test: /\.less$/ , use: ['style-loader' , 'css-loader' , 'less-loader']}, //配置处理less第三方的loader规则
      {test: /\.scss$/ , use: ['style-loader' , 'css-loader' , 'sass-loader']}, //配置处理scss第三方的loader规则
      //再use的值后面有可以传参，格式和网页url 发送get格式一样  （ ?key=value ） 这种格式 ，
      /*
        limit给定的是图片大小 ， 如果大于和等于图片的字节大小，图片途径会被自动转化为base64编码 ，当小于图片字节大小，
        显示的路径也不是本地我路径，而是一个hash值，为了防止图片重名 ， 可以使用 name=[你的图片名称].[后缀名] 来
        给的图片的路径，但是会出现重名 ， 如果又想要自己指定名称又不想要重复，我可以再名称前面加上一个hash值
        name=[hash:8(8是截取hash值的前8位)]-[你想要的图片名称].[后缀名]
       */
      {test: /\.(jpg|png|gif|jpeg)$/i , use: 'url-loader?limit=39905&name=[hash:8]-[name].[ext]'}, //配置处理图片url的loader规则
      {test: /\.(ttf|eot|svg|woff|woff2)$/ , use: 'url-loader'}, //配置字体文件的loader
      {test: /\.js$/ , use: 'babel-loader' , exclude: /node_modules/}, //配置处理ES6语法
      {test: /\.vue$/ , use: 'vue-loader'}
    ]
  },
  resolve: {
    alias: { //设置修改vue导入包的路径
      // "vue$": "vue/dist/vue.js"
    }
  }
};


/*
  输入webpack 来配置时， webpack 读取不到命令里的入口和出口时，
  会到根目录查找到文件名称叫webpack.config.js的配置文件，找到
  配置文件后进入文件执行配置文件里面的代码。
 */


/*
  使用 webpack-dev-server 这个工具来实现自动打包编译的功能
    - 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
    - 由于 webpack-dev-server是安装在当前的本地目录下，而终端上只可以直接运行
      全局安装的工具，我们可以在更目录下的json中，在scripts里面加上一个
      “dev”： “webpack-dev-server”  这样我们只要在终端上运行npm run dev就可以了
    - 注意： 使用webpack-dev-server打包号的bundle.js不会保存到我们的磁盘上，
      运行在我们的内存中，目的是为了达到快速打包的目的，当你修改完毕保存时就立马重新打包，
      所以在目录上看不见，它给出的路径，是在当前的根目录，可以认为是一个虚构的目录。
 */