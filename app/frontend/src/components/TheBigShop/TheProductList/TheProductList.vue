<script setup>
import Product from '@/components/TheProductsTable/Product/Product.vue'
import { useProducts } from '@/hooks/useProducts'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { products, productsLoading } = useProducts()

const checkProducts = inject('checkProducts')

function openProduct(productId) {
    router.push({name: 'product', params: {productId: productId}})
}
</script>

<template>
    <p
        v-if="productsLoading"
    >
        Товары загружаются ...
    </p>
    <div
        v-else
        class="product-selection"
        v-for="product in products"  
    >
        <input
            type="checkbox"
            :value="product.id"
            v-model="checkProducts"
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
