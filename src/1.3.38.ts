import { expect, test } from 'vitest'
import Node from './libs/LinkedList'

/**
 * 基于数组实现的版本
 */
class ArrayVersionOfGeneralizedQueue<T> {
  queue: T[] = []

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  insert(item: T) {
    this.queue.push(item)
  }

  delete(k: number): T | null {
    return this.queue.splice(k - 1, 1)[0] || null
  }
}

/**
 * 基于链表实现的版本
 */
class LinkedListVersionOfGeneralizedQueue<T> {
  first: Node<T> = new Node<T>()
  last: Node<T> = this.first
  length = 0

  get queue(): (T | null)[] {
    const result: (T | null)[] = []
    if (this.isEmpty())
      return result

    let item = this.first
    if (item.data)
      result.push(item.data)

    while (item.next) {
      item = item.next
      result.push(item.data)
    }

    return result
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  insert(data: T) {
    if (this.isEmpty()) {
      this.first.data = data
      this.length++
      return
    }
    const newItem = new Node<T>()
    newItem.data = data
    this.last.next = newItem
    this.last = newItem
    this.length++
  }

  delete(k: number): T | null {
    if (k < 1 || k > this.length)
      return null
    if (k === 1) {
      const data = this.first.data
      this.first.data = null
      return data
    }

    let prevItem: Node<T> | null = null
    let needDeleteItem: Node<T> = this.first
    for (let i = 2; i <= this.length; i++) {
      prevItem = needDeleteItem
      needDeleteItem = needDeleteItem.next!
      if (i === k) {
        prevItem.next = needDeleteItem.next
        return needDeleteItem.data
      }
    }

    return null
  }
}

test('ArrayVersionOfGeneralizedQueue', () => {
  const queue = new ArrayVersionOfGeneralizedQueue<number>()
  queue.insert(1)
  queue.insert(2)
  queue.insert(3)
  expect(queue.queue).toEqual([1, 2, 3])

  queue.delete(2)
  expect(queue.queue).toEqual([1, 3])
})

test('LinkedListVersionOfGeneralizedQueue', () => {
  const queue = new LinkedListVersionOfGeneralizedQueue<number>()
  queue.insert(1)
  queue.insert(2)
  queue.insert(3)
  expect(queue.queue).toEqual([1, 2, 3])

  queue.delete(2)
  expect(queue.queue).toEqual([1, 3])
})
