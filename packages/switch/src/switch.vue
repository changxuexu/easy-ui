<template>
  <div class="hm-switch" @click="handleChange" :class="{ 'is-checked': this.value }">
    <input class="hm-switch__input" type="checkbox" ref="input" :name="name" />
    <span class="hm-switch__core" ref="core">
      <span class="hm-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HmSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$refs.input.checked = this.value
    // 设置背景色-默认值
    this.setBackgroundColor()
  },
  methods: {
    async handleChange () {
      this.$emit('input', !this.value)
      // 修改checkbox的值
      await this.$nextTick()
      this.$refs.input.checked = this.value
    },
    setBackgroundColor () {
      if (this.activeColor || this.inactiveColor) {
        let newColor = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = newColor
        this.$refs.core.style.backgroundColor = newColor
      }
    }
  },
  watch: {
    value () {
      this.setBackgroundColor()
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./css/index.scss";
</style>
