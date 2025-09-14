<script setup>
import Product from '@/components/TheProductsTable/Product/Product.vue'
import { useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';

const router = useRouter()
const productsStore = useProductsStore()
const cartStore = useCartStore()

function openProduct(productId) {
    router.push({name: 'product', params: {productId: productId}})
}
</script>

<template>
    <p
        v-if="productsStore.productsLoading"
    >
        Товары загружаются ...
    </p>
    <div
        v-else
        class="product-selection"
        v-for="product in productsStore.products"  
    >
        <input
            type="checkbox"
            :value="product.id"
            v-model="cartStore.cart"
        />
        <Product
            :key="product.id"
            :product="product"
            @click="openProduct(product.id)"
        />
    </div>
</template>

<style scoped>
.product-selection {
    display: flex;
    gap: 20px;
}
</style>
