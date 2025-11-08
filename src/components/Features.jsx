import { Code, Zap, Database, Shield } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Full-stack in minutes',
    desc: 'Backend, frontend, and database scaffolding that just works.'
  },
  {
    icon: Database,
    title: 'Persistent data',
    desc: 'Built-in database so your projects save and scale.'
  },
  {
    icon: Zap,
    title: 'Live previews',
    desc: 'See your changes instantly with hot reload and shareable links.'
  },
  {
    icon: Shield,
    title: 'Safe environment',
    desc: 'Isolated sandboxes keep your experiments protected.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Everything you need to ship</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">A focused toolkit to go from idea to deploy without leaving the flow.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition-shadow bg-white">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
