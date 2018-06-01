<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'sub',
    props: ['message'],
  };
</script>

<style scoped>
  h2 {
    color: blue;
  }
</style>