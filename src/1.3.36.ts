import { test } from 'vitest'

/**
 * 随机迭代器
 */
function forEachRandom<T>(arr: T[], handler: (item: T) => void) {
  let n = arr.length
  for (let i = 0; i < arr.length; i++) {
    const index = getRandomNumber(0, n - 1)
    const item = arr[index]
    arr[index] = arr[n - 1]
    arr[n - 1] = item
    handler(item)
    n--
  }
}

function getRandomNumber(start: number, end: number) {
  return Math.floor(Math.random() * (end - start + 1)) + start
}

test('forEachRandom', () => {
  forEachRandom([1, 2, 3, 4, 5], (item) => {
    // eslint-disable-next-line no-console
    console.log(item)
  })
})
