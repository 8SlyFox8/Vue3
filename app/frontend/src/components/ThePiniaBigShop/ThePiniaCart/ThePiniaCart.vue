<script setup>
import TheOrderModal from '@/components/TheShop/Modals/TheOrderModal.vue'
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue'

const productsStore = useProductsStore()
const cartStore = useCartStore()

const isVisabilityTheOrderModal = ref(false)

function openTheOrderModal() {
    isVisabilityTheOrderModal.value = true
}
</script>

<template>
    <div
        v-for="product in productsStore.products"  
    >
        <div
            v-if="cartStore.cart.includes(product.id)"
            class="product-selection"
        >
            <input
                type="checkbox"
                :value="product.id"
                v-model="cartStore.cart"
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
