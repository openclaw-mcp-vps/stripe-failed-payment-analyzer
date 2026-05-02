export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          AI-Powered Stripe Diagnostics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Diagnose Why Your{' '}
          <span className="text-[#58a6ff]">Stripe Payments Fail</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe webhooks, let AI analyze failure patterns, and get actionable fixes to stop losing revenue to declined payments.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Fixing Failures — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">No credit card required to start. Cancel anytime.</p>

        {/* Social proof */}
        <div className="mt-12 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6">
          <div>
            <div className="text-2xl font-bold text-white">38%</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg. recovery rate improvement</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">2 min</div>
            <div className="text-xs text-[#8b949e] mt-1">Webhook setup time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">AI</div>
            <div className="text-xs text-[#8b949e] mt-1">Pattern analysis engine</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22]">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-white">Pro Plan</h2>
            <span className="bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-2 py-1 rounded-full border border-[#58a6ff]/20">Most Popular</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              'Stripe webhook integration',
              'AI failure pattern analysis',
              'Actionable fix suggestions',
              'Real-time failure dashboard',
              'Email digest of top issues',
              'Unlimited payment events',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it connect to Stripe?',
              a: 'You add a webhook endpoint URL to your Stripe dashboard. We receive payment events in real time and start analyzing immediately — no code changes needed.',
            },
            {
              q: 'What kinds of failures does it detect?',
              a: 'Card declines, insufficient funds, expired cards, fraud blocks, network errors, and more. The AI groups them by root cause and prioritizes the highest-impact fixes.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Stripe Failed Payment Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
