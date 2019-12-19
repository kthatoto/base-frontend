<template lang="pug">
.signin
  el-card.signin__card
    .signin__header(slot="header")
      h2 Signin
    el-form.signin__form(label-width="90px" :model="form" ref="form" :rules="rules")
      transition(name="alert")
        el-alert.signin__alert(v-if="alert.showing" @close="alert.showing = false"
          :type="alert.type" :title="alert.message" show-icon)
      el-form-item(label="email" prop="email")
        el-input(v-model="form.email")
      el-form-item(label="password" prop="password")
        el-input(v-model="form.password" type="password")
      el-button.signin__button(@click="signin" type="primary" :loading="form.loading") signin
    Link(to="/signup") Singup
</template>

<script>
export default {
  layout: 'blank',
  middleware: 'shouldGuest',
  data () {
    return {
      form: {
        email: '',
        password: '',
        loading: false
      },
      alert: {
        type: null, // 'error'
        message: '',
        showing: false
      },
      rules: {
        email: [{ required: true }, { type: 'email', trigger: 'blur' }],
        password: [{ required: true }]
      }
    }
  },
  created () {
    this.form.email = 'kthatoto@gmail.com'
    this.form.password = 'password'
  },
  methods: {
    clearAlerts () {
      this.alert = { type: null, message: '', showing: false }
    },
    async signin () {
      this.clearAlerts()
      const valid = await this.$refs.form.validate()
      if (!valid) { return }
      this.form.loading = true
      const res = await this.$firebase.auth().signInWithEmailAndPassword(
        this.form.email, this.form.password
      ).catch((error) => {
        this.alert = { type: 'error', message: error.message, showing: true }
        this.form.loading = false
      })
      if (!res) { return }
      this.form.loading = false
      this.$router.push('/')
      this.$message({ message: 'Signin successful', type: 'success', duration: 3000 })
    }
  }
}
</script>

<style lang="stylus" scoped>
sign-form(signin)
</style>
