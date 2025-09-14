import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cart = ref([])

    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        try {
            cart.value = JSON.parse(storedCart)
        } catch {
            cart.value = []
        }
    }

    watch(cart, (newValue) => {
        localStorage.setItem('cart', JSON.stringify(newValue))
    }, { deep: true })

    function toggleProductInCart(productId) {
        const index = cart.value.indexOf(productId)
            if (index === -1) {
        cart.value.push(productId)
        } else {
            cart.value.splice(index, 1)
        }
    }

    function $reset() {
        cart.value = []
        localStorage.removeItem('cart')
    }

    return { cart, toggleProductInCart, $reset }
})