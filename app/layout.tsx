import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics } from '@/components/google-analytics'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family-base'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.prdkit.xyz'),
  title: {
    default: 'PRDKit',
    template: '%s | PRDKit'
  },
  description: 'PRDKit 官方网站，提供桌面版下载、精选文档与产品工作流介绍。',
  applicationName: 'PRDKit',
  keywords: ['PRDKit', '产品经理', 'PRD', '原型', 'AI 工作台', 'Desktop'],
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: 'PRDKit',
    description: '产品经理的 AI 工作台，从 PRD 到原型再到发布。',
    url: 'https://www.prdkit.xyz',
    siteName: 'PRDKit',
    locale: 'zh_CN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRDKit',
    description: '产品经理的 AI 工作台，从 PRD 到原型再到发布。'
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      }
    : undefined
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={geist.variable}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  )
}
