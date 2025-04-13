<template>
  <form 
    @submit.prevent="p" 
      class="bg-03 m-[40px] p-[21px] overflow-hidden rounded-[6px] transition-all"
      :class="isOpen ? 'max-h-auto' : 'h-[74px] border border-01'"
    >
    <div class="flex justify-between cursor-pointer" @click="openForm">
      <p class="text-01 text-[22px]">Add employee</p>
      <i class="fi fi-br-angle-small-down flex items-center justify-center text-[24px] text-01"></i>
    </div>

    <UiInput type="text" placeholder="Name" v-model="dataSend.name" />
    <UiInput type="email" placeholder="Email" v-model="dataSend.email" />
    <UiInput type="password" placeholder="Password" v-model="dataSend.password" />
    <button class="bg-01 w-full text-02 text-[18px] rounded-[6px] mt-[21px] p-[8px] cursor-pointer">print</button>
  </form>
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

let isOpen = ref(false)
const openForm = () => {
  isOpen.value = !isOpen.value;
}

const p = () => {
  console.log(dataSend.value)
}
</script>