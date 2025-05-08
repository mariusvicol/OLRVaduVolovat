import { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

interface ContactForm {
  nume: string
  email: string
  telefon: string
  subiect: string
  mesaj: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    nume: '',
    email: '',
    telefon: '',
    subiect: '',
    mesaj: ''
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
      await addDoc(collection(db, 'contact_messages'), {
        ...formData,
        dataTrimitere: new Date().toISOString(),
        status: 'necitit'
      })

      setSuccess(true)
      setFormData({
        nume: '',
        email: '',
        telefon: '',
        subiect: '',
        mesaj: ''
      })
    } catch (error) {
      console.error('Error sending message:', error)
      setError('A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-6xl mx-auto px-3 py-4 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Contact</h1>
      
      {success && (
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 text-green-700 rounded-md text-sm sm:text-base">
          Mesajul a fost trimis cu succes! Vă vom contacta în curând.
        </div>
      )}

      {error && (
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100 text-red-700 rounded-md text-sm sm:text-base">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {/* Informații de Contact */}
        <div className="bg-light rounded-lg p-4 sm:p-6 shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">Informații de Contact</h2>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Adresă</h3>
                <p className="text-gray-600 text-xs sm:text-sm">OLR Vadu Volovat, Nr. 880a, Volovăț 727615, Județul Suceava</p>
                <a 
                  href="https://www.google.com/maps/place/OLR+Vadu+Volovat/@47.7988948,25.8622322,752m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47344f3e77a5be6f:0xb5e2d0fa0e099dd5!8m2!3d47.7988949!4d25.8670977!16s%2Fg%2F11gxh4_nmj?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary text-xs sm:text-sm mt-1 inline-flex items-center"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Vezi pe Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2 sm:space-x-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Telefon</h3>
                <a 
                  href="tel:+40746422485" 
                  className="text-primary hover:text-secondary inline-flex items-center text-sm sm:text-base"
                >
                  <span className="font-medium">0746 422 485</span>
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2 sm:space-x-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Email</h3>
                <p className="text-gray-600 text-xs sm:text-sm">contact@olr-vaduvolovat.ro</p>
              </div>
            </div>

            <div className="flex items-start space-x-2 sm:space-x-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Program</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Luni - Vineri: 09:00 - 17:00</p>
                <p className="text-gray-600 text-xs sm:text-sm">Sâmbătă: 09:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formular de Contact */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">Trimite-ne un Mesaj</h2>
          
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="nume" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Nume și Prenume
              </label>
              <input
                type="text"
                id="nume"
                name="nume"
                value={formData.nume}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="telefon" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="subiect" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Subiect
              </label>
              <select
                id="subiect"
                name="subiect"
                value={formData.subiect}
                onChange={handleChange}
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Selectează subiectul</option>
                <option value="informatii">Informații Generale</option>
                <option value="concursuri">Concursuri</option>
                <option value="programare">Programare Vizită</option>
                <option value="alte">Alte Întrebări</option>
              </select>
            </div>

            <div>
              <label htmlFor="mesaj" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Mesaj
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                value={formData.mesaj}
                onChange={handleChange}
                rows={4}
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Se trimite...' : 'Trimite Mesaj'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 