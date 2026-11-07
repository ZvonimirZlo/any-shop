import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SubpageNavbar from './components/SubpageNavbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import NewArrivals from './components/NewArivals'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

// Scroll to top helper
function ScrollToTop () {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Layout wrapper to conditionally render the correct navbar
function Layout({ setSelectedCategory, children }) {
  const location = useLocation();
  const isSubpage = location.pathname === '/privacy' || location.pathname === '/terms';

  return (
    <>
      {isSubpage ? <SubpageNavbar /> : <Navbar setSelectedCategory={setSelectedCategory} />}
      <div className='flex flex-col min-h-screen bg-black pt-20'> {/* pt-20 ensures content doesn't hide behind fixed nav */}
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

function App () {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Layout setSelectedCategory={setSelectedCategory}>
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
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
