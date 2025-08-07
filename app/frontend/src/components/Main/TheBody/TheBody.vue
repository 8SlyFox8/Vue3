<script setup>
import TheUserTable from '@/components/TheUserTable/TheUserTable.vue'
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
    <TheUserTable
        v-if="isShowUserTable"
        :users="users"
    />
</template>

<style scoped>
</style>
