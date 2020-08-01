<template>
  <!-- model: 包括的时候可能是RadioGroup的或者自己的-->
  <label class="hm-radio" :class="{ 'is-checked': label === model }">
    <!-- 小圆 -->
    <span class="hm-radio__input">
      <span class="hm-radio__inner"></span>
      <input
        class="hm-radio__original"
        type="radio"
        v-model="model"
        :value="label"
        :name="name"
        ref="radio"
      />
    </span>
    <span class="hm-radio__label">
      <slot></slot>
      <!-- 如果没有插槽，就显示label -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "HmRadio",
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    // 父组件v-modle值
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    // 此处要注意v-modle的理解，主要不能直接改变父组件传过来的值
    model: {
      // 获取
      get() {
        // return this.value
        // 否被radioGroup所包裹
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      // 设置
      set(value) {
        // this.$emit("input", value)
        //否被radioGroup所包裹
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value)
        // 修改checked属性
        // console.log(value)
        // console.log(this.label, value)
        this.$refs.radio.checked = this.label === this.model
      }
    },
    isGroup() {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss">
.hm-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .hm-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .hm-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .hm-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中样式
.hm-radio.is-checked {
  .hm-radio__input {
    .hm-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .hm-radio__label {
    color: #409eff;
  }
}
</style>
