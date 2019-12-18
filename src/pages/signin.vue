<template lang="pug">
.signin
  el-card.signin__card
    .signin__header(slot="header")
      h2 Signin
    el-form.signin__form(label-width="90px" :model="form" ref="form" :rules="rules")
      transition(name="alert")
        el-alert.signin__alert(v-if="form.failed" @close="form.failed = false"
          type="error" title="Signin failed" show-icon)
      el-form-item(label="email" prop="email")
        el-input(v-model="form.email")
      el-form-item(label="password" prop="password")
        el-input(v-model="form.password" type="password")
      el-button.signin__button(@click="signin" type="primary") signin
    Link(to="/signup") Singup
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
        email: [{ required: true }, { type: 'email', trigger: 'blur' }],
        password: [{ required: true }]
      }
    }
  },
  methods: {
    async signin () {
      // const valid = await this.$refs.form.validate()
      // if (!valid) { return }
      // firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
      //   .then(() => {
      //     if (this.$route.query.redirect) {
      //       this.$router.push(this.$route.query.redirect)
      //     } else {
      //       this.$router.push('/')
      //     }
      //   }).catch(_ => {
      //     store.dispatch(SET_ALERT_MESSAGE, {
      //       message: 'ログインに失敗しました',
      //       type: 'danger'
      //     })
      //   })
    }
  }
}
</script>

<style lang="stylus" scoped>
sign-form(signin)
</style>
