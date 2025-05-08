import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

interface Participant {
  id: string
  nume: string
  oras: string
  participari: number
  premii: string[]
}

export default function Participanti() {
  const [participanti, setParticipanti] = useState<Participant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchParticipanti = async () => {
      try {
        setLoading(true)
        setError('')
        const querySnapshot = await getDocs(collection(db, 'participanti'))
        const participantiData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Participant[]
        setParticipanti(participantiData)
      } catch (error) {
        console.error('Error fetching participants:', error)
        setError('A apărut o eroare la încărcarea participanților. Vă rugăm să încercați din nou.')
      } finally {
        setLoading(false)
      }
    }

    fetchParticipanti()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Se încarcă participanții...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
          >
            Reîncearcă
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Participanți</h1>
      
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total Participanți</h3>
          <p className="text-3xl font-bold text-primary mt-2">{participanti.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total Participări</h3>
          <p className="text-3xl font-bold text-primary mt-2">
            {participanti.reduce((sum, p) => sum + p.participari, 0)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total Premii</h3>
          <p className="text-3xl font-bold text-primary mt-2">
            {participanti.reduce((sum, p) => sum + p.premii.length, 0)}
          </p>
        </div>
      </div>

      {/* Participants List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nume
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Oraș
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Participări
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Premii
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {participanti.map((participant) => (
                <tr key={participant.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {participant.nume}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {participant.oras}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {participant.participari}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {participant.premii.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {participant.premii.map((premiu, index) => (
                          <li key={index}>{premiu}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 