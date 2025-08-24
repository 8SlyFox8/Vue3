import { fakestoreapi } from '@/services/api'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';

export function useProduct() {
    const route = useRoute();
    const productId = computed(() => route.params.productId)
    const product = ref([])
    const productLoading = ref(false)

    async function getProduct() {
        productLoading.value = true

        fakestoreapi.get('/products', {
            params: {
                id: productId.value
            }
        }).then(
            (response) => {
                product.value = response.data.find(product => product.id == productId.value)
                productLoading.value = false
            }
        ).catch(
            () => {
                alert("Данные по товару не получены")
                productLoading.value = false
            }
        )
    }

    getProduct()

    return { product, productLoading }
}