import { describe, it, expect, vi } from 'vitest'
import { router } from '@/services/router'

function findRouteByName(routes, name) {
  for (const route of routes) {
    if (route.name === name) {
      return route
    }
    if (route.children) {
      const found = findRouteByName(route.children, name)
      if (found) return found
    }
  }
  return null
}

describe('Тестирование авторизации в router', () => {
  
  it('beforeEnter должен позволить зайти на новую страницу', () => {
    const route = findRouteByName(router.options.routes, 'user')
    const beforeEnter = route?.beforeEnter

    if (beforeEnter) {
      const to = { params: { userName: 'john' } }
      const from = {}
      const next = vi.fn()

      beforeEnter(to, from, next)

      expect(next).toHaveBeenCalledWith()
    } else {
      throw new Error('Маршрут "user" не найден или у него нет beforeEnter')
    }
  })

  it('beforeEnter должен перенаправить на login, если userName отсутствует', () => {
    const route = findRouteByName(router.options.routes, 'user')
    const beforeEnter = route?.beforeEnter

    if (beforeEnter) {
      const to = { params: {} }
    const from = {}
    const next = vi.fn()

    beforeEnter(to, from, next)

    expect(next).toHaveBeenCalledWith({ name: 'login' })
    } else {
      throw new Error('Маршрут "user" не найден или у него нет beforeEnter')
    }
  })
})