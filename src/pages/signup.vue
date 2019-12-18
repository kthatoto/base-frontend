<template lang="pug">
.signup
  el-card.signup__card
    .signup__header(slot="header")
      h2 Signup
    el-form.signup__form(label-width="85px" :model="form" ref="form" :rules="rules")
      transition(name="alert")
        el-alert.signup__alert(v-if="form.failed" @close="form.failed = false"
          type="error" title="signup failed" show-icon)
      el-form-item(label="email" prop="email")
        el-input(v-model="form.email")
      el-form-item(label="password" prop="password")
        el-input(v-model="form.password" type="password")
      el-button.signup__button(@click="signup" type="primary") signup
    Link(to="/signin") Singin
</template>

<script>
export default {
  middleware: 'shouldGuest',
  data () {
    return {
      form: {
        email: '',
        password: '',
        failed: false
      },
      rules: {
        email: [{ required: true }],
        password: [{ required: true }]
      }
    }
  },
  methods: {
    async signup () {
    }
  }
}
</script>

<style lang="stylus" scoped>
sign-form(signup)
</style>
