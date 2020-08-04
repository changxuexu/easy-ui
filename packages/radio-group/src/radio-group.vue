<template>
  <div class="hm-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hmRadioGroup",
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  },
  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
@import "./css/index.scss";
</style>