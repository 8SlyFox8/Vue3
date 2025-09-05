import { mount, RouterLinkStub } from '@vue/test-utils'
import { ref } from 'vue'
import { describe, it, expect } from 'vitest'
import TheShopMenu from '@/components/TheBigShop/TheShopMenu/TheShopMenu.vue'

describe('Тест компонента корзины в меню', () => {
  it('отображает правильное количество товаров в корзине', () => {
    const checkProducts = ref([1, 2, 3])

    const wrapper = mount(TheShopMenu, {
      global: {
        provide: {
          checkProducts
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    const links = wrapper.findAllComponents(RouterLinkStub)
    const cartLink = links.find(link => link.props('to')?.name === 'cart')

    expect(cartLink).toBeTruthy()
    expect(cartLink.text()).toContain(`Корзина ${checkProducts.value.length}`)
  })
})