import { HeaderRestaurant, DetailsHeader, TitlePhoto } from './styles'
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
    <TitlePhoto>
      <div>
        <h2>Italiana</h2>
      </div>
      <div>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </TitlePhoto>
  </HeaderRestaurant>
)

export default RestaurantProductHeader
