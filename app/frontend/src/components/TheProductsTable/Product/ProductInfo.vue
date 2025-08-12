<script setup>

const productInfoProps = defineProps(['category', 'rate', 'count'])
</script>

<template>
    <div class="productInfo">
        <p><span>Категория:</span> {{ category }}</p>
        <p><span>Рейтинг:</span> {{ rate }}</p>
        <p><span>Количество:</span> {{ count }}</p>
    </div>    
</template>

<style scoped>
.productInfo {
    display: flex;
    gap: 10px;
}
</style>
