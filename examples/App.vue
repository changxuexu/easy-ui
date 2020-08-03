<template>
  <div>
    <div>测试页面</div>
    <test></test>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
    test: () => import('./test')
  },
}
</script>

<style lang="scss" scoped>
.row {
  padding: 10px 0;
}
.hm-button {
  margin-left: 10px;
}
</style>
