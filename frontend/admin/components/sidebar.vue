<template>
  <section class="bg-01 w-[200px] h-[calc(100vh-80px)] flex items-center">
    <div class="text-02 m-auto w-[150px]">
      <NuxtLink 
        v-for="{ link, icon, name } in links" 
        class="flex items-center text-base px-4 py-2 w-full my-2 hover:text-01 hover:bg-02 hover:rounded-sm transition" 
        :to="link"
        :activeClass="activeLink"
      >
        <i class="flex items-center w[18px] h-[18px] mr-2" :class=icon></i>
        <p>{{ name }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const links = ref([
  { link: "/reports", icon: "fi fi-rr-house-chimney", name: "Home" },
  { link: "/admins", icon: "fi fi-rr-admin", name: "Admins" },
  { link: "/categories", icon: "fi fi-rr-category", name: "Categories" },
  { link: "/products", icon: "fi fi-rr-box-open-full", name: "Products" },
  { link: "/orders", icon: "fi fi-rr-order-history", name: "Orders" },
  { link: "/users", icon: "fi fi-rr-users", name: "Users" },
  { link: "/reviews", icon: "fi fi-rr-feedback", name: "Reviews" },
  { link: "/policies", icon: "fi fi-rr-compliance-document", name: "Policies" }
]);
const activeLink = ref("text-01 bg-02 rounded-sm transition")

</script>
