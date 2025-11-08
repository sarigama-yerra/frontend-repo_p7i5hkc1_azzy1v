export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Vibe Coding. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}
