import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart';
import { ref, watch } from 'vue'

export const useUserStore = defineStore('user', () => {
    const router = useRouter()
    const cartStore = useCartStore()
    const userName = ref(localStorage.getItem('userName') || '')

    watch(userName, (newValue) => {
      localStorage.setItem('userName', newValue)
    })

    function $reset() {
        userName.value = ''
        localStorage.removeItem('userName')
        cartStore.$reset()
        router.push({ name: 'piniaLogin' })
    }

    return { userName, $reset }
})