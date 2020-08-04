<template>
  <label class="hm-checkbox" :class="{'is-checked':isChecked}">
    <span class="hm-checkbox__input">
      <span class="hm-checkbox__inner"></span>
      <input
        :name="name"
        :value="label"
        v-model="model"
        type="checkbox"
        class="hm-checkbox__original"
      />
    </span>
    <!-- v-if="$slots.default" -->
    <span class="hm-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
// 存在问题group中不使用label报错
export default {
  name: "HmCheckbox",
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  computed: {
    isGroup () {
      return !!this.CheckboxGroup
    },
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isChecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  props: {
    value: {
      type: [Boolean, String],
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "",
    }
  },
}
</script>

<style lang='scss' scoped>
@import "./css/index.scss";
</style>
