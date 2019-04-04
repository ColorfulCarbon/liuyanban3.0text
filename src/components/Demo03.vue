<template>
  <div>
   <h3>这是页jo</h3>
  </div>
</template>
<script>
export default {
  mounted() {
   this.$bus.$on('myEvent',(msg)=>{
    console.log('页脚接收到的消息',msg)
   })
  },
}
</script>
