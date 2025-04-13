<template>
  <input 
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)" :type=type 
    :placeholder=placeholder
    class="bg-white border border-01 w-full mt-[21px] p-[8px] focus:outline-none text-[18px] rounded-[6px]">
</template>

<script setup>
  defineProps({
    type: String,
    placeholder: String,
    modelValue: String,
  })
</script>