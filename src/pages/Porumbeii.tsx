export default function Porumbeii() {
  // Placeholder pentru porumbei - acestea vor fi înlocuite cu date reale
  const porumbei = [
    {
      id: 1,
      nume: 'Speedy',
      rasa: 'Belgian Racing Pigeon',
      varsta: '2 ani',
      performante: [
        'Locul 1 - Concurs Regional 2023',
        'Locul 2 - Derby Național 2023'
      ],
      caracteristici: [
        'Viteză excepțională',
        'Rezistență la distanțe lungi',
        'Orientare excelentă'
      ]
    },
    {
      id: 2,
      nume: 'Thunder',
      rasa: 'Dutch Racing Pigeon',
      varsta: '3 ani',
      performante: [
        'Locul 1 - Derby Internațional 2024',
        'Locul 3 - Concurs Național 2023'
      ],
      caracteristici: [
        'Putere fizică remarcabilă',
        'Adaptabilitate la condiții meteo',
        'Constanță în performanță'
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Porumbeii Noștri</h1>

      {/* Informații Generale */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Despre Porumbeii de Curse</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Caracteristici Principale</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Viteză medie de zbor: 60-80 km/h</li>
              <li>Distanțe acoperite: până la 1000 km</li>
              <li>Capacitate de orientare excepțională</li>
              <li>Rezistență la condiții meteo variate</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Rase Populare</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Belgian Racing Pigeon</li>
              <li>Dutch Racing Pigeon</li>
              <li>English Racing Pigeon</li>
              <li>German Racing Pigeon</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista Porumbei */}
      <div className="space-y-8">
        {porumbei.map((porumbel) => (
          <div key={porumbel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-primary">{porumbel.nume}</h2>
                  <p className="text-gray-600 mt-1">{porumbel.rasa}</p>
                  <p className="text-gray-600">Vârstă: {porumbel.varsta}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-primary text-white px-4 py-2 rounded-md">
                    Porumbel de Performanță
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Performanțe</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {porumbel.performante.map((performanta, index) => (
                      <li key={index}>{performanta}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Caracteristici</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {porumbel.caracteristici.map((caracteristica, index) => (
                      <li key={index}>{caracteristica}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Informații Adiționale */}
      <div className="mt-12 bg-light p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Îngrijire și Antrenament</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Hrană și Nutriție</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Dietă echilibrată</li>
              <li>Suplimente proteice</li>
              <li>Vitamine și minerale</li>
              <li>Hidratare adecvată</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Antrenament</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Zboruri regulate</li>
              <li>Exerciții de orientare</li>
              <li>Recuperare controlată</li>
              <li>Monitorizare performanță</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Sănătate</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Vaccinări regulate</li>
              <li>Control veterinar</li>
              <li>Igienă și curățenie</li>
              <li>Prevenție boli</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 