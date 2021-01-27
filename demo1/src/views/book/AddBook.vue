<template>
  <div>
    <h3>AddBook</h3>
    <router-view></router-view>

    <div style="margin: 20px;"></div>

    <el-form :label-position="labelPosition" :rules="rules" ref="ruleForm"  label-width="80px" :model="ruleForm">
      <el-form-item label="书名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model="ruleForm.author"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddBook',
  data () {
    return {
      labelPosition: 'right',
      ruleForm: {
        name: '',
        author: ''
      },
      rules:
        {
          name: [
            {required: true, message: '请输入书名', trigger: 'blur'}
          ],
          author: [
            { required: true, message: '请输入作者', trigger: 'blur' }
          ]
        }
    }
  },
  methods: {
    submitForm (formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
          const url = 'http://localhost:8181/book/save'
          axios.post(url, this.ruleForm).then(function (resp) {
            console.log(resp)
            if (resp.data === 'success') {
              _this.$alert('《' + _this.ruleForm.name + '》添加成功', '消息', {
                confirmButtonText: '确定',
                callback: action => {
                  _this.$router.push('/BookManager')
                }
              })
            } else {
              _this.$message.error('添加失败')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
