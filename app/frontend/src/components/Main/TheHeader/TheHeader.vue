<script setup>
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

const userStore = useUserStore()

const routePiniaName = computed(() => {
  return userStore.userName !== '' ? 'piniaUser' : 'piniaLogin'
})

const routeWebSocketsName = computed(() => {
  return userStore.userName !== '' ? 'piniaUser' : 'piniaLogin'
})
</script>

<template>
    <div class="header">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink :to="{name: 'templates'}">Шаблоны</RouterLink>
        <RouterLink :to="{name: 'componentsAndEvents'}">Компоненты props и события</RouterLink>
        <RouterLink :to="{name: 'formsSlotsDirectives'}">Формы, слоты, директивы</RouterLink>
        <RouterLink :to="{name: 'login'}">Vue router</RouterLink>
        <RouterLink :to="{name: routePiniaName}">Реактивные данные, MVVM и особенности Vue 3</RouterLink>
        <RouterLink :to="{name: routeWebSocketsName}">Интеграция Vue с WebSockets </RouterLink>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    gap: 10px;
}
</style>