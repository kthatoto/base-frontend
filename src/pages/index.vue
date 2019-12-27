<template lang="pug">
.index
  h2 Hello World
</template>

<script>
export default {
  meta: { auth: true },
  middleware: 'auth'
}
</script>

<style lang="stylus" scoped>
</style>
