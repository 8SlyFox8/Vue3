<script setup>
import { ref, inject } from 'vue'

const isShowUserTable = inject('isShowUserTable')

const buttonActionName = ref(isShowUserTable.value ? "Скрыть пользователей" : "Показать пользователей")

function changeShowUserTable() {
    isShowUserTable.value = !isShowUserTable.value
    buttonActionName.value = isShowUserTable.value ? "Скрыть пользователей" : "Показать пользователей"
}
</script>

<template>
    <div>
        <button
            @click="changeShowUserTable"
        >
            {{ buttonActionName }}
        </button>
    </div>
</template>

<style scoped>
</style>
