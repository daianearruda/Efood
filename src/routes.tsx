import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantProductHeader from './components/RestaurantProductHeader'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<RestaurantProductHeader />} />
  </Routes>
)

export default Rotas
