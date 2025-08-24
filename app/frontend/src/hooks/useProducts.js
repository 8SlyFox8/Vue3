import { fakestoreapi } from '@/services/api'
import { ref } from 'vue'

export function useProducts() {
    const products = ref([])
    const productsLoading = ref(false)

    async function getProducts() {
        productsLoading.value = true

        fakestoreapi.get('/products').then(
            (response) => {
                products.value = response.data
                productsLoading.value = false
            }
        ).catch(
            () => {
                alert("Данные по товарам не получены")
                productsLoading.value = false
            }
        )
    }

    getProducts()

    return { products, productsLoading }
}