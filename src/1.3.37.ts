import { expect, test } from 'vitest'
import Queue from './libs/Queue'

function josephusExemple(N: number, M: number) {
  const result: number[] = []
  if (N <= 0 || M <= 0)
    return

  if (N === 1)
    return result.push(0)

  if (M === 1) {
    for (let i = 0; i < N; i++)
      result.push(i)

    return
  }

  const queue = new Queue<number>()

  for (let i = 0; i < N; i++)
    queue.enqueue(i)

  let i = 1
  while (queue.size) {
    const item = queue.dequeue()!
    if (i === M) {
      result.push(item)
      i = 1
      continue
    }
    queue.enqueue(item)
    i++
  }

  return result
}

test('josephusExemple', () => {
  expect(josephusExemple(7, 2)).toEqual([1, 3, 5, 0, 4, 2, 6])
})
