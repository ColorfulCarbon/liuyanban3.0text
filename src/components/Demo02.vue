<template>
  <div>
   <h2>{{myTitle}}</h2>
   <button @click="handleClick">登录操作</button>
   <button @click="closeFooter">关闭页脚</button>
  </div>
</template>

<script>
export default {
  props:['myTitle'],
  methods: {
   //子与父传值
  handleClick(){
    this.$emit('EventLogin',true)
  },
   //兄弟传值
  closeFooter(){
    this.$bus.$emit('myEvent',true)
  }
 }
}
</script>
