<template>
  <div class="hm-form-item">
    <label class="hm-form-item__label" :style="labelStyle">{{label}}</label>
    <div class="hm-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HmFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./css/index.scss";
</style>
