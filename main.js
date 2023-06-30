import { test, expect } from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest'
import { sum } from './sum.js'

test('Cumulative Sum', () => {
  expect(sum(5, 10)).toBe(15)
})

