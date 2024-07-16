import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import RestaurantPage from './pages/RestaurantPage'
import Delivery from './pages/Delivery'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<RestaurantPage />} />
    <Route path="/delivery" element={<Delivery />} />
  </Routes>
)

export default Rotas
