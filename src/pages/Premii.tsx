const Premii = () => {
  return (
    <div className="max-w-5xl mx-auto px-3 py-4 sm:py-12">
      <div className="text-center mb-6 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold text-primary mb-2 sm:mb-4">Premii</h1>
        <p className="text-gray-600 text-sm sm:text-lg">Descoperă premiile pentru fiecare categorie de concurs</p>
      </div>

      {/* Finala */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-8 mb-6 sm:mb-12 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center mb-4 sm:mb-8">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-2 sm:mr-4">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-primary">Finala</h2>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-8 rounded-lg sm:rounded-xl shadow-sm">
          <ul className="space-y-2 sm:space-y-4">
            {[
              { loc: 1, premiu: '7500 €', type: 'individual' },
              { loc: 2, premiu: '5500 €', type: 'individual' },
              { loc: 3, premiu: '4000 €', type: 'individual' },
              { loc: 4, premiu: '3000 €', type: 'individual' },
              { loc: 5, premiu: '2500 €', type: 'individual' },
              { loc: 6, premiu: '1500 €', type: 'individual' },
              { loc: 7, premiu: '1300 €', type: 'individual' },
              { loc: 8, premiu: '1200 €', type: 'individual' },
              { loc: 9, premiu: '1200 €', type: 'individual' },
              { loc: 10, premiu: '1200 €', type: 'individual' },
              { loc: 11, premiu: '900 €', type: 'individual' },
              { loc: 12, premiu: '900 €', type: 'individual' },
              { loc: 13, premiu: '800 €', type: 'individual' },
              { loc: 14, premiu: '800 €', type: 'individual' },
              { loc: 15, premiu: '800 €', type: 'individual' },
              { loc: '16-20', premiu: '650 €', type: 'category' },
              { loc: '21-30', premiu: '500 €', type: 'category' },
              { loc: '31-40', premiu: '300 €', type: 'category' },
              { loc: '41-50', premiu: '300 €', type: 'category' },
              { loc: '51-70', premiu: '200 €', type: 'category' },
              { loc: '71-100', premiu: 'Un porumbel gratis sezonul următor', type: 'category' }
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-between group hover:bg-white/50 p-1.5 sm:p-2 rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className={`w-8 h-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mr-2 sm:mr-5 text-sm sm:text-xl font-bold ${
                    index < 3 ? 'bg-primary text-white' : 
                    index < 15 ? 'bg-primary/20 text-primary' : 
                    'bg-gray-200 text-gray-700'
                  }`}>
                    {item.loc}
                  </span>
                  <span className="text-gray-700 text-sm sm:text-xl">
                    {item.type === 'category' ? `Categoria ${item.loc}` : `Locul ${item.loc}`}
                  </span>
                </div>
                <span className="font-bold text-primary text-sm sm:text-xl group-hover:text-primary/80 transition-colors">
                  {item.premiu}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Semi-Finala */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-8 mb-6 sm:mb-12 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center mb-4 sm:mb-8">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-2 sm:mr-4">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-primary">Semi-Finala</h2>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-8 rounded-lg sm:rounded-xl shadow-sm max-w-2xl mx-auto">
          <ul className="space-y-2 sm:space-y-4">
            {[
              { loc: 1, premiu: '900 €' },
              { loc: 2, premiu: '800 €' },
              { loc: 3, premiu: '700 €' },
              { loc: 4, premiu: '500 €' },
              { loc: 5, premiu: '400 €' },
              { loc: '6-10', premiu: '150 €' }
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-between group hover:bg-white/50 p-1.5 sm:p-2 rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className={`w-8 h-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mr-2 sm:mr-5 text-sm sm:text-xl font-bold ${
                    index < 3 ? 'bg-primary text-white' : 'bg-primary/20 text-primary'
                  }`}>
                    {item.loc}
                  </span>
                  <span className="text-gray-700 text-sm sm:text-xl">Locul {item.loc}</span>
                </div>
                <span className="font-bold text-primary text-sm sm:text-xl group-hover:text-primary/80 transition-colors">
                  {item.premiu}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* AS */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-8 mb-6 sm:mb-12 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center mb-4 sm:mb-8">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-2 sm:mr-4">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-primary">AS</h2>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-8 rounded-lg sm:rounded-xl shadow-sm max-w-2xl mx-auto">
          <ul className="space-y-2 sm:space-y-4">
            {[
              { loc: 1, premiu: '1200 €' },
              { loc: 2, premiu: '1100 €' },
              { loc: 3, premiu: '900 €' },
              { loc: 4, premiu: '500 €' },
              { loc: 5, premiu: '400 €' },
              { loc: '6-10', premiu: '200 €' }
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-between group hover:bg-white/50 p-1.5 sm:p-2 rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className={`w-8 h-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mr-2 sm:mr-5 text-sm sm:text-xl font-bold ${
                    index < 3 ? 'bg-primary text-white' : 'bg-primary/20 text-primary'
                  }`}>
                    {item.loc}
                  </span>
                  <span className="text-gray-700 text-sm sm:text-xl">Locul {item.loc}</span>
                </div>
                <span className="font-bold text-primary text-sm sm:text-xl group-hover:text-primary/80 transition-colors">
                  {item.premiu}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* H.S. 1, H.S. 2, H.S. 3 */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-8 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center mb-4 sm:mb-8">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-2 sm:mr-4">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-primary">H.S. 1, H.S. 2, H.S. 3</h2>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-8 rounded-lg sm:rounded-xl shadow-sm max-w-2xl mx-auto">
          <p className="text-gray-600 mb-3 sm:mb-6 text-center italic text-xs sm:text-base">Premii identice pentru toate cele trei categorii</p>
          <ul className="space-y-2 sm:space-y-4">
            {[
              { loc: 1, premiu: '100 €' },
              { loc: 2, premiu: '100 €' },
              { loc: 3, premiu: '100 €' },
              { loc: 4, premiu: '100 €' },
              { loc: 5, premiu: '100 €' },
              { loc: '6-10', premiu: 'Un porumbel gratis sezonul următor' }
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-between group hover:bg-white/50 p-1.5 sm:p-2 rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className={`w-8 h-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mr-2 sm:mr-5 text-sm sm:text-xl font-bold ${
                    index < 3 ? 'bg-primary text-white' : 'bg-primary/20 text-primary'
                  }`}>
                    {item.loc}
                  </span>
                  <span className="text-gray-700 text-sm sm:text-xl">Locul {item.loc}</span>
                </div>
                <span className="font-bold text-primary text-sm sm:text-xl group-hover:text-primary/80 transition-colors">
                  {item.premiu}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Premii; 