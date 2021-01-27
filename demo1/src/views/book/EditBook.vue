<template>
  <div>
    <h3>EditBook</h3>
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
        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: 'EditBook'
}
</script>

<style scoped>

</style>
