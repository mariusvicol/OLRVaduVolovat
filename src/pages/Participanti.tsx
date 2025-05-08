export default function Participanti() {
  // Placeholder pentru participanți - acestea vor fi înlocuite cu date reale
  const participanti = [
    {
      id: 1,
      nume: 'Ion Popescu',
      oras: 'București',
      participari: 3,
      premii: ['Locul 1 - Concurs 2023', 'Locul 2 - Derby 2023']
    },
    {
      id: 2,
      nume: 'Maria Ionescu',
      oras: 'Cluj-Napoca',
      participari: 2,
      premii: ['Locul 3 - Concurs 2024']
    },
    {
      id: 3,
      nume: 'George Dumitrescu',
      oras: 'Iași',
      participari: 4,
      premii: ['Locul 1 - Derby 2024', 'Locul 2 - Concurs 2023']
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-3 py-4 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Participanți</h1>

      {/* Statistici */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-12">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
          <h3 className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">Total Participanți</h3>
          <p className="text-2xl sm:text-3xl font-bold">150+</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
          <h3 className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">Concursuri Organizate</h3>
          <p className="text-2xl sm:text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
          <h3 className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">Premii Acordate</h3>
          <p className="text-2xl sm:text-3xl font-bold">45+</p>
        </div>
      </div>

      {/* Lista Participanți */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Participanți Activi</h2>
          <div className="space-y-4 sm:space-y-6">
            {participanti.map((participant) => (
              <div key={participant.id} className="border-b border-gray-200 pb-4 sm:pb-6 last:border-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium">{participant.nume}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{participant.oras}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      {participant.participari} participări
                    </span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Premii Obținute:</h4>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-600">
                    {participant.premii.map((premiu, index) => (
                      <li key={index}>{premiu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Informații Adiționale */}
      <div className="mt-6 sm:mt-12 bg-light p-4 sm:p-6 rounded-lg">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Cum să Participi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-2">Cerințe de Participare</h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2">
              <li>Înregistrare la OLR Vadu Volovat</li>
              <li>Porumbei cu inele valide</li>
              <li>Vaccinare obligatorie</li>
              <li>Achitarea taxei de participare</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-2">Beneficii</h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2">
              <li>Premii valoroase</li>
              <li>Certificat de participare</li>
              <li>Acces la facilități moderne</li>
              <li>Asistență tehnică specializată</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 