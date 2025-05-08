const Regulament = () => {
  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        Regulament 2025
      </h1>
      <div className="h-1 w-16 sm:w-24 bg-primary mx-auto mb-6 sm:mb-8 rounded-full"></div>

      <div className="space-y-6 sm:space-y-10">
        <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 flex items-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Predare Porumbei: 1 Martie – 31 Mai
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg"><strong className="text-primary">Taxa de întreținere:</strong> 60 EURO/porumbel. Se poate participa cu:</p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                2 porumbei individuali
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Echipă de <strong className="text-primary mx-1">5 porumbei + 1 gratis</strong> – 250 EURO (ofertă pentru primele 100 de echipe achitate)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Restul echipelor: <strong className="text-primary mx-1">5+1 gratis</strong> – 300 EURO
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4 sm:mt-6"><strong className="text-primary">Beneficii suplimentare:</strong></p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Crescătorii cu 3 echipe primesc <strong className="text-primary mx-1">încă 2 porumbei gratis</strong>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Taxa de activare: <strong className="text-primary mx-1">70 EURO</strong> după ultimul antrenament de 100 km (îmbarcare manuală și transmisă live)
              </li>
            </ul>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg">Plata se face în conturile menționate. Porumbeii pot fi aduși fără limită. Curs valutar: <strong className="text-primary mx-1">5 lei/euro</strong></p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 flex items-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            Modificări în caz de condiții meteo nefavorabile
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg">Organizatorul poate modifica data antrenamentelor și concursurilor. Se pot introduce antrenamente suplimentare între etape, dacă este necesar.</p>
            <p className="text-base sm:text-lg"><strong className="text-primary">Organizatorul asigură:</strong></p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Hrana adecvată
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Tratamente și vaccinări (inclusiv împotriva adeno-coli și paramixovirozei)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Antrenamente și securitate pentru porumbeii angajați
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 flex items-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            Premiere și Inventar
          </h2>
          <div className="space-y-3 sm:space-y-4 text-gray-600">
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                <strong className="text-primary">Inventar:</strong> 3 iunie 2025
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Porumbeii lipsă pot fi înlocuiți gratuit în anul următor
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Porumbeii neachitați devin proprietatea columbodromului
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                <strong className="text-primary">Calcul AS:</strong> Sistem Benzing Live (media timpului în aer)
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4 sm:mt-6">Toți porumbeii sosiți la etapa finală și Derby vor fi vânduți prin licitație online:</p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                <strong className="text-primary">Locul 1:</strong> 50% din suma de licitație
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                <strong className="text-primary">Locul 2:</strong> 30% din suma de licitație
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                <strong className="text-primary">Locul 3:</strong> 20% din suma de licitație
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 flex items-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Super Derby Vama Veche
          </h2>
          <div className="space-y-3 sm:space-y-4 text-gray-600">
            <p className="text-base sm:text-lg">La 2 săptămâni după finală se organizează un Derby (496 km, granița cu Bulgaria).</p>
            <p className="text-base sm:text-lg"><strong className="text-primary">Participare:</strong></p>
            <ul className="list-none space-y-2 sm:space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Primii <strong className="text-primary mx-1">5</strong> porumbei din semifinală nu participă
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Primii <strong className="text-primary mx-1">20</strong> din finală și primii <strong className="text-primary mx-1">10 AS</strong> nu participă
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Restul porumbeilor din finală pot fi activați de proprietari
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                Porumbeii neactivați pot fi activați de alte persoane
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Regulament; 