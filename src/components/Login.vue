<template>
  <button @click="jump">跳转</button>
</template>
<script>
export default {
  methods: {
   jump(){
    this.$router.push('/box')
   }
  },
}
</script>