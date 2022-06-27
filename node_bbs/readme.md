# node_bbs社区项目练习
### 分析页面组件结构-组件展示&作用
- APP 组件入口（主组件）
    - header组件-非路由组件
        - 展示网站头信息
    - main&sidebar 来指定：不同路径下渲染的路由组件
        - `/` main:PostList
        - `/topic/:id&auther=:name` main:Article、sidebar:SideBar
        - `/user/:name` main:UserInfo
- 路由组件详情
    - api：https://cnodejs.org/api
    - PostList 技术贴列表
    - Article 文章详情
    - SideBar 作者近期详情
    - UserInfo 作者个人信息

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
##
