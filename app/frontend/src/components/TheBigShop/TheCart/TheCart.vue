<script setup>
import TheOrderModal from '@/components/TheShop/Modals/TheOrderModal.vue'
import { useProducts } from '@/hooks/useProducts'
import { inject, ref } from 'vue'

const { products, productsLoading } = useProducts()

const checkProducts = inject('checkProducts')

const isVisabilityTheOrderModal = ref(false)

function openTheOrderModal() {
    isVisabilityTheOrderModal.value = true
}
</script>

<template>
    <p
        v-if="productsLoading"
    >
        Корзина с товарами загружается ...
    </p>
    <div
        v-else
        v-for="product in products"  
    >
        <div
            v-if="checkProducts.includes(product.id)"
            class="product-selection"
        >
            <input
                type="checkbox"
                :value="product.id"
                v-model="checkProducts"
            />
            <p
                :key="product.id"
            >
                {{ product.title }}
            </p>
        </div>
        
    </div>
    <button
        @click="openTheOrderModal"
    >
        Оформить заказ
    </button>
    <TheOrderModal
        v-if="isVisabilityTheOrderModal"
        :checkProducts="checkProducts"
        v-model:isVisabilityTheOrderModal="isVisabilityTheOrderModal"
    />
</template>

<style scoped>
.product-selection {
    display: flex;
    gap: 20px;
}
</style>
