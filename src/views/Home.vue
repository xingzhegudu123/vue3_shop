<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
       <div>
        <img src="../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button></el-header>
    <!-- 页面主体区域 -->
    <el-container class="">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
         <div class="toggle-button" @click="toggleCollapse">
             <i :class="isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold'"></i> 
         </div>
         <el-menu
          unique-opened
          router 
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="activePath"
          class="el-menu-vertical-demo"
          background-color="#373d41"
          text-color="#fff"
          active-text-color="#409EFF">
           <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''"  v-for="item in menulist" :key="item.id">
              <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>
                <!-- 二级菜单 -->
                <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/' + subItem.path)">
                    <template slot="title">
                      <!-- 图标 -->
                      <i class="el-icon-menu"></i>
                      <!-- 文本 -->
                      <span>{{subItem.authName}}</span>
                  </template>
                </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容区 -->
      <el-main>
         <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb> -->
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  watch: {
    $route(to,from){
      console.log(to);
   }
  },
  data() {
    return {
      // 左侧菜单数据
      menulist: [],
      breadCrumbItems: [],// 面包屑数组
      iconsObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created(){
    this.getMenuList();
    this.activePath = window.sessionStorage.getItem('activePath'); // 刷新时打开之前选中的二级菜单
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log('菜单列表',res)
    },
     // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>
<style lang="less" scoped>
.home-container {
  position: absolute;
  top: 0;
  // z-index: -5;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  // &::-webkit-scrollbar {
  //     display: none;
  //   }
}
.el-header{
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside{
  background: #373d41;
  position: relative;
   .el-menu {
    border-right: none;
  }
  .toggle-button {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left:0;
    width: 100%;
    font-size: 20px;
  }
}
.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}

 
</style>

