<template>
  <div>
    <h3>图书管理</h3>
    <!-- 表格组件 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column fixed prop="id" label="id" width="150"></el-table-column>
      <el-table-column fixed prop="author" label="作者" width="150"></el-table-column>
      <el-table-column fixed prop="name" label="书名" width="150"></el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件-->
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="this.pageSize"
      :total="this.totalSize"
      @current-change="changePage"
    >
    </el-pagination>

  </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      pageSize: 1,
      totalSize: 5,
      tableData: [],
      tableData2: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    handleClick (row) {
      alert(row)
    },
    changePage (currPage) {
      const _this = this
      const url = 'http://localhost:8181/book/findAll/+' + (currPage - 1) + '/5'
      axios.get(url).then(function (resp) {
        console.log('***********')
        console.log(resp)
        _this.tableData = resp.data.content
        _this.totalSize = resp.data.totalElements
      })
    }
  },
  created () {
    const _this = this
    const url = 'http://localhost:8181/book/findAll/0/5'
    axios.get(url).then(function (resp) {
      _this.tableData = resp.data.content
      _this.totalSize = resp.data.totalElements
      _this.pageSize = resp.data.size
    })
  }

}
</script>
