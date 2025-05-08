import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Participanti from './pages/Participanti'

// Lazy load components
const Home = lazy(() => import('./pages/Home'))
const Competitii = lazy(() => import('./pages/Competitii'))
const Contact = lazy(() => import('./pages/Contact'))
const Regulament = lazy(() => import('./pages/Regulament'))
const Galerie = lazy(() => import('./pages/Galerie'))
const Admin = lazy(() => import('./pages/Admin'))
const PlanZbor = lazy(() => import('./pages/PlanZbor'))
const Premii = lazy(() => import('./pages/Premii'))

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/competitii" element={<Layout><Competitii /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/regulament" element={<Layout><Regulament /></Layout>} />
          <Route path="/galerie" element={<Layout><Galerie /></Layout>} />
          <Route path="/participanti" element={<Layout><Participanti /></Layout>} />
          <Route path="/premii" element={<Layout><Premii /></Layout>} />
          <Route path="/plan-zbor" element={<Layout><PlanZbor /></Layout>} />
          <Route path="/admin" element={<Layout><Admin /></Layout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
