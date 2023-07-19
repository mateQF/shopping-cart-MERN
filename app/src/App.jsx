import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.css'
import { Toaster } from 'sonner'

const HomePage = lazy(() => import('./components/Home'))

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Toaster richColors />
    </BrowserRouter>
  )
}

export default App
