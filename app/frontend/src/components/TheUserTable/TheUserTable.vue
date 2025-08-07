<script setup>
import TheMenuUserTable from '@/components/TheUserTable/TheMenuUserTable/TheMenuUserTable.vue'
import User from '@/components/TheUserTable/User/User.vue'
import { ref } from 'vue'

const userProps = defineProps({
  users: Array
})

const isShowUserAge = ref(false)

function changeShowUserAge(show) {
    isShowUserAge.value = show
}
</script>

<template>
    <div >
        <User
            v-for="user in users"
            :key="user.id"
            :user="user"
            :isShowUserAge="isShowUserAge"
        />
        <TheMenuUserTable
            @changeShowUserAge="changeShowUserAge"
        />
    </div>   
</template>

<style scoped>
</style>
