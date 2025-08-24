<script setup>
import TheShopMenu from '@/components/TheBigShop/TheShopMenu/TheShopMenu.vue';
import { ref, provide } from 'vue'

const checkProducts = ref([])
provide('checkProducts', checkProducts);
</script>

<template>
  <hr/>
  <TheShopMenu/>
  <RouterView/>
</template>
