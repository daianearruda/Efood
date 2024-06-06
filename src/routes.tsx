import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantProductHeader from './components/RestaurantProductHeader'
import Product from './components/RestaurantProduct'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Product />} />
  </Routes>
)

export default Rotas
