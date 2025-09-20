import { ref } from 'vue'

export function useGraphProducts() {
    const products = ref([])
    const productsLoading = ref(false)

    async function getProducts() {
        productsLoading.value = true
        
        const query = `
            query {
                products {
                    id
                    title
                    price
                    description
                    images
                    category {
                        name
                    }
                }
            }
        `;

        try {
            const response = await fetch('https://api.escuelajs.co/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            })
      
            const result = await response.json()

            if (result.errors) {
                throw new Error(result.errors.map(e => e.message).join(', '))
            }

            products.value = result.data.products
        } catch (error) {
            alert("Данные по товарам не получены")
        } finally {
            productsLoading.value = false
        }
    }

    getProducts()

    return { products, productsLoading }
}