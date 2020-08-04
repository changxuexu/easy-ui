<template>
  <button
    class="hm-button"
    @click="handleClick"
    :disabled="disabled"
    :class="[
      `hm-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]"
  >
    <!-- 字体图标的支持 -->
    <i :class="icon" v-if="icon"></i>
    <!-- 如果没有传入内容插槽不显示 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'HmButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    // 是否是朴素按钮
    plain: {
      type: Boolean,
      default: false
    },
    // 是否是圆角按钮
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./css/index.scss";
</style>