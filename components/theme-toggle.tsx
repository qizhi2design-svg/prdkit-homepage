'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = mounted ? resolvedTheme : 'light'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      aria-label={currentTheme === 'dark' ? '切换到浅色模式' : '切换到深色模式'}
    >
      {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
