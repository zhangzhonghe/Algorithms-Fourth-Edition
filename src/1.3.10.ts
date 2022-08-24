import { expect, test } from 'vitest'

/**
 * 将算数表达式由中序表达式转换为后序表达式。
 *
 * 中序表达式是这样的：
 * ```
 * (1 + 2)
 * ```
 * 后序表达式是这样的：
 * ```
 * (1 2 +)
 * ```
 */
function infixToPostfix(infix: string): string {
  const stack: string[] = []

  for(const char of infix) {
    if (char === ' ') {
      continue
    }
    if (char === ')') {
      const n2 = stack.pop()
      const operator = stack.pop()
      const n1 = stack.pop()
      const letfBracket = stack.pop()
      stack.push(`${letfBracket}${n1} ${n2} ${operator})`)
      continue
    }
    stack.push(char)
  }

  return stack[0]
}

test('infixToPostfix', () => {
  expect(infixToPostfix('(1 + 2)')).toBe('(1 2 +)')
  expect(infixToPostfix('((1+2)*((3-4)*(5-6)))')).toBe('((1 2 +) ((3 4 -) (5 6 -) *) *)')
})