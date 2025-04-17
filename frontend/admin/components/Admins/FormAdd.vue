<template>
  <UiForm
    title="Add employee"
    :click="p"
  >
    <UiInput type="text" placeholder="Name" v-model="dataSend.name" />
    <UiInput type="email" placeholder="Email" v-model="dataSend.email" />
    <UiInput type="password" placeholder="Password" v-model="dataSend.password" />
    <button class="bg-01 w-full text-02 text-[18px] rounded-[6px] mt-[21px] p-[8px] cursor-pointer">print</button>
  </UiForm>
</template>

<script setup>
import { ref } from 'vue';
let dataSend = ref(
  {
    name: '',
    email: '',
    password: ''
  }
)
const p = () => {
  console.log(dataSend.value)
}
</script>