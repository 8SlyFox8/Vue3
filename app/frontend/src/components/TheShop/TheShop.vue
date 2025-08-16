<script setup>
import TheShopHeader from '@/components/TheShop/TheShopHeader/TheShopHeader.vue'
import TheShopBody from '@/components/TheShop/TheShopBody/TheShopBody.vue'
import TheOrderModal from '@/components/TheShop/Modals/TheOrderModal.vue'
import TheNewProductModal from '@/components/TheShop/Modals/TheNewProductModal.vue'
import { ref } from 'vue'

const serachInput = ref('')
const isVisabilityTheOrderModal = ref(false)
const isVisabilityTheNewProductModal = ref(false)
const checkProducts = ref([])
</script>

<template>
    <TheShopHeader
        v-model="serachInput"
        v-model:isVisabilityTheOrderModal="isVisabilityTheOrderModal"
        v-model:isVisabilityTheNewProductModal="isVisabilityTheNewProductModal"
    />
    <TheShopBody
        :serachInput="serachInput"
        v-model:checkProducts="checkProducts"
    />
    <TheOrderModal
        v-if="isVisabilityTheOrderModal"
        :checkProducts="checkProducts"
        v-model:isVisabilityTheOrderModal="isVisabilityTheOrderModal"
    />
    <TheNewProductModal
        v-if="isVisabilityTheNewProductModal"
        v-model:isVisabilityTheNewProductModal="isVisabilityTheNewProductModal"
    />
</template>

<style scoped>
</style>
