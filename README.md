# vue3_shop

本项目为Vue3构建电商后台管理系统,.主要实现的功能有：框架结构搭建, 用户管理增删改查,角色分配。权限管理, 商品管理, 订单管理数据统计等。
 - 涉及的技术点有:Tree 树形控件+递归展示角色列表,  Steps 步骤条+tabs标签页+from表单校验实现添加商品, Cascader 级联选择器展示分类商品和省市区联动,表格展开收起tree-table三级表格,复用dialog对话框, 上传图片, 富文本, Timeline 时间线展示物流信息。 echarts展示数据报表, 项目打包优化等
## get 技能
- 项目结构搭建: vue ui可视化搭建项目安装依赖, 侧边栏与导航栏搭建基本结构, 面包屑,eslint语法警告处理
- 用户管理: 用户增删改查,分配角色
- 权限管理: 
  - 展示角色默认权限:  Tree树形控件+递归的形式，获取角色下所有三级权限的id，并保存到 默认数组中 
  - 权限分配: 弹出树形框时保存当前角色id, 根据接口定义,获得全选半选id数组,传参即可。
  - 用户管理分配角色: 调接口传参
- 商品管理:  
  - 添加商品: Steps 步骤条+tabs标签页实现联动,from表单提交数据。
  - 添加参数: Cascader联动目录下为某商品(修改删除)动态参数(型号,颜色)和静态属性(名称,功耗),
  - 添加分类：(如在三级展开收起表格下大家电/电视添加海信商品)
- 数据统计: echarts: 1导入echarts---2 为ECharts准备一个具备大小（宽高）的Dom--3 echarts.init初始化获取的dom--4 echarts实例setOption()展示数据
- 订单管理: 列表渲染和省市区级联选择器--Timeline时间线绘制物流信息
- 遇到问题: 
  - 上传图片: 因为上传控件用的不是axios, 上传图片得为header设置token.
  - 可展开的列表刷新会收起:优化element表格每次只展示一行,展开行数据不显示?this.$nextTick或v-if 
  - ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错: router的配置文件中加段代码
- 项目优化:  
  - 切换菜单展示进度条: 安装nprogress运行依赖--引入nprogress的css和js--配置请求拦截器request()和响应拦截器response
  - babel.config.js中通过process.env.NODE_ENV判断开发还是生产环境,利用babel-plugin-transform-remove-console仅去除开发环境console.log
  - 生成打包报告:通过vue ui可视化通过输出和分析仪表盘查看各种依赖包大小
- 打包优化(首屏加载慢)   
  - 为开发和发布指定不同打包入口: 定义两main文件,vue.config通过chainWebpack(config.when)指定不同入口。
  - CDN引入: import引入的依赖包会合在一个文件导致体积过大? vue.config通过externals声明哪些依赖包不会打包, main中注释掉import文件,index.html已cdn链接引入js,css(包括element)
  - 首页内容定制：为不同环境展示不同首页标题:vue.config.js通过 config.plugin('html')定义boolean变量, index.html利用nodeJs(%)语法判断
  - 路由-组件-图片懒加载: 按需引入import或bable.config设置@babel/plugin-syntax-dynamic-import
  - 服务端开启gzip压缩: 可减少文件体积,传输更快: 在node服务端安装引入compression，app.use(compression())启用中间件
- 项目上线
  - 项目部署到node服务器下: npm init搭建package.json脚本--安装express-const app = express()创建服务器-app.use托管静态资源(dist下打包文件)-- app.listen设置监听端口启动127.0.0.1/#login可查看不同路由页面
  - 配置HTTPS服务: 让网络传输安全: 
    - freess.cn官网申请免费SSL证书: 1-申请域名选择品牌--2输入邮箱选择相关选项--3验证DNS--4验证通过后,下载SSL证书(full_chain.pem公钥,private.key私钥)
    - 后台项目导入证书: 在node服务器中通过https.createServer设置公私钥配置项
  - pm2管理应用: 关掉服务终端依然可以运行
    - npm i pm2 -g全局安装--启动: pm2 start 项目文件(如app.js)--name 自定义名称
    - 查看运行服务:pm2 ls 重启: pm2 resart 名称或id--停止: pm2 stop 名称或id -- 删除:pm2 delete 名称或id)

## 运行后台
- git clone vue3_shop(vue_api_server为后台文件,vue3_shop_dispose为部署文件)项目
- 安装phpStudy集成环境--启用mysql数据库--修改数据库root密码创建新数据库(如mydb)设置用户名密码--去api(vue_api_server)资源目录的config>default.json修改db_config里的'user'和'password'(与新数据库用户名密码一致)https://blog.csdn.net/weixin_43845044/article/details/105046505
- 导入vue_api_server\db下数据库文件--npm安装依赖--node app.js启动
## 运行前端
- npm install安装依赖--npm run serve启动--npm run build--npm run test测试
### 运行效果
![image](https://github.com/xingzhegudu123/vue3_shop/blob/prod/run_img/200.png)
![image](https://github.com/xingzhegudu123/vue3_shop/blob/prod/run_img/235.png)
![image](https://github.com/xingzhegudu123/vue3_shop/blob/prod/run_img/300.png)
![image](https://github.com/xingzhegudu123/vue3_shop/blob/prod/run_img/542.png)
![image](https://github.com/xingzhegudu123/vue3_shop/blob/prod/run_img/603.png)
![image](https://github.com/xingzhegudu123/vue3_shop/blob/prod/run_img/625.png)
```

