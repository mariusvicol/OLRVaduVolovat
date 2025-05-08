const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 py-4 sm:py-8">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-6">OLR Vadu Volovat - One Race Loft</h1>
        <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-8">
          Specialiști în creșterea și antrenarea porumbeilor de performanță
        </p>

        {/* Organizator Info */}
        <div className="bg-primary text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-12 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg italic mb-1 sm:mb-2">Din pasiune pentru porumbei</p>
          <div className="border-t border-white/20 pt-3 sm:pt-4">
            <p className="font-semibold">Organizator</p>
            <p className="text-base sm:text-lg">Hij Samuel</p>
            <a 
              href="tel:+40746422485" 
              className="inline-flex items-center space-x-2 mt-1 sm:mt-2 text-accent hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm sm:text-base font-medium">0746 422 485</span>
            </a>
          </div>
        </div>

        {/* Anunțuri */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-12 space-y-4 sm:space-y-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Concurs Principal 2024</h2>
              <span className="bg-primary text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm self-start sm:self-auto">15 Iunie 2024</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              Înscrierile pentru Concursul Principal sunt deschise! Premii totale de 5000€.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <span className="text-xs sm:text-sm text-gray-500">Termen limită înscrieri: 1 Iunie 2024</span>
              <a href="/competitii" className="bg-primary text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base text-center">
                Înscrie-te Acum
              </a>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Super Derby Vama Veche</h2>
              <span className="bg-primary text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm self-start sm:self-auto">30 Iunie 2024</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              Cel mai prestigios concurs al sezonului! Premii totale de 3000€ și trofee exclusive.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <span className="text-xs sm:text-sm text-gray-500">Termen limită înscrieri: 15 Iunie 2024</span>
              <a href="/competitii" className="bg-primary text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base text-center">
                Înscrie-te Acum
              </a>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Program Antrenament</h2>
              <span className="bg-primary text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm self-start sm:self-auto">În Curs</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              Program special de antrenament pentru porumbeii de performanță. Asistență tehnică și medicală inclusă.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <span className="text-xs sm:text-sm text-gray-500">Locație: OLR Vadu Volovat</span>
              <a href="/contact" className="bg-primary text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base text-center">
                Contactează-ne
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-12">
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Porumbei Noștri</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Descoperiți colecția noastră de porumbei de rasă, selecționați cu grijă pentru performanță maximă
            </p>
          </div>
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Concursuri</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Participați la concursurile noastre de One Race Loft și câștigați premii valoroase
            </p>
          </div>
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Rezultate</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Urmăriți rezultatele concursurilor și performanța porumbeilor noștri
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 sm:p-8 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Despre One Race Loft</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            OLR Vadu Volovat este un centru de excelență în domeniul creșterii și antrenării porumbeilor de performanță.
            Ne dedicăm pasiunii noastre pentru acest sport tradițional, oferind condiții optime pentru dezvoltarea
            porumbeilor noștri și organizând concursuri de înaltă calitate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Facilități</h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-600">
                <li>Hale moderne și spațioase</li>
                <li>Sistem de antrenament profesional</li>
                <li>Asistență medicală specializată</li>
                <li>Program de nutriție optimizat</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Servicii</h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-600">
                <li>Concursuri regulate</li>
                <li>Consultanță tehnică</li>
                <li>Programe de antrenament</li>
                <li>Asistență în selecția porumbeilor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home; 