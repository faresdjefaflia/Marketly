<template>
  <section class="h-[calc(100vh-80px)] flex justify-center items-center">
    <form @submit.prevent="login" class="w-[400px]">
      <h1 class="bg-01 text-02 px-2 py-2 rounded-sm text-center w-[100px] m-auto">Login</h1>
      <UiError v-if="error">{{ error }}</UiError>
      <input v-model="dataLogin.email" class="block border border-01 px-2 py-2 rounded-sm bg-white w-full mt-4 focus:outline-none" type="email" placeholder="Your email">
      <input v-model="dataLogin.password" class="block border border-01 px-2 py-2 rounded-sm bg-white w-full mt-4 focus:outline-none" type="password" placeholder="Your password">
      <button class="bg-01 text-02 px-2 py-2 rounded-sm w-full mt-4 cursor-pointer" type="submit">login</button>
    </form>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  const error = ref(false)
  const config = useRuntimeConfig()
  const dataLogin = {
    email: "",
    password: ""
  }
  const login = async () => {
    try {
      const res = await $fetch(`${config.public.apiBase}/admin/login`, {
        method: 'POST',
        body: dataLogin,
        credentials: 'include'
      });
      navigateTo('/reports/')
    } catch (err) {
      error.value = err.data.message;
    }
  }
</script>