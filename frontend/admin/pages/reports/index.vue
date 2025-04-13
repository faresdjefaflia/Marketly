<template>
  <div>
    <h1>reports</h1>
    <NuxtLink to="/admin/addadmin">ADD AMIN</NuxtLink>
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
