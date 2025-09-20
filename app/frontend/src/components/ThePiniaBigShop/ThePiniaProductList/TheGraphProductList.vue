<script setup>
import GraphProduct from '@/components/TheProductsTable/Product/GraphProduct.vue'
import { useRouter } from 'vue-router'
import { useGraphProducts } from '@/hooks/useGraphProducts';
import { io } from 'socket.io-client'
import { useCart } from '@/hooks/useCart'

const router = useRouter()
const { products, productsLoading } = useGraphProducts()

const socket = io('ws://localhost:8000')
const { cart, setCart, getCart, requestMaxCart } = useCart(socket)

function openProduct(productId) {
  router.push({ name: 'product', params: { productId } })
}

function fetchMaxCart() {
  requestMaxCart()
}
</script>

<template>
    <button @click="fetchMaxCart">Получить максимальную корзину</button>
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
            v-model="cart.cart.cart"
            @change="setCart(product.id)"
        />
        <GraphProduct
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
