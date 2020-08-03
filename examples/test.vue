<template>
  <div>
    <hm-form :model="model">
      <hm-form-item label="用户名">
        <hm-input placeholder="请输入用户名" v-model="model.username"></hm-input>
      </hm-form-item>
      <hm-form-item label="选择">
        <hm-switch v-model="model.active"></hm-switch>
      </hm-form-item>
    </hm-form>
  </div>
</template>

<script>
export default {
  name: 'test',

  data () {
    return {
      model: {
        username: '',
        active: true
      },
    }
  },

  methods: {}
}
</script>
