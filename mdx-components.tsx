import { useMDXComponents as getNextraMDXComponents } from 'nextra/mdx-components'

export function useMDXComponents(components: Record<string, unknown> = {}) {
  const nextComponents = getNextraMDXComponents as (value: unknown) => Record<string, unknown>
  return nextComponents(components)
}
