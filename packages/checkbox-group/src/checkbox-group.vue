<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hmCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
