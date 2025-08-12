<script setup>
import {ref} from 'vue'

const borderColor = ref("black")

const userProps = defineProps(['user', 'isShowUserAge'])

function selectUser() {
    borderColor.value = "red"
}

function removeSelectionUser() {
    borderColor.value = "black"
}
</script>

<template>
    <div
        class="user"
        @mouseover="selectUser"
        @mouseout="removeSelectionUser"
    >
        <div>
            {{ userProps.user.name }}
        </div>
        <div v-show="isShowUserAge">
            {{ userProps.user.age }}
        </div>
    </div>    
</template>

<style scoped>
.user {
    display: flex;
    gap: 10px;
    border: 1px solid v-bind(borderColor);
    padding: 5px;
    margin: 5px;
}
</style>
