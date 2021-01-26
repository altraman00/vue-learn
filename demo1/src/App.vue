<template>
  <div>
    <router-link to="/addBook"><button>Go to addBook</button></router-link>
    <router-link to="/bookManager"><button>Go to bookManager</button></router-link>
    <router-link to="/home"><button>Go to home</button></router-link>
    <router-link to="/about"><button>Go to about</button></router-link>

    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <!--default-openeds 表示默认展开哪几个导航-->
        <el-menu router :default-openeds="['0','1']">
          <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" :key="index">
            <template slot="title"><i class="el-icon-message"></i>{{index}}-{{item.name}}</template>
            <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path" :key="index+'-'+index2" :class="$route.path==item2.path?'is-active':''">{{index+'-'+index2}}-{{item2.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <router-view></router-view>

    </el-container>

  </div>
</template>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
