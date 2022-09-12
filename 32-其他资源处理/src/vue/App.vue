<template>
  <div>
    <h2 class="title">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello vue',
    }
  },
}
</script>

<style>
.title {
  color: red;
}
</style>
