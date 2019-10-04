<template>
  <div>
    <h1>{{ msg }}</h1>

    <router-link to="/account/login">登陆</router-link>
    <router-link to="/account/register">注册</router-link>
    <router-view>

    </router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'account组件'
      }
    }
  }
</script>

<style scoped>
  div{
    color: #0ff;
  }
</style>