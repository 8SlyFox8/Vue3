<script setup>
</script>

<template>
    <div class="header">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink :to="{name: 'templates'}">Шаблоны</RouterLink>
        <RouterLink :to="{name: 'componentsAndEvents'}">Компоненты props и события</RouterLink>
        <RouterLink :to="{name: 'formsSlotsDirectives'}">Формы, слоты, директивы</RouterLink>
        <RouterLink :to="{name: 'login'}">Vue router</RouterLink>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    gap: 10px;
}
</style>