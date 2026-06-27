'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function GoogleAnalyticsPageView({ measurementId }: Readonly<{ measurementId: string }>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const queryString = searchParams.toString()
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname

    window.gtag?.('config', measurementId, {
      page_path: pagePath
    })
  }, [measurementId, pathname, searchParams])

  return null
}

export function GoogleAnalytics({
  measurementId
}: Readonly<{
  measurementId?: string
}>) {
  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView measurementId={measurementId} />
      </Suspense>
    </>
  )
}
