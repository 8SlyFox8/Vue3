import { defineStore } from 'pinia'
import { useProducts } from '@/hooks/useProducts'

export const useProductsStore = defineStore('products', () => {
    const { products, productsLoading } = useProducts()

    return { products, productsLoading }
})