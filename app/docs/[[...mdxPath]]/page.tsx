import { notFound } from 'next/navigation'
import { generateStaticParamsFor, importPage } from 'nextra/pages'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: {
  params: Promise<{
    mdxPath?: string[]
  }>
}) {
  const params = await props.params
  const mdxPath = params.mdxPath ?? []

  try {
    const { metadata } = await importPage(mdxPath)
    return metadata
  } catch {
    return {}
  }
}

export default async function DocsCatchAllPage(props: {
  params: Promise<{
    mdxPath?: string[]
  }>
}) {
  const params = await props.params
  const mdxPath = params.mdxPath ?? []

  try {
    const { default: MDXContent } = await importPage(mdxPath)
    return <MDXContent {...props} params={params} />
  } catch {
    notFound()
  }
}
