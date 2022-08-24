import { expect, test } from 'vitest'

/**
 * 对一个后序表达式进行求值。
 */
function evaluatePostfix(postfix: string): number {
  const stack: string[] = []

  for (const char of postfix) {
    if (char === ' ')
      continue
    if (char === ')') {
      const operator = stack.pop()
      const n2 = stack.pop()
      const n1 = stack.pop()
      // letfBracket
      stack.pop()
      if (operator === '+')
        stack.push(String(Number(n1) + Number(n2)))
      if (operator === '-')
        stack.push(String(Number(n1) - Number(n2)))
      if (operator === '*')
        stack.push(String(Number(n1) * Number(n2)))
      if (operator === '/')
        stack.push(String(Number(n1) / Number(n2)))
      continue
    }
    stack.push(char)
  }

  return Number(stack[0])
}

test('evaluatePostfix', () => {
  expect(evaluatePostfix('(1 2 +)')).toBe(3)
  expect(evaluatePostfix('((1 2 +) ((3 4 -) (5 6 -) *) *)')).toBe(3)
  expect(evaluatePostfix('((1 2 +) ((4 3 -) (5 6 -) *) *)')).toBe(-3)
  expect(evaluatePostfix('((1 2 +) ((4 3 +) (5 6 +) *) *)')).toBe(231)
})
