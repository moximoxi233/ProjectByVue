# eleme 饿了么商家页面仿写
### 创建项目并初次启动（vue3）
https://h5.ele.me 移动端
1、`vue create eleme`(创建项目前会让你选择是创建vue2项目还是vue3项目，选择vue3项目)
2、`cd eleme`
3、`npm run serve`
### vue3注意事项
#### vue3中的 事件对象 获取
- 如果直接绑定事件，未传入参数，则默认第一个参数就是事件对象
- 如果要传入其他参数，则事件对象不能省略，使用`$event`表示事件对象
### 梳理项目文件
- app.js 项目入口文件
- components 放置公用（一般）组件
- views 放置路由组件
- static 静态资源：比如公用的样式、字体文件、图片
- store 状态管理文件（vuex）
- router 路由管理文件
### 常见报错
- 命名不规范
error：Component name "Header" should always be multi-word
原因：语法检查时把不规范的代码当成了错误
解决：在 vue.config.js文件中添加配置：lintOnSave: false
### 项目中使用的三方库
#### css预处理器--sass
[sass使用](https://blog.csdn.net/weixin_46106512/article/details/124329180)
##### 概述
sass是 世界上最成熟、最稳定、最强大的专业级CSS扩展语言！
##### 特性
1.兼容CSS （在sass文件里面可以直接书写css）
2.支持后缀名为sass（他没有{}以及;） 以及 scss（scss常用 这个跟css书写差不多）
3.社区成熟 （api众多）
##### 下载
1. 在vscode中下载插件，搜索：easy sass
2. 配置环境：勾选 Easysass:Complile After Save下的自动保存选框
##### 项目中使用
1. 安装
- `npm i sass`
- `npm i sass-loader@10.1.1`
2. 使用
在style标签中写入 ⚠️lang='scss'，这样样式代码直接嵌套编写
```css
<style lang="scss" scoped> </style>>
```
引入外部sass文件
```css
import "@/xxxxxx.scss"
```
#### 三方库
##### 饿了么UI库
[element-plus ui 使用指南](https://element-plus.gitee.io/zh-CN/component/icon.html#%25E5%259B%25BE%25E6%25A0%2587%25E9%259B%2586%25E5%2590%2588)
**npm 安装**
`npm install element-plus --save`
常用：图标内容
**支持按需引入 针对性安装**
`npm install @element-plus/icons-vue`
main.js中
```js
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
```
使用
```html
<el-icon><ArrowRight style="width:10px;height:10px:color:#666"/></el-icon>
```
##### axios-网络请求库
[acios介绍](https://www.axios-http.cn/docs/intro)
安装（使用npm安装）
`npm install axios`
项目中使用
#### 插件
##### 路由vue-router
[vue-router路由](https://blog.csdn.net/sinat_17775997/article/details/80688397)
**安装**
`npm install vue-router`
**引入**
main.js中引入
```js
import router from'./router'
app.use(router)
```
页面中使用
[vue3中路由传参](https://blog.csdn.net/m0_69502730/article/details/126513513)
[query和params传参的区别](https://blog.csdn.net/weixin_57550930/article/details/120341698)
##### beter-scroll
beter-scroll:解决各种滚动场景需求的插件
[better-scoll 详解](https://blog.csdn.net/wzg0817/article/details/108013765)
安装
`npm install better-scroll --save`
引入
`import BScroll from 'better-scroll'`
##### 状态管理工具vuex
安装
`npm install vuex`
在项目中scr文件夹下创建store->index.js，便于项目管理
index.js中


将 食物&菜单评论等数据请求通过store进行集中管理
#### 项目编写中遇到的问题和思考
1. 点击某个食物跳转到指定食物详情
- 利用router-link标签实现路由跳转
- 利用点击事件来控制食物详情的显示。。。


