# 这个一个非常好项目
## 就这么多
### [主流开源协议之间有何异同](https://www.zhihu.com/question/19568896)
### 用（传统方式）命令行把修改过后的代码上传到github？？？
1. git add .
2. git commit -m “提交信息”
3. git push

## 制作首页App组件
1. 完成Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的Tabbar区域
    + 在制作 购物车小图标的时候，操作会多一些：
    + 先把 扩展图标的 css样式，拷贝到项目中
    + 拷贝 扩展字体库 ttf 文件 ，到项目中
    + 为购物车 小图标 ，添加 如下样式 ‘mui-icon mui-icon-extra mui-icon-extra-cart’
3. 要在 中间区域放置一个router-view来展示路由匹配到的组件

## 改造 rabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 加载首页轮播图数据
1. 获取数据，如何获取呢，使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到data里面去
4. 使用 v-for 循环渲染每个item 项