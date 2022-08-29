export default class Queue<T> {
  queue = [] as T[]

  enqueue(item: T) {
    this.queue.push(item)
  }

  dequeue(): T | undefined {
    return this.queue.shift()
  }

  get size(): number {
    return this.queue.length
  }
}
