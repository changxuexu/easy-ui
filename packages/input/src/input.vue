<template>
  <div class="hm-input" :class="{'hm-input--suffix': showSuffix}">
    <!-- 
      如果传了showPassword，判断是否需要切换密码的显示，如果不传，不判断 
      :type="showPassword ? (passwordVisible ? 'text':'password'): type"
    -->
    <input
      class="hm-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text':'password'): type"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="hm-input__suffix" v-if="showSuffix">
      <i
        v-if="clearable && this.value"
        class="hm-input__icon el-icon-circle-close hm-input__clear"
        @click="clear"
      ></i>
      <i
        v-if="showPassword"
        class="hm-input__icon el-icon-view hm-input__clear"
        @click="handlePasswordVisible"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HmInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number],
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 有一个就显示小图标
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./css/index.scss";
</style>
