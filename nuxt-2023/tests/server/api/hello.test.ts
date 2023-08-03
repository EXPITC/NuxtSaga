import { expect, test, describe } from 'vitest'
import { fetch, setup } from '@nuxt/test-utils'

describe('My test', async () => {
  await setup({
    server: true
    // test context options
  })

  test('GET /api/hello', async () => {
    const res = await fetch('/api/hello')
    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.hello).toBe('world')
  })
})
