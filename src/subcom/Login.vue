<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'account里面的login组件'
      }
    }
  }
</script>

<style scoped>
  div{
    color: #f00;
  }
</style>