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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Participanți</h1>

      {/* Statistici */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Total Participanți</h3>
          <p className="text-3xl font-bold">150+</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Concursuri Organizate</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Premii Acordate</h3>
          <p className="text-3xl font-bold">45+</p>
        </div>
      </div>

      {/* Lista Participanți */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Participanți Activi</h2>
          <div className="space-y-6">
            {participanti.map((participant) => (
              <div key={participant.id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{participant.nume}</h3>
                    <p className="text-gray-600">{participant.oras}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {participant.participari} participări
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Premii Obținute:</h4>
                  <ul className="list-disc list-inside text-gray-600">
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
      <div className="mt-12 bg-light p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Cum să Participi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Cerințe de Participare</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Înregistrare la OLR Vadu Volovat</li>
              <li>Porumbei cu inele valide</li>
              <li>Vaccinare obligatorie</li>
              <li>Achitarea taxei de participare</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Beneficii</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
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