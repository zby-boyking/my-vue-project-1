<template>
  <div>

    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <h3>HomeContainer</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lunbotuList: []
      }
    },
    created() {
      this.getLunbotu();
    }
    ,
    methods: {
      getLunbotu() {
        //获取轮播图数据的方法
        this.$http.get("http://127.0.0.1:8080/data").then(result => {
          console.log(result);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: #4cd964;
      }
      &:nth-child(2) {
        background-color: #00ffff;
      }
      &:nth-child(3) {
        background-color: #8a6de9;
      }
    }
  }
</style>