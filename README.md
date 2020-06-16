# vue3_shop

本项目为Vue3构建电商后台管理系统,.主要实现的功能有：框架结构搭建,用户管理增删改查,角色分配。权限管理, 商品管理, 订单管理数据统计等,涉及的技术点有:Tree 树形控件+递归展示角色列表,
Steps 步骤条+tabs标签页+from表单校验实现添加商品, Cascader 级联选择器展示分类商品和省市区联动,表格展开收起tree-table三级表格,复用dialog对话框, 上传图片, 富文本,Timeline 时间线展示物流信息。echarts展示数据报表,项目打包优化等
## get 技能
- 项目结构搭建: vue ui可视化搭建项目安装依赖, 侧边栏与导航栏搭建基本结构, 面包屑,eslint语法警告处理
- 权限管理: 
  - 展示角色默认权限:  Tree通过递归的形式，获取角色下所有三级权限的id，并保存到 默认数组中 
  - 权限分配: 弹出树形框时保存当前角色id, 根据接口定义,获得全选半选id数组,传参即可。
  - 用户管理分配角色: 调接口传参
- 商品管理:  Steps 步骤条+tabs标签页+from表单校验实现添加商品, 为Cascader联动目录下某商品添加(修改删除)动态参数(型号,颜色)和静态属性(名称,功耗),为商品添加分类(如在三级展开收起表格下大家电/电视添加海信商品)
- 数据统计: echarts: 1导入echarts---2 为ECharts准备一个具备大小（宽高）的Dom--3 echarts.init初始化获取的dom--4 echarts实例setOption()展示数据
- 订单管理: 列表渲染和省市区级联选择器--Timeline时间线绘制物流信息
- 遇到问题: 
  - 上传图片: 因为上传控件用的不是axios, 上传图片得为header设置token.
  - 可展开的列表刷新会收起:优化element表格每次只展示一行,展开行数据不显示?this.$nextTick或v-if 
  - ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错: router的配置文件中加段代码
- 项目优化:  
  - 切换菜单展示进度条: 安装nprogress运行依赖--引入nprogress的css和js--配置请求拦截器request()和响应拦截器response
  - process.env.NODE_ENV判断开发还是生产环境,利用babel-plugin-transform-remove-console去除开发环境console.log
            
## 运行后台
先git clone喵喵电影后台---cnpm install安装node_moudules---连接数据库 cd到mongod的bin目录下： mongod --dbpath= 'db'数据库配置文件存放的路径--npm start启动
## 运行app端
npm install
### Compiles and hot-reloads for development
npm run serve
### Compiles and minifies for production
yarn run build
### Run your tests
npm run build
### Lints and fixes files
npm run test
### 运行效果
![image](https://github.com/xingzhegudu123/fly-vue3-demo/blob/dev/run_effect/1530.png)
![image](https://github.com/xingzhegudu123/fly-vue3-demo/blob/dev/run_effect/756.png)
![image](https://github.com/xingzhegudu123/fly-vue3-demo/blob/dev/run_effect/415.png)
![image](https://github.com/xingzhegudu123/fly-vue3-demo/blob/dev/run_effect/315.png)
![image](https://github.com/xingzhegudu123/fly-vue3-demo/blob/dev/run_effect/5018.png)
```

