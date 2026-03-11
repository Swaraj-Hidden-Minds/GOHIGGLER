import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold text-slate-200 font-be-vietnam-pro">404</h1>
      <div className="mt-[-2rem]">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-be-vietnam-pro">Page Not Found</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto font-be-vietnam-pro">
          Oops! The page you are looking for might have been moved, deleted, or never existed in the first place.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-be-vietnam-pro"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
