import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import NewArrivals from './components/NewArivals'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

// Smart ScrollToTop component that respects URL hashes
function ScrollToTop () {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function App () {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar setSelectedCategory={setSelectedCategory} />
        <div className='flex flex-col min-h-screen bg-white'>
          <main className='flex-grow'>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Hero setSelectedCategory={setSelectedCategory} />
                    <div id='products'>
                      <ProductGrid
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                    </div>
                    <div id='arrivals'>
                      <NewArrivals />
                    </div>

                    <div id='about'>
                      <About />
                    </div>
                  </>
                }
              />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/terms' element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
