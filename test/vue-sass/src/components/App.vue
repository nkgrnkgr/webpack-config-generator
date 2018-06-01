<template>
  <div class="app">
    <h1>Hello Vue</h1>
    <Sub message="this is sub"></Sub>
  </div>
</template>

<script>
  import Sub from "./Sub.vue";
  export default {
    name: 'app',
    components: {
      Sub
    }
  };
</script>