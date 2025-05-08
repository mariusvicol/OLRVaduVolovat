import { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function Competitii() {
  const [formData, setFormData] = useState({
    numeProprietar: '',
    email: '',
    telefon: '',
    oras: '',
    numarEchipe: '0',
    numarPorumbeiIndividuali: '0',
    observatii: '',
    concurs: 'principal'
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const numEchipe = parseInt(formData.numarEchipe) || 0
      const numPorumbeiIndividuali = parseInt(formData.numarPorumbeiIndividuali) || 0
      const numPorumbeiTotal = (numEchipe * 6) + numPorumbeiIndividuali

      await addDoc(collection(db, 'registrations'), {
        // Informații de bază pentru admin
        numeProprietar: formData.numeProprietar,
        email: formData.email,
        telefon: formData.telefon,
        oras: formData.oras,
        dataInregistrarii: new Date().toISOString(),

        // Detalii înscriere
        numarPorumbei: numPorumbeiTotal,
        tipEchipa: numEchipe > 0 ? `${numEchipe} echipe (${numEchipe * 6} porumbei)` : 'Individual',
        suma: calculareSuma()
      })

      setSuccess(true)
      setFormData({
        numeProprietar: '',
        email: '',
        telefon: '',
        oras: '',
        numarEchipe: '0',
        numarPorumbeiIndividuali: '0',
        observatii: '',
        concurs: 'principal'
      })
    } catch (error) {
      console.error('Error submitting registration:', error)
      setError('A apărut o eroare la înregistrare. Vă rugăm să încercați din nou.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Calculăm suma totală în funcție de numărul de echipe și porumbei individuali
  const calculareSuma = () => {
    const numEchipe = parseInt(formData.numarEchipe) || 0
    const numPorumbeiIndividuali = parseInt(formData.numarPorumbeiIndividuali) || 0
    let sumaTotala = 0

    // Taxa de întreținere pentru echipe
    if (numEchipe <= 3) {
      // Pentru primele 3 echipe: 250 EUR per echipă (5+1 gratis)
      sumaTotala = numEchipe * 250
      // Pentru a 3-a echipă se adaugă 2 porumbei gratis
      if (numEchipe === 3) {
        sumaTotala += 0 // 2 porumbei gratis
      }
    } else {
      // Pentru echipele suplimentare: 300 EUR per echipă (5+1 gratis)
      sumaTotala = 3 * 250 + (numEchipe - 3) * 300
    }

    // Taxa pentru porumbeii individuali (60 EUR per porumbel)
    sumaTotala += numPorumbeiIndividuali * 60

    // Taxa de activare: 50 EUR per porumbel
    const numPorumbeiTotal = (numEchipe * 6) + numPorumbeiIndividuali // 5 porumbei + 1 gratis per echipă + porumbeii individuali
    sumaTotala += numPorumbeiTotal * 50

    return sumaTotala
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Înscriere Concursuri</h1>

      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          Înregistrarea pentru concurs a fost trimisă cu succes!
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Formular Înscriere */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="numeProprietar" className="block text-sm font-medium text-gray-700">
                Nume Proprietar
              </label>
              <input
                type="text"
                id="numeProprietar"
                name="numeProprietar"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                value={formData.numeProprietar}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
                Telefon
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                value={formData.telefon}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="oras" className="block text-sm font-medium text-gray-700">
                Oraș
              </label>
              <input
                type="text"
                id="oras"
                name="oras"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                value={formData.oras}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="numarEchipe" className="block text-sm font-medium text-gray-700">
                Număr Echipe (5+1 gratis)
              </label>
              <select
                id="numarEchipe"
                name="numarEchipe"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                value={formData.numarEchipe}
                onChange={handleChange}
              >
                <option value="0">0 Echipe</option>
                <option value="1">1 Echipă (5+1 gratis)</option>
                <option value="2">2 Echipe (5+1 gratis)</option>
                <option value="3">3 Echipe (5+1 gratis + 2 porumbei gratis)</option>
                <option value="4">4 Echipe (3x5+1 gratis + 1x5+1 gratis)</option>
                <option value="5">5 Echipe (3x5+1 gratis + 2x5+1 gratis)</option>
              </select>
            </div>

            <div>
              <label htmlFor="numarPorumbeiIndividuali" className="block text-sm font-medium text-gray-700">
                Număr Porumbei Individuali
              </label>
              <input
                type="number"
                id="numarPorumbeiIndividuali"
                name="numarPorumbeiIndividuali"
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                value={formData.numarPorumbeiIndividuali}
                onChange={handleChange}
              />
              <p className="mt-1 text-sm text-gray-500">60 EUR per porumbel</p>
            </div>
          </div>

          <div>
            <label htmlFor="observatii" className="block text-sm font-medium text-gray-700">
              Observații
            </label>
            <textarea
              id="observatii"
              name="observatii"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={formData.observatii}
              onChange={handleChange}
            />
          </div>

          {/* Suma Totală */}
          <div className="border-t border-gray-200 pt-6">
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900">Suma Totală:</span>
                <span className="text-2xl font-bold text-primary">{calculareSuma()} EUR</span>
              </div>
              <div className="mt-2 space-y-1">
                {parseInt(formData.numarEchipe) > 0 && (
                  <p className="text-sm text-gray-500">
                    Taxă Întreținere Echipe: {parseInt(formData.numarEchipe) <= 3 ? '250 EUR/echipă' : '250 EUR/echipă (primele 3) + 300 EUR/echipă (restul)'}
                  </p>
                )}
                {parseInt(formData.numarPorumbeiIndividuali) > 0 && (
                  <p className="text-sm text-gray-500">
                    Taxă Întreținere Porumbei Individuali: 60 EUR/porumbel
                  </p>
                )}
                <p className="text-sm text-gray-500">
                  Taxă Activare: 50 EUR/porumbel
                </p>
                <p className="text-sm text-gray-500">
                  Număr Total Porumbei: {(parseInt(formData.numarEchipe) * 6) + parseInt(formData.numarPorumbeiIndividuali)} (inclusiv porumbeii gratis)
                </p>
                {parseInt(formData.numarEchipe) === 3 && (
                  <p className="text-sm text-green-600 font-medium">
                    + 2 porumbei gratis pentru înscrierea cu 3 echipe
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary text-white px-6 py-2 rounded-md ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
              } transition-colors`}
            >
              {loading ? 'Se trimite...' : 'Finalizează înscrierea'}
            </button>
          </div>
        </form>
      </div>

      {/* Informații despre Taxe */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Taxe și Regulamente</h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-primary">Taxe de Întreținere</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>60 EUR per porumbel individual</li>
              <li>Echipă de 5 porumbei + 1 gratis – 250 EUR (pentru primele 100 de echipe)</li>
              <li>La înscrierea cu 3 echipe se oferă încă 2 porumbei gratis</li>
              <li>Echipele suplimentare: 5+1 gratis – 300 EUR</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Taxă de Activare</h3>
            <p className="text-gray-600">50 EUR per porumbel</p>
          </div>
        </div>
      </div>

      {/* Informații Concursuri */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Program Concursuri 2024</h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-primary">Concurs Principal</h3>
            <p className="text-gray-600">Data: 15 Iunie 2024</p>
            <p className="text-gray-600">Premii Totale: 5000€</p>
            <p className="text-sm text-gray-500">Termen limită înscrieri: 1 Iunie 2024</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-primary">Super Derby Vama Veche</h3>
            <p className="text-gray-600">Data: 30 Iunie 2024</p>
            <p className="text-gray-600">Premii Totale: 3000€</p>
            <p className="text-sm text-gray-500">Termen limită înscrieri: 15 Iunie 2024</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Concurs Național</h3>
            <p className="text-gray-600">Data: 15 Iulie 2024</p>
            <p className="text-gray-600">Premii Totale: 4000€</p>
            <p className="text-sm text-gray-500">Termen limită înscrieri: 1 Iulie 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
} 