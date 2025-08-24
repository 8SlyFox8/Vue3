<script setup>
import { inject } from 'vue'

const checkProducts = inject('checkProducts')
</script>

<template>
    <div class="header">
        <RouterLink :to="{name: 'productList'}">Магазин</RouterLink>
        <RouterLink :to="{name: 'createProduct'}">Создать товар</RouterLink>
        <RouterLink :to="{name: 'cart'}">Корзина {{ checkProducts.length }}</RouterLink>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    gap: 10px;
}
</style>