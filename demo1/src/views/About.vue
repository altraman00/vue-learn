<template>
  <div>
    <h3>我是about页面</h3>
    <router-view></router-view>

    message : <input v-model="inputValue"/>
    <button @click="handleSubmit">提交</button>
    <p>message is : {{inputValue}}</p>

    <ul>
      <add-item v-for="(item,index) of list" :key="index" :content="item" :index="index"></add-item>
    </ul>

    <div id="whether">
      <div>{{whetherObj.city}}</div>
      <div>{{whetherObj.cityEn}}</div>
      <div>{{whetherObj.country}}</div>
      <div>{{whetherObj.wea}}</div>
      <div>{{whetherObj.win}}</div>
      <div>{{whetherObj.tem}}</div>
      <div>{{whetherObj.win_speed}}</div>
      <div>{{whetherObj.win_meter}}</div>
      <div>{{whetherObj.air_tips}}</div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import AddItem from '../components/AddItem'

export default {
  name: 'About',
  components: {
    'add-item': AddItem
  },
  props: [],
  data () {
    return {
      inputValue: ' ',
      list: [],
      whetherObj: {}
    }
  },
  computed: {},
  methods: {
    handleSubmit () {
      if (this.inputValue === '' || this.inputValue === null) {
        return
      }
      this.list.push(this.inputValue)
      this.inputValue = ''
    }
  },
  created () {
    const _this = this
    const appId = '58124183'
    var appSecret = 'Mx2tSHbT'
    var url = 'https://v0.yiketianqi.com/api?version=v61&appid=' + appId + '&appsecret=' + appSecret
    axios.get(url).then(function (resp) {
      console.log(resp)
      _this.whetherObj = resp.data
    })
  },
  mounted () {}
}
</script>

<style scoped>

</style>
