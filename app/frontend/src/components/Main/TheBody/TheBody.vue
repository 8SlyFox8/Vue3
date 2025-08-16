<script setup>
import TheUserTable from '@/components/TheUserTable/TheUserTable.vue'
import TheHeaderUserTable from '@/components/TheUserTable/TheHeaderUserTable/TheHeaderUserTable.vue'
import TheProductsTable from '@/components/TheProductsTable/TheProductsTable.vue'
import TheShop from '@/components/TheShop/TheShop.vue'
import { inject } from 'vue'

const isShowUserTable = inject('isShowUserTable')

const users = [
    {
        id: 1,
        name: "Василий",
        age: 20
    },
    {
        id: 2,
        name: "Владимир",
        age: 21
    },
    {
        id: 3,
        name: "Виктория",
        age: 22
    }
]

</script>

<template>
    <h1>Новое задание</h1>
    <TheShop/>
    <h1>Старые задания</h1>
    <TheHeaderUserTable/>
    <TheUserTable
        v-if="isShowUserTable"
        :users="users"
    />
    
    <TheProductsTable/>
</template>

<style scoped>
</style>
