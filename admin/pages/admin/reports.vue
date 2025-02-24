<template>
  <div>
    <h1>reports</h1>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'auth',
  ],
});
</script>
