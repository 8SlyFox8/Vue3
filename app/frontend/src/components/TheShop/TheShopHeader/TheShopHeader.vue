<script setup>
const serachInput = defineModel()
const isVisabilityTheOrderModal = defineModel('isVisabilityTheOrderModal')
const isVisabilityTheNewProductModal = defineModel('isVisabilityTheNewProductModal')

function openTheOrderModal() {
    isVisabilityTheOrderModal.value = true
}

function openTheNewProductModal() {
    isVisabilityTheNewProductModal.value = true
}
</script>

<template>
    <p>Поиск</p>
    <input
        type="text"
        v-model="serachInput"
    />
    <button
        @click="openTheOrderModal"
    >
        Оформить заказ
    </button>
    <button
        @click="openTheNewProductModal"
    >
        Добавить товар
    </button>
</template>

<style scoped>
</style>
