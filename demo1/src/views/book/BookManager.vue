<template>
  <div>
    <h3>图书管理</h3>
<!--    <input :disable="true"/>打开-->
<!--    <input disable="true"/>打开-->
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
          <el-button @click="editClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="deleteClick(scope.row)">删除</el-button>
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
    editClick (row) {
      const _this = this
      console.log(row)
      // alert('id:' + row.id + ' ---> author:' + row.author + ' ---> name:' + row.name)
      _this.$router.push({
        path: '/editBook',
        query: {
          id: row.id
        }
      })
    },
    deleteClick (row) {
      const _this = this
      const url = 'http://localhost:8181/book/deleteById/' + row.id
      axios.delete(url).then(function (resp) {
        console.log(resp)
        if (resp.status === 200) {
          _this.$message.success('删除成功')
          window.location.reload()
        } else {
          _this.$message.error('删除失败')
        }
      })
    },
    changePage (currPage) {
      const _this = this
      const url = 'http://localhost:8181/book/findAll/+' + (currPage - 1) + '/5'
      axios.get(url).then(function (resp) {
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
