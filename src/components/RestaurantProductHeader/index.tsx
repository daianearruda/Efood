import { HeaderRestaurant, DetailsHeader } from './styles'
import imgLaDolce from '../../assets/images/apresentacaoLaDolce.png'

const RestaurantProductHeader = () => (
  <HeaderRestaurant>
    <DetailsHeader>
      <a href="">Restaurantes</a>
      <p>0 produto(s) no carrinho</p>
    </DetailsHeader>
  </HeaderRestaurant>
)

export default RestaurantProductHeader
