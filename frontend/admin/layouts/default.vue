<template>
  <div class="page">
    <Header />
    <main class="flex">
      <Sidebar v-if="login" />
      <section class="w-full">
        <slot />
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
  
const auth = useAuthStore()
const login = computed(() => auth.login );

</script>