<template>
  <div>
    <div>测试页面</div>
    <hm-switch v-model="active"></hm-switch>
    <!-- <test></test> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: true
    }
  },
  components: {
    test: () => import('./test')
  },
}
</script>

<style lang="scss" scoped>
</style>
