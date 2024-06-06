import { HeaderRestaurant, DetailsHeader } from './styles'
import { Link } from 'react-router-dom'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const RestaurantProductHeader = () => (
  <HeaderRestaurant>
    <DetailsHeader>
      <Link to="/" onClick={scrollToTop}>
        <a href="">Restaurantes</a>
      </Link>
      <p>0 produto(s) no carrinho</p>
    </DetailsHeader>
  </HeaderRestaurant>
)

export default RestaurantProductHeader
