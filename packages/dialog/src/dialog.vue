<template>
  <transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
    <div class="hm-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="hm-dialog" :style="{width: width, marginTop: top}">
        <div class="hm-dialog__header">
          <!--技巧：不传显示span,传slot整体被替换 -->
          <slot name="title">
            <span class="hm-dialog__title">{{title}}</span>
          </slot>
          <button class="hm-dialog__headerbtn" @click="handleClose">
            <i class="el-icon-close"></i>
          </button>
        </div>
        <div class="hm-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <!-- $slots.footer存在才显示底部 -->
        <div class="hm-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HmDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    },
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('closed')
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./css/index.scss";
</style>
