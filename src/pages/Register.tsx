import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    email: '',
    telefon: '',
    oras: '',
    parola: '',
    confirmaParola: ''
  })

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aici vom adăuga logica de înregistrare
    console.log('Register attempt:', formData)
    // Temporar, redirecționăm către login
    navigate('/login')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Înregistrare Cont Nou
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Creează-ți un cont pentru a participa la concursuri și a gestiona porumbeii
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="nume" className="block text-sm font-medium text-gray-700">
                  Nume
                </label>
                <input
                  id="nume"
                  name="nume"
                  type="text"
                  required
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  value={formData.nume}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="prenume" className="block text-sm font-medium text-gray-700">
                  Prenume
                </label>
                <input
                  id="prenume"
                  name="prenume"
                  type="text"
                  required
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  value={formData.prenume}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresă Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
                Telefon
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                value={formData.telefon}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="oras" className="block text-sm font-medium text-gray-700">
                Oraș
              </label>
              <input
                id="oras"
                name="oras"
                type="text"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                value={formData.oras}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="parola" className="block text-sm font-medium text-gray-700">
                Parolă
              </label>
              <input
                id="parola"
                name="parola"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                value={formData.parola}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confirmaParola" className="block text-sm font-medium text-gray-700">
                Confirmă Parola
              </label>
              <input
                id="confirmaParola"
                name="confirmaParola"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                value={formData.confirmaParola}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Sunt de acord cu{' '}
              <a href="#" className="font-medium text-primary hover:text-primary/80">
                Termenii și Condițiile
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Creează Cont
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Ai deja cont?{' '}
            <a href="/login" className="font-medium text-primary hover:text-primary/80">
              Autentifică-te
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 