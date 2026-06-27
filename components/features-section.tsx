import { features } from '@/lib/features'
import { FeatureCard } from '@/components/feature-card'

export function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-section__intro">
        <p className="section-kicker">Why it feels different</p>
        <h2>不是把 AI 塞进产品流程，而是把产品流程重新整理成一套更稳定的工具链。</h2>
      </div>
      <div className="feature-cards">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}
