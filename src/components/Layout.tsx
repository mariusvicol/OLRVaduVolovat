import { Link } from 'react-router-dom'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Quick Contact Bar */}
      <div className="bg-gradient-to-r from-primary/95 to-primary/90 backdrop-blur-sm text-white py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center space-x-3 sm:space-x-8">
            <a 
              href="tel:+40746422485" 
              className="flex items-center space-x-1.5 sm:space-x-2 text-white/90 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium text-xs sm:text-base">0746 422 485</span>
            </a>
            <a 
              href="https://www.facebook.com/vaduvolovat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 sm:space-x-2 text-white/90 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
              <span className="font-medium text-xs sm:text-base">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 sm:h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-primary transition-all duration-300">
                  OLR Vadu Volovat
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300">
                Acasă
              </Link>
              <Link to="/competitii" className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300">
                Concursuri
              </Link>
              <Link to="/plan-zbor" className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300">
                Plan de Zbor
              </Link>
              <Link to="/galerie" className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300">
                Galerie
              </Link>
              <Link to="/participanti" className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300">
                Participanți
              </Link>
              <Link to="/premii" className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300">
                Premii
              </Link>
              <Link to="/contact" className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <span className="sr-only">Deschide meniul</span>
                {!isMenuOpen ? (
                  <svg className="block h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-lg mt-2">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Acasă
                </Link>
                <Link
                  to="/competitii"
                  className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Concursuri
                </Link>
                <Link
                  to="/plan-zbor"
                  className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Plan de Zbor
                </Link>
                <Link
                  to="/galerie"
                  className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galerie
                </Link>
                <Link
                  to="/participanti"
                  className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Participanți
                </Link>
                <Link
                  to="/premii"
                  className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Premii
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-3 sm:py-8 px-3 sm:px-6 lg:px-8">
        <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-3 sm:p-8">
          {children}
        </div>
      </main>

      <footer className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-100 mt-6 sm:mt-12">
        <div className="max-w-7xl mx-auto py-6 sm:py-12 px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-xs sm:text-sm">© 2024 OLR Vadu Volovat. Toate drepturile rezervate.</p>
            <p className="mt-1.5 sm:mt-3 text-gray-500 text-xs sm:text-sm">
              Adresă: OLR Vadu Volovat, Volovat, Suceava
            </p>
            <p className="mt-1 sm:mt-2 text-gray-500 text-xs sm:text-sm">
              Contact: <a href="tel:+40746422485" className="text-primary hover:text-primary/80 transition-colors duration-300">0746 422 485</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 