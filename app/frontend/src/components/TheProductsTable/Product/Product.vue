<script setup>
import ProductInfo from '@/components/TheProductsTable/Product/ProductInfo.vue'

const productProps = defineProps(['product'])
</script>

<template>
    <div class="product-card">
        <img
            class="product-image"
            :src="product.image"
            alt="Картинка товара"
        />
        <div class="product">
            <h2>{{ product.title }}</h2>
            <ProductInfo
                :category = "product.category"
                :rate = "product.rating.rate"
                :count = "product.rating.count"
            />
            <p>{{ product.description }}</p>
            <p><span>Цена:</span> {{ product.price }}</p>
        </div>
    </div>    
</template>

<style scoped>
.product-card {
    display: flex;
    gap: 10px;
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
}

.product-image {
    min-width: 20%;
    max-width: 20%;
    height: fit-content;
}

.product {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
