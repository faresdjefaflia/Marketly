<template>
  <header class="bg-01 ">
    <section class="flex justify-between items-center container max-w-[90%] xl:max-w-7xl m-auto py-6">
      <NuxtLink to="/">
        <img class="w-[150px]" src="~/assets/img/Marketly.png">
      </NuxtLink>
      <div class="flex">
        <div v-if="!login" class="bg-02 text-01 flex items-center justify-center rounded-[3px] w-[30px] h-[30px] cursor-pointer">
          <i class="fi fi-rs-user flex h-[16px]"></i>
        </div>
        <div v-else @click="logout" class="bg-02 text-01 flex items-center justify-center rounded-[3px] w-[30px] h-[30px] cursor-pointer">
          <i class="fi fi-br-sign-out-alt flex h-[16px]"></i>
        </div>
      </div>
    </section>
  </header>
</template>

<script setup>
import { computed } from 'vue';

const auth = useAuthStore();
const login = computed(() => auth.login)

async function logout(){
  const token = useCookie('token');
  token.value = null;
  auth.login = false;
  await refreshNuxtData();
  await navigateTo('/login');
}
</script>