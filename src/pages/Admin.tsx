import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore'

interface Registration {
  id: string
  numeProprietar: string
  email: string
  telefon: string
  oras: string
  dataInregistrarii: string
  numarPorumbei: number
  tipEchipa: string
  suma: number
  statusPlata: 'neachitat' | 'achitat'
  statusActivare: 'inactiv' | 'activ'
}

interface ContactMessage {
  id: string
  nume: string
  email: string
  telefon: string
  subiect: string
  mesaj: string
  dataTrimitere: string
  status: 'necitit' | 'citit'
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'registrations' | 'messages' | 'participants'>('registrations')
  const [message, setMessage] = useState('')
  const [newParticipant, setNewParticipant] = useState({
    nume: '',
    oras: '',
    participari: 1,
    premii: [] as string[]
  })
  const [newPremiu, setNewPremiu] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error('Error logging in:', error)
      alert('Eroare la autentificare. Verificați credențialele.')
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const fetchRegistrations = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'registrations'))
      const registrationsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Registration[]
      setRegistrations(registrationsData)
    } catch (error) {
      console.error('Error fetching registrations:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Sigur doriți să ștergeți această înregistrare?')) {
      try {
        await deleteDoc(doc(db, 'registrations', id))
        await fetchRegistrations()
      } catch (error) {
        console.error('Error deleting registration:', error)
      }
    }
  }

  const fetchContactMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'contact_messages'))
      const messagesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ContactMessage[]
      setContactMessages(messagesData)
    } catch (error) {
      console.error('Error fetching contact messages:', error)
    }
  }

  const handleMarkAsRead = async (messageId: string) => {
    try {
      await updateDoc(doc(db, 'contact_messages', messageId), {
        status: 'citit'
      })
      await fetchContactMessages()
    } catch (error) {
      console.error('Error marking message as read:', error)
    }
  }

  const handleDeleteMessage = async (id: string) => {
    if (window.confirm('Sigur doriți să ștergeți acest mesaj?')) {
      try {
        await deleteDoc(doc(db, 'contact_messages', id))
        await fetchContactMessages()
      } catch (error) {
        console.error('Error deleting message:', error)
      }
    }
  }

  const handleAddParticipant = async () => {
    if (!newParticipant.nume || !newParticipant.oras) {
      setMessage('Vă rugăm să completați toate câmpurile obligatorii.')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const participantiRef = collection(db, 'participanti')
      
      // Verificăm dacă participantul există deja
      const querySnapshot = await getDocs(participantiRef)
      const existingParticipant = querySnapshot.docs.find(
        doc => doc.data().nume === newParticipant.nume
      )

      if (existingParticipant) {
        // Dacă există, actualizăm numărul de participări
        await updateDoc(doc(db, 'participanti', existingParticipant.id), {
          participari: existingParticipant.data().participari + 1
        })
        setMessage('Participant actualizat cu succes!')
      } else {
        // Dacă nu există, creăm un nou document
        await addDoc(participantiRef, newParticipant)
        setMessage('Participant adăugat cu succes!')
      }

      // Resetăm formularul
      setNewParticipant({
        nume: '',
        oras: '',
        participari: 1,
        premii: []
      })
    } catch (error) {
      console.error('Eroare la adăugarea participantului:', error)
      setMessage('A apărut o eroare la adăugarea participantului. Vă rugăm să încercați din nou.')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdatePaymentStatus = async (id: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'neachitat' ? 'achitat' : 'neachitat'
      await updateDoc(doc(db, 'registrations', id), {
        statusPlata: newStatus
      })

      // Dacă plata este marcată ca achitată, verificăm dacă participantul există
      if (newStatus === 'achitat') {
        const registration = registrations.find(reg => reg.id === id)
        if (registration) {
          try {
            const participantiRef = collection(db, 'participanti')
            const querySnapshot = await getDocs(participantiRef)
            
            // Căutăm participantul după nume
            const existingParticipant = querySnapshot.docs.find(
              doc => doc.data().nume === registration.numeProprietar
            )

            if (existingParticipant) {
              // Dacă există, incrementăm numărul de participări
              await updateDoc(doc(db, 'participanti', existingParticipant.id), {
                participari: existingParticipant.data().participari + 1
              })
              console.log('Participant actualizat cu succes:', registration.numeProprietar)
            } else {
              // Dacă nu există, creăm un nou document
              await addDoc(participantiRef, {
                nume: registration.numeProprietar,
                oras: registration.oras,
                participari: 1,
                premii: []
              })
              console.log('Participant nou adăugat:', registration.numeProprietar)
            }
          } catch (error) {
            console.error('Eroare la gestionarea participantului:', error)
            // Continuăm execuția chiar dacă avem eroare la adăugarea participantului
          }
        }
      }

      await fetchRegistrations()
    } catch (error) {
      console.error('Error updating payment status:', error)
      alert('A apărut o eroare la actualizarea statusului plății. Vă rugăm să încercați din nou.')
    }
  }

  const handleUpdateActivationStatus = async (id: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'inactiv' ? 'activ' : 'inactiv'
      await updateDoc(doc(db, 'registrations', id), {
        statusActivare: newStatus
      })
      await fetchRegistrations()
    } catch (error) {
      console.error('Error updating activation status:', error)
    }
  }

  const handleAddPremiu = () => {
    if (newPremiu.trim()) {
      setNewParticipant(prev => ({
        ...prev,
        premii: [...prev.premii, newPremiu.trim()]
      }))
      setNewPremiu('')
    }
  }

  const handleRemovePremiu = (index: number) => {
    setNewParticipant(prev => ({
      ...prev,
      premii: prev.premii.filter((_, i) => i !== index)
    }))
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchRegistrations()
      fetchContactMessages()
    }
  }, [isAuthenticated])

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Se încarcă...</div>
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parolă</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
          >
            Autentificare
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-[95%] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Administrare</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          Deconectare
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('registrations')}
            className={`${
              activeTab === 'registrations'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Înregistrări Concurs
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`${
              activeTab === 'messages'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Mesaje Contact
          </button>
          <button
            onClick={() => setActiveTab('participants')}
            className={`${
              activeTab === 'participants'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Participanți
          </button>
        </nav>
      </div>

      {/* Registrations Table */}
      {activeTab === 'registrations' && (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Nume Proprietar
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Telefon
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Oraș
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Data Înregistrării
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Număr Porumbei
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Tip Echipă
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Suma
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Status Plată
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Status Activare
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Acțiuni
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {registrations.map((registration) => (
                <tr key={registration.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {registration.numeProprietar}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {registration.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {registration.telefon}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {registration.oras}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(registration.dataInregistrarii).toLocaleDateString('ro-RO')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {registration.numarPorumbei}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {registration.tipEchipa}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {registration.suma} EUR
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      registration.statusPlata === 'achitat' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {registration.statusPlata === 'achitat' ? 'Achitat' : 'Neachitat'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      registration.statusActivare === 'activ' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {registration.statusActivare === 'activ' ? 'Activ' : 'Inactiv'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleUpdatePaymentStatus(registration.id, registration.statusPlata)}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          registration.statusPlata === 'achitat'
                            ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                            : 'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {registration.statusPlata === 'achitat' ? 'Marchează Neachitat' : 'Marchează Achitat'}
                      </button>
                      <button
                        onClick={() => handleUpdateActivationStatus(registration.id, registration.statusActivare)}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          registration.statusActivare === 'activ'
                            ? 'bg-red-100 text-red-800 hover:bg-red-200'
                            : 'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {registration.statusActivare === 'activ' ? 'Dezactivează' : 'Activează'}
                      </button>
                      <button
                        onClick={() => handleDelete(registration.id)}
                        className="text-red-600 hover:text-red-900 font-medium"
                      >
                        Șterge
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Contact Messages Table */}
      {activeTab === 'messages' && (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Nume
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Telefon
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Subiect
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Data
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Mesaj
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Acțiuni
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contactMessages.map((message) => (
                <tr key={message.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      message.status === 'necitit' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {message.status === 'necitit' ? 'Necitit' : 'Citit'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {message.nume}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {message.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {message.telefon}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {message.subiect}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(message.dataTrimitere).toLocaleDateString('ro-RO')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {message.mesaj}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      {message.status === 'necitit' && (
                        <button
                          onClick={() => handleMarkAsRead(message.id)}
                          className="text-blue-600 hover:text-blue-900 font-medium"
                        >
                          Marchează citit
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteMessage(message.id)}
                        className="text-red-600 hover:text-red-900 font-medium"
                      >
                        Șterge
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Participants Section */}
      {activeTab === 'participants' && (
        <div className="mt-6 bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Adaugă Participant Nou</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nume Participant *</label>
              <input
                type="text"
                value={newParticipant.nume}
                onChange={(e) => setNewParticipant({...newParticipant, nume: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Oraș *</label>
              <input
                type="text"
                value={newParticipant.oras}
                onChange={(e) => setNewParticipant({...newParticipant, oras: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Număr Participări</label>
              <input
                type="number"
                value={newParticipant.participari}
                onChange={(e) => setNewParticipant({...newParticipant, participari: parseInt(e.target.value) || 1})}
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Premii</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newPremiu}
                  onChange={(e) => setNewPremiu(e.target.value)}
                  placeholder="Adaugă un premiu"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={handleAddPremiu}
                  className="mt-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              
              {newParticipant.premii.length > 0 && (
                <div className="mt-2 space-y-2">
                  {newParticipant.premii.map((premiu, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span>{premiu}</span>
                      <button
                        type="button"
                        onClick={() => handleRemovePremiu(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleAddParticipant}
              disabled={loading}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark disabled:opacity-50"
            >
              {loading ? 'Se adaugă...' : 'Adaugă Participant'}
            </button>

            {message && (
              <p className={`mt-4 ${message.includes('eroare') ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 