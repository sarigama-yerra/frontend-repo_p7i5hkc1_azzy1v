import { Rocket, Star } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/U3z5c9E-Example/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700">
            <Star size={14} className="text-yellow-500" />
            AI-powered development environment
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Build full apps with your AI teammate
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Describe what you want, and watch it come to life. Design, code, and ship — all in one flow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-black inline-flex items-center gap-2">
              <Rocket size={18} /> Start building
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-50">
              Live demo
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
      </div>
    </section>
  )
}
