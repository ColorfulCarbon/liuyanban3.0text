<template>
 <div>
  <input type="text" v-model="MyValue">
  <button @click="handleClick">add</button>
  <ul>
   <li v-for="(tmp,index) of MyList" :key="index">{{tmp}}</li>
  </ul>
 </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
   return {
     MyList:[],
     MyValue:''
   }
  },
  methods:{
   handleClick(){
    this.MyList.push(this.MyValue)
   }
  },
  mounted() {
  //使用axios发起请求
  var url='http://jsonplaceholder.typicode.com/users';
  axios.get(url).then((res)=>{
   console.log(res.data)
  }).catch((err)=>{
   console.log(err)
  }) 
  },
}
</script>