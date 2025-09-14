<script setup>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const router = useRouter()
const userStore = useUserStore()

watch(
    () => userStore.userName,
    (newValue) => {
        if (newValue === '') {
            router.push({name: 'piniaLogin'})
        }
    }
);

function logout() {
    userStore.$reset()
}
</script>

<template>
    <div class="header">
        <RouterLink :to="{name: 'piniaProductList'}">Магазин</RouterLink>
        <RouterLink :to="{name: 'createPiniaProduct'}">Создать товар</RouterLink>
        <RouterLink :to="{name: 'piniaCart'}">Корзина</RouterLink>
        <p>Пользователь: {{ userStore.userName }}</p>
        <button
            @click="logout"
        >
            Выйти
        </button>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    gap: 10px;
}
</style>