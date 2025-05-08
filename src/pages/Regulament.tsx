const Regulament = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Regulament 2025</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Predare Porumbei: 1 Martie – 31 Mai</h2>
          <div className="space-y-4 text-gray-600">
            <p><strong>Taxa de întreținere:</strong> 60 EURO/porumbel. Se poate participa cu:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>2 porumbei individuali</li>
              <li>Echipă de <strong>5 porumbei + 1 gratis</strong> – 250 EURO (ofertă pentru primele 100 de echipe achitate)</li>
              <li>Restul echipelor: <strong>5+1 gratis</strong> – 300 EURO</li>
            </ul>
            <p><strong>Beneficii suplimentare:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>Crescătorii cu 3 echipe primesc <strong>încă 2 porumbei gratis</strong></li>
              <li>Taxa de activare: <strong>70 EURO</strong> după ultimul antrenament de 100 km (îmbarcare manuală și transmisă live)</li>
            </ul>
            <p>Plata se face în conturile menționate. Porumbeii pot fi aduși fără limită. Curs valutar: <strong>5 lei/euro</strong></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Condiții pentru Porumbei</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Vaccinare obligatorie împotriva paramixovirozei</li>
            <li>Predare însoțită de pedigree și taloane de proprietate (sigilate până după etapa finală)</li>
            <li>Inele din 2025 și senzor inclus</li>
            <li>Înregistrare în maximum 5 zile de la primire</li>
            <li>Inelele vor fi sigilate cu sticker</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Îmbarcările antrenamentelor și concursurilor pot fi urmărite live pe{' '}
            <a href="https://www.facebook.com/vaduvolovat/?locale=ro_RO" className="text-primary hover:underline">
              Facebook
            </a>{' '}
            și prin <strong>Benzing Live</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Modificări în caz de condiții meteo nefavorabile</h2>
          <div className="space-y-4 text-gray-600">
            <p>Organizatorul poate modifica data antrenamentelor și concursurilor. Se pot introduce antrenamente suplimentare între etape, dacă este necesar.</p>
            <p><strong>Organizatorul asigură:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>Hrana adecvată</li>
              <li>Tratamente și vaccinări (inclusiv împotriva adeno-coli și paramixovirozei)</li>
              <li>Antrenamente și securitate pentru porumbeii angajați</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Premiere și Inventar</h2>
          <div className="space-y-4 text-gray-600">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Inventar:</strong> 3 iunie 2025</li>
              <li>Porumbeii lipsă pot fi înlocuiți gratuit în anul următor</li>
              <li>Porumbeii neachitați devin proprietatea columbodromului</li>
              <li><strong>Calcul AS:</strong> Sistem Benzing Live (media timpului în aer)</li>
            </ul>
            <p>Toți porumbeii sosiți la etapa finală și Derby vor fi vânduți prin licitație online:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Crescătorul primește <strong>40%</strong>, OLR-ul <strong>40%</strong>, site-ul <strong>20%</strong></li>
              <li>Fără pedigree, porumbelul nu intră în licitație</li>
              <li>Porumbeii nevânduți pot fi răscumpărați de proprietar pentru <strong>150 RON</strong> în 5 zile</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Super Derby Vama Veche</h2>
          <div className="space-y-4 text-gray-600">
            <p>La 2 săptămâni după finală se organizează un Derby (496 km, granița cu Bulgaria).</p>
            <p><strong>Participare:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>Primii <strong>5</strong> porumbei din semifinală nu participă</li>
              <li>Primii <strong>20</strong> din finală și primii <strong>10 AS</strong> nu participă</li>
              <li>Restul porumbeilor din finală pot fi activați de proprietari</li>
              <li>Porumbeii neactivați pot fi activați de alte persoane</li>
              <li><strong>Minim 150</strong> porumbei activați necesari pentru organizare</li>
              <li>Taxă activare: <strong>50 EURO/porumbel</strong> (nominalizare serie)</li>
            </ul>
            <p>Premiile sunt calculate pentru <strong>1500 porumbei activați</strong>. Se ajustează proporțional în funcție de numărul final de participanți.</p>
            <p><strong>Toate premiile vor fi impozitate conform legislației!</strong></p>
          </div>
        </section>

        <div className="mt-8 p-4 bg-light rounded-lg text-center">
          <p className="text-lg font-semibold text-primary">
            Vă mulțumim și vă așteptăm cu drag!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Regulament; 