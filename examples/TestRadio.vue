<template>
  <div>
    <hm-radio-group v-model="radiovalue">
      <HmRadio label="男"></HmRadio>
      <HmRadio label="女"></HmRadio>
    </hm-radio-group>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      radiovalue: ""
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped></style>
