import { expect, test } from 'vitest'
import Node, { linkedListToArray } from './libs/LinkedList'

/**
 * 前移编码
 */
function moveToFront(list: string[]) {
  const cache: Record<string, Node<string>> = {}
  let head = new Node<string>()
  let tail = head

  list.forEach((item) => {
    if (!head.data) {
      head.data = item
      cache[item] = head
      return
    }
    if (!cache[item]) {
      const node = new Node<string>()
      node.data = item
      cache[item] = node
      node.prev = tail
      tail.next = node
      tail = node
    }
    else {
      const oldNode = cache[item]
      if (!oldNode.next)
        tail = oldNode.prev!

      if (oldNode === head)
        return

      // 先删除
      if (oldNode.prev)
        oldNode.prev.next = oldNode.next

      oldNode.prev = null
      oldNode.next = head
      head.prev = oldNode
      if (!head.next)
        tail = head
      head = oldNode
    }
  })

  return head
}

test('moveToFront', () => {
  expect(linkedListToArray(moveToFront(['a', 'b', 'c', 'd', 'e', 'f']))).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
  expect(linkedListToArray(moveToFront(['a', 'b', 'b', 'c', 'd', 'e', 'f']))).toEqual(['b', 'a', 'c', 'd', 'e', 'f'])
  expect(linkedListToArray(moveToFront(['a', 'b', 'c', 'c', 'd', 'e', 'f']))).toEqual(['c', 'a', 'b', 'd', 'e', 'f'])
  expect(linkedListToArray(moveToFront(['a', 'b', 'c', 'd', 'a', 'e', 'f']))).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
  expect(linkedListToArray(moveToFront(['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']))).toEqual(['c', 'a', 'b', 'd', 'e', 'f'])
})
