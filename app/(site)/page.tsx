import { HeroSection } from '@/components/hero-section'
import { PreviewSection } from '@/components/preview-section'
import { FeaturesSection } from '@/components/features-section'
import { useReleaseDownload } from '@/hooks/use-release-download'

export default async function HomePage() {
  const { url: downloadUrl } = await useReleaseDownload()

  return (
    <main className="marketing-page">
      <HeroSection downloadUrl={downloadUrl} />
      <PreviewSection />
      <FeaturesSection />
    </main>
  )
}
