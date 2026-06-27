import { getLatestMacDownload } from '@/lib/releases'

const FALLBACK_URL = 'https://www.prdkit.xyz/downloads/darwin/PRDKit-1.0.0-arm64-mac.zip'

export async function useReleaseDownload(): Promise<{ url: string; version?: string }> {
  const latest = await getLatestMacDownload()
  return {
    url: latest?.url || FALLBACK_URL,
    version: latest?.version
  }
}
