const Regulament = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        Regulament 2025
      </h1>
      <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"></div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 p-6 sm:p-8 space-y-10">
        <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Predare Porumbei: 1 Martie – 31 Mai
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg"><strong className="text-primary">Taxa de întreținere:</strong> 60 EURO/porumbel. Se poate participa cu:</p>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                2 porumbei individuali
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Echipă de <strong className="text-primary">5 porumbei + 1 gratis</strong> – 250 EURO (ofertă pentru primele 100 de echipe achitate)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Restul echipelor: <strong className="text-primary">5+1 gratis</strong> – 300 EURO
              </li>
            </ul>
            <p className="text-lg mt-6"><strong className="text-primary">Beneficii suplimentare:</strong></p>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Crescătorii cu 3 echipe primesc <strong className="text-primary">încă 2 porumbei gratis</strong>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Taxa de activare: <strong className="text-primary">70 EURO</strong> după ultimul antrenament de 100 km (îmbarcare manuală și transmisă live)
              </li>
            </ul>
            <p className="mt-6 text-lg">Plata se face în conturile menționate. Porumbeii pot fi aduși fără limită. Curs valutar: <strong className="text-primary">5 lei/euro</strong></p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Condiții pentru Porumbei
          </h2>
          <ul className="list-none space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Vaccinare obligatorie împotriva paramixovirozei
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Predare însoțită de pedigree și taloane de proprietate (sigilate până după etapa finală)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Inele din 2025 și senzor inclus
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Înregistrare în maximum 5 zile de la primire
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Inelele vor fi sigilate cu sticker
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            Îmbarcările antrenamentelor și concursurilor pot fi urmărite live pe{' '}
            <a href="https://www.facebook.com/vaduvolovat/?locale=ro_RO" className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium">
              Facebook
            </a>{' '}
            și prin <strong className="text-primary">Benzing Live</strong>
          </p>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            Modificări în caz de condiții meteo nefavorabile
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg">Organizatorul poate modifica data antrenamentelor și concursurilor. Se pot introduce antrenamente suplimentare între etape, dacă este necesar.</p>
            <p className="text-lg"><strong className="text-primary">Organizatorul asigură:</strong></p>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Hrana adecvată
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Tratamente și vaccinări (inclusiv împotriva adeno-coli și paramixovirozei)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Antrenamente și securitate pentru porumbeii angajați
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            Premiere și Inventar
          </h2>
          <div className="space-y-4 text-gray-600">
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <strong className="text-primary">Inventar:</strong> 3 iunie 2025
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Porumbeii lipsă pot fi înlocuiți gratuit în anul următor
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Porumbeii neachitați devin proprietatea columbodromului
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <strong className="text-primary">Calcul AS:</strong> Sistem Benzing Live (media timpului în aer)
              </li>
            </ul>
            <p className="text-lg mt-6">Toți porumbeii sosiți la etapa finală și Derby vor fi vânduți prin licitație online:</p>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Crescătorul primește <strong className="text-primary">40%</strong>, OLR-ul <strong className="text-primary">40%</strong>, site-ul <strong className="text-primary">20%</strong>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Fără pedigree, porumbelul nu intră în licitație
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Porumbeii nevânduți pot fi răscumpărați de proprietar pentru <strong className="text-primary">150 RON</strong> în 5 zile
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Super Derby Vama Veche
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg">La 2 săptămâni după finală se organizează un Derby (496 km, granița cu Bulgaria).</p>
            <p className="text-lg"><strong className="text-primary">Participare:</strong></p>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Primii <strong className="text-primary">5</strong> porumbei din semifinală nu participă
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Primii <strong className="text-primary">20</strong> din finală și primii <strong className="text-primary">10 AS</strong> nu participă
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Restul porumbeilor din finală pot fi activați de proprietari
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Porumbeii neactivați pot fi activați de alte persoane
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <strong className="text-primary">Minim 150</strong> porumbei activați necesari pentru organizare
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Taxă activare: <strong className="text-primary">50 EURO/porumbel</strong> (nominalizare serie)
              </li>
            </ul>
            <p className="text-lg mt-6">Premiile sunt calculate pentru <strong className="text-primary">1500 porumbei activați</strong>. Se ajustează proporțional în funcție de numărul final de participanți.</p>
            <p className="text-lg"><strong className="text-primary">Toate premiile vor fi impozitate conform legislației!</strong></p>
          </div>
        </section>

        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-center border border-primary/20">
          <p className="text-xl font-semibold text-primary">
            Vă mulțumim și vă așteptăm cu drag!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Regulament; 