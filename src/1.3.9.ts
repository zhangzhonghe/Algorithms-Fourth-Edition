import { expect, test } from 'vitest'

/**
 * 题目：编写一段程序，输入一个缺少左括号的表达式
 * 并返回补全括号之后的中序表达式。
 *
 * 例如，给定输入：
 *
 * ```
 * 1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )
 * ```
 *
 * 输出：
 *
 * ```
 * ( ( 1 + 2 ) * (( 3 - 4 ) * ( 5 - 6 ) ) )
 * ```
 */
function fixBrackets(str: string): string {
  const stack: string[] = []

  for (const item of str) {
    if (item === ')') {
      const n2 = stack.pop()
      const operator = stack.pop()
      const n1 = stack.pop()
      stack.push(`(${n1}${operator}${n2})`)
      continue
    }
    stack.push(item)
  }

  return stack.join('')
}

// 测试
test('fixBrackets', () => {
  expect(fixBrackets('1+2)*3-4)*5-6)))')).toBe('((1+2)*((3-4)*(5-6)))')
})
