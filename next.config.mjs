import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/docs',
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: []
  }
})

export default withNextra({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})
