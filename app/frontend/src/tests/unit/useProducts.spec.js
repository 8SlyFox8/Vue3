import { describe, it, expect } from 'vitest'
import { useProducts } from '@/hooks/useProducts'

describe('Тестирование hook useProducts', () => {
  
  it('должен возращать список товаров', async() => {
    const { products, productsLoading } = useProducts()
  
    while (productsLoading.value) {
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    expect(products.value.length).toBeGreaterThan(0)
    expect(products.value[0]).toHaveProperty('category')
    expect(products.value[0]).toHaveProperty('description')
    expect(products.value[0]).toHaveProperty('id')
    expect(products.value[0]).toHaveProperty('image')
    expect(products.value[0]).toHaveProperty('price')
    expect(products.value[0]).toHaveProperty('rating')
    expect(products.value[0].rating).toHaveProperty('count')
    expect(products.value[0].rating).toHaveProperty('rate')
    expect(products.value[0]).toHaveProperty('title')
  })
})