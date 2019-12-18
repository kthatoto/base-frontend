<template lang="pug">
.signup
  el-card.signup__card
    .signup__header(slot="header")
      h2 Signup
    el-form.signup__form(label-width="90px" :model="form" ref="form" :rules="rules")
      transition(name="alert")
        el-alert.signup__alert(v-if="form.failed" @close="form.failed = false"
          type="error" title="signup failed" show-icon)
      el-form-item(label="email" prop="email")
        el-input(v-model="form.email")
      el-form-item(label="password" prop="password")
        el-input(v-model="form.password" type="password")
      el-form-item.-longLabel(label="password confirmation" prop="passwordConfirmation"
        :error="errors.passwordConfirmation")
        el-input(v-model="form.passwordConfirmation" type="password")
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
        passwordConfirmation: '',
        failed: false
      },
      rules: {
        email: [{ required: true }, { type: 'email', trigger: 'blur' }],
        password: [{ required: true }]
      },
      errors: { email: null, password: null, passwordConfirmation: null }
    }
  },
  methods: {
    customValidate () {
      if (this.form.password !== this.form.passwordConfirmation) {
        this.errors.passwordConfirmation = 'password does not match to confirmation'
      }
      return Object.values(this.errors).every(v => v === null)
    },
    clearErrors () {
      this.errors = { email: null, password: null, passwordConfirmation: null }
    },
    async signup () {
      this.clearErrors()
      const valid = await this.$refs.form.validate()
      const customValid = await this.customValidate()
      if (!(valid && customValid)) { return }
      console.log('ok')
    }
  }
}
</script>

<style lang="stylus" scoped>
sign-form(signup)
.signup
  .-longLabel
    >>> .el-form-item__label
      line-height: 20px
</style>
