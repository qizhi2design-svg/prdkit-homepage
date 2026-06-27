const DEFAULT_RELEASE_BASE_URL = 'https://www.prdkit.xyz'

interface ReleaseArtifact {
  name?: string
  url?: string
  size?: number
}

interface LatestReleasePayload {
  version?: string
  full?: {
    artifacts?: ReleaseArtifact[]
  }
}

function normalizeBaseUrl(baseUrl?: string): string {
  return (baseUrl || DEFAULT_RELEASE_BASE_URL).replace(/\/+$/, '')
}

function isMacArtifact(artifact: ReleaseArtifact): boolean {
  const value = `${artifact.name || ''} ${artifact.url || ''}`.toLowerCase()
  return value.includes('darwin') || value.includes('mac')
}

export async function getLatestMacDownload(): Promise<{
  url: string
  version?: string
} | null> {
  try {
    const baseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_RELEASE_BASE_URL)
    const response = await fetch(`${baseUrl}/api/releases/latest.json`, {
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      return null
    }

    const payload = (await response.json()) as LatestReleasePayload
    const artifact = payload.full?.artifacts?.find(isMacArtifact)

    if (!artifact?.url) {
      return null
    }

    return {
      url: artifact.url,
      version: payload.version
    }
  } catch {
    return null
  }
}
