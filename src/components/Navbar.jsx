import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 grid place-items-center text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-gray-900">Vibe Coding</span>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <li className="hover:text-gray-900 transition-colors cursor-pointer">Features</li>
            <li className="hover:text-gray-900 transition-colors cursor-pointer">Pricing</li>
            <li className="hover:text-gray-900 transition-colors cursor-pointer">Docs</li>
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Sign in</button>
            <button className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black">Get started</button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-4">
            <a className="block text-gray-700" href="#features">Features</a>
            <a className="block text-gray-700" href="#pricing">Pricing</a>
            <a className="block text-gray-700" href="#docs">Docs</a>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-gray-900 text-white">Get started</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
