const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">OLR Vadu Volovat - One Race Loft</h1>
        <p className="text-xl text-gray-600 mb-8">
          Specialiști în creșterea și antrenarea porumbeilor de performanță
        </p>

        {/* Organizator Info */}
        <div className="bg-primary text-white p-6 rounded-lg mb-12 max-w-2xl mx-auto">
          <p className="text-lg italic mb-2">Din pasiune pentru porumbei</p>
          <div className="border-t border-white/20 pt-4">
            <p className="font-semibold">Organizator</p>
            <p className="text-lg">Hij Samuel</p>
            <a 
              href="tel:+40746422485" 
              className="inline-flex items-center space-x-2 mt-2 text-accent hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">0746 422 485</span>
            </a>
          </div>
        </div>

        {/* Anunțuri */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Concurs Principal 2024</h2>
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">15 Iunie 2024</span>
            </div>
            <p className="text-gray-700 mb-4">
              Înscrierile pentru Concursul Principal sunt deschise! Premii totale de 5000€.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Termen limită înscrieri: 1 Iunie 2024</span>
              <a href="/competitii" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Înscrie-te Acum
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Super Derby Vama Veche</h2>
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">30 Iunie 2024</span>
            </div>
            <p className="text-gray-700 mb-4">
              Cel mai prestigios concurs al sezonului! Premii totale de 3000€ și trofee exclusive.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Termen limită înscrieri: 15 Iunie 2024</span>
              <a href="/competitii" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Înscrie-te Acum
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Program Antrenament</h2>
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">În Curs</span>
            </div>
            <p className="text-gray-700 mb-4">
              Program special de antrenament pentru porumbeii de performanță. Asistență tehnică și medicală inclusă.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Locație: OLR Vadu Volovat</span>
              <a href="/contact" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Contactează-ne
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Porumbei Noștri</h2>
            <p className="text-gray-600">
              Descoperiți colecția noastră de porumbei de rasă, selecționați cu grijă pentru performanță maximă
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Concursuri</h2>
            <p className="text-gray-600">
              Participați la concursurile noastre de One Race Loft și câștigați premii valoroase
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Rezultate</h2>
            <p className="text-gray-600">
              Urmăriți rezultatele concursurilor și performanța porumbeilor noștri
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Despre One Race Loft</h2>
          <p className="text-gray-600 mb-4">
            OLR Vadu Volovat este un centru de excelență în domeniul creșterii și antrenării porumbeilor de performanță.
            Ne dedicăm pasiunii noastre pentru acest sport tradițional, oferind condiții optime pentru dezvoltarea
            porumbeilor noștri și organizând concursuri de înaltă calitate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Facilități</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Hale moderne și spațioase</li>
                <li>Sistem de antrenament profesional</li>
                <li>Asistență medicală specializată</li>
                <li>Program de nutriție optimizat</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Servicii</h3>
              <ul className="list-disc list-inside text-gray-600">
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