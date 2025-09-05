import { describe, it, expect, vi } from 'vitest'
import { useProduct } from '@/hooks/useProduct'

vi.mock('vue-router', () => ({
  useRoute: () => ({
    params: {
      productId: '1'
    }
  })
}))

describe('Тестирование hook useProduct', () => {
  
  it('должен возращать товар', async() => {
    const { product, productLoading } = useProduct()
  
    while (productLoading.value) {
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    expect(product.value).toHaveProperty('category')
    expect(product.value).toHaveProperty('description')
    expect(product.value).toHaveProperty('id')
    expect(product.value).toHaveProperty('image')
    expect(product.value).toHaveProperty('price')
    expect(product.value).toHaveProperty('rating')
    expect(product.value.rating).toHaveProperty('count')
    expect(product.value.rating).toHaveProperty('rate')
    expect(product.value).toHaveProperty('title')
  })
})