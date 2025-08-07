<script setup>
import TheHeader from '@/components/Main/TheHeader/TheHeader.vue'
import TheBody from '@/components/Main/TheBody/TheBody.vue'
import { ref, provide } from 'vue'

const isShowUserTable = ref(true)
provide('isShowUserTable', isShowUserTable)
</script>

<template>
  <TheHeader/>
  <TheBody/>
</template>

<style scoped>
</style>
