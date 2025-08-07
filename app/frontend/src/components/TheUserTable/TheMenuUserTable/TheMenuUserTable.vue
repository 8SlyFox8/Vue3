<script setup>
const emit = defineEmits(['changeShowUserAge'])

function showUserAge() {
    emit('changeShowUserAge', true)
}

function hideUserAge() {
    emit('changeShowUserAge', false)
}
</script>

<template>
  <div class="menuUserTable">
    <button
        @click="showUserAge"
    >
        Показать возраст
    </button>
    <button
        @click="hideUserAge"
    >
        Скрыть возраст
    </button>
  </div>
</template>

<style scoped>
.menuUserTable {
    display: flex;
}
</style>
