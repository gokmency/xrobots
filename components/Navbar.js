import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">RWA Platform</Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/presale" className="hover:text-primary">Presale</Link>
            <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
            <Link href="/marketplace" className="hover:text-primary">Marketplace</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
