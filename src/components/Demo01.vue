<template>
 <div>
  <Myheader @EventLogin='LoginGo'  myTitle='我是头部'></Myheader>
  <ul>
   <li>商品1</li>
   <li>商品2</li>
   <li>商品3</li>
  </ul>
  <myfooter></myfooter>
 </div>

</template>
<script>
import Demo03 from '@/components/Demo03'
export default {
  methods: {
    LoginGo(msg){
      console.log('父组件接收到的值为',msg)
    }
  },
  components:{
   'myfooter':Demo03
  }
}
</script>