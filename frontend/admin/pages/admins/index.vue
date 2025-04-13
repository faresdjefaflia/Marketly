<template>
  <section>
    <AdminsFormAdd />
  </section>
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
