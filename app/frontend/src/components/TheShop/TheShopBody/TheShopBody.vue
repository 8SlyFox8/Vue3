<script setup>
import Product from '@/components/TheProductsTable/Product/Product.vue'
import { fakestoreapi } from '@/services/api'
import { ref } from 'vue'

const shopBodyProps = defineProps(['serachInput'])

const checkProducts = defineModel('checkProducts')

const products = ref([])

function getProducts() {
    fakestoreapi.get('/products').then(
        (response) => {
            products.value = response.data
        }
    ).catch(
        () => {
            alert("Данные по товарам не получены")
        }
    )
}

function checkVisability(product) {
    if(shopBodyProps.serachInput == '') {
        return true
    }

    if(product && product.title && product.price) {
        return product.title.includes(shopBodyProps.serachInput) || String(product.price).includes(shopBodyProps.serachInput)
    }

    return false
}

getProducts()
</script>

<template>
    <div
        class="product-selection"
        v-for="product in products" 
        v-show="checkVisability(product)"   
    >
        <input
            type="checkbox"
            :value="product.id"
            v-model="checkProducts"
        />
        <Product
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<style scoped>
.product-selection {
    display: flex;
    gap: 20px;
}
</style>
