<template>
  <div>

    <h3>EditBook</h3>
<!--    <router-view></router-view>-->

    <div style="margin: 20px;"></div>

    <el-form :label-position="labelPosition" :rules="rules" ref="ruleForm"  label-width="80px" :model="ruleForm">
      <el-form-item label="书名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model="ruleForm.author"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'EditBook',
  data () {
    return {
      labelPosition: 'right',
      ruleForm: {
        id: '',
        name: '',
        author: ''
      },
      rules: {
        name: [
          { required: true, message: '图书名称不能为空', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '作者不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const url = 'http://localhost:8181/book/update'
          axios.put(url, this.ruleForm).then(function (resp) {
            console.log(resp)
            if (resp.data === 'success') {
              console.log(resp.data)
              if (resp.data === 'success') {
                _this.$alert('《' + _this.ruleForm.name + '》更新成功', '消息', {
                  confirmButtonText: '确定',
                  callback: action => {
                    _this.$router.push('/BookManager')
                  }
                })
              } else {
                _this.$message.error('更新失败')
              }
            }
          })
        } else {
          _this.$message.error('更新失败')
        }
      })
    }
  },
  created () {
    const _this = this
    const url = 'http://localhost:8181/book/findById/' + this.$route.query.id
    axios.get(url).then(function (resp) {
      _this.ruleForm = resp.data
    })
  }
}
</script>

<style scoped>

</style>
