export default class Node<T> {
  data: T | null = null
  next: Node<T> | null = null
  prev: Node<T> | null = null
}

export function linkedListToArray<T>(head: Node<T>) {
  const result: T[] = []
  if (!head.data)
    return result
  result.push(head.data)
  while (head.next) {
    head = head.next
    result.push(head.data!)
  }
  return result
}
