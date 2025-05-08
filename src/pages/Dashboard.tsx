export default function Dashboard() {
  // Date de exemplu - acestea vor fi înlocuite cu date reale din backend
  const userData = {
    nume: 'Ion Popescu',
    email: 'ion.popescu@example.com',
    telefon: '0746 422 485',
    oras: 'București',
    dataInregistrare: '15 Martie 2024'
  }

  const statistici = {
    porumbeiInregistrati: 12,
    concursuriParticipate: 3,
    premiiCastigate: 2,
    urmatorulConcurs: '15 Iunie 2024'
  }

  const porumbei = [
    {
      id: 1,
      nume: 'Speedy',
      rasa: 'Belgian Racing Pigeon',
      varsta: '2 ani',
      performante: ['Locul 1 - Concurs Regional 2023']
    },
    {
      id: 2,
      nume: 'Thunder',
      rasa: 'Dutch Racing Pigeon',
      varsta: '3 ani',
      performante: ['Locul 3 - Concurs Național 2023']
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contul Meu</h1>

      {/* Informații Utilizator */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">{userData.nume}</h2>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-gray-600">{userData.telefon}</p>
            <p className="text-gray-600">{userData.oras}</p>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Editează Profilul
          </button>
        </div>
      </div>

      {/* Statistici */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Porumbei Înregistrați</h3>
          <p className="text-3xl font-bold">{statistici.porumbeiInregistrati}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Concursuri Participate</h3>
          <p className="text-3xl font-bold">{statistici.concursuriParticipate}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Premii Câștigate</h3>
          <p className="text-3xl font-bold">{statistici.premiiCastigate}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Următorul Concurs</h3>
          <p className="text-xl font-bold">{statistici.urmatorulConcurs}</p>
        </div>
      </div>

      {/* Lista Porumbei */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Porumbeii Mei</h2>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Adaugă Porumbel Nou
          </button>
        </div>
        <div className="space-y-6">
          {porumbei.map((porumbel) => (
            <div key={porumbel.id} className="border-b border-gray-200 pb-6 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{porumbel.nume}</h3>
                  <p className="text-gray-600">{porumbel.rasa}</p>
                  <p className="text-gray-600">Vârstă: {porumbel.varsta}</p>
                </div>
                <div className="text-right">
                  <button className="text-primary hover:text-primary/80 mr-4">
                    Editează
                  </button>
                  <button className="text-red-600 hover:text-red-700">
                    Șterge
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Performanțe:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {porumbel.performante.map((performanta, index) => (
                    <li key={index}>{performanta}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secțiune Concursuri */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-6">Concursurile Mele</h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium">Concurs Principal 2024</h3>
            <p className="text-gray-600">15 Iunie 2024</p>
            <p className="text-sm text-gray-500">Status: Înregistrat</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium">Super Derby Vama Veche</h3>
            <p className="text-gray-600">30 Iunie 2024</p>
            <p className="text-sm text-gray-500">Status: În așteptare</p>
          </div>
        </div>
      </div>
    </div>
  )
} 