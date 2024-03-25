import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BestSellers from './pages/bestsellers/BestSellers'
import Products from './pages/products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <BestSellers/>
      <Products/>
    </>
  )
}

export default App
