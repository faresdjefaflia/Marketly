<template>
  <form
    @submit.prevent="click" 
    class="bg-03 m-[40px] p-[21px] overflow-hidden rounded-[6px] transition-all"
    :class="isOpen ? 'max-h-auto' : 'h-[74px] border border-01'"
  >
  <div class="flex justify-between cursor-pointer" @click="openForm">
    <p class="text-01 text-[22px]">{{ title }}</p>
    <i class="fi fi-br-angle-small-down flex items-center justify-center text-[24px] text-01"></i>
  </div>
  <slot />
  </form>
</template>

<script setup>
import { ref } from 'vue';
let isOpen = ref(false)
const openForm = () => {
  isOpen.value = !isOpen.value;
}
defineProps({
  click: {
    type: Function,
    required: true
  },
  title: String
})
</script>