import { useCartStore } from '@/stores/cart';
import { onMounted, onUnmounted } from 'vue'

export function useCart(socket) {
  const cartStore = useCartStore()

  function handleCartSetting(payload) {
    if (payload && payload.cart) {
      cartStore.cart = payload.cart
    }
  }

  function setCart() {
    socket.emit('cart-setting', { cart: cartStore.cart })
  }

  function getCart() {
    socket.emit('cart-getting')
  }

  function requestMaxCart() {
    socket.emit('request-max-cart')
  }

  onMounted(() => {
    socket.on('cart-setting', handleCartSetting)
  })

  onUnmounted(() => {
    socket.off('cart-setting', handleCartSetting)
  })

  return {
    cart: cartStore,
    setCart,
    getCart,
    requestMaxCart
  }
}