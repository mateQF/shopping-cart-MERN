import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.css'

const HomePage = lazy(() => import('./components/Home'))
const ProductDetailPage = lazy(() => import('./components/ProductDetail'))

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='lazy-loading'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/api/products/:id' element={<ProductDetailPage />} />
        </Routes>
      </Suspense>
  </BrowserRouter>
  )
}

export default App
