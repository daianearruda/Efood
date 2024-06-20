import { HeaderRestaurant, DetailsHeader, TitlePhoto } from './styles'
import { Link } from 'react-router-dom'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

type RestaurantProps = {
  restaurante: {
    id: number
    nome: string
    tipo: string
    foto: string
  }
}

const RestaurantProductHeader = ({ restaurante }: RestaurantProps) => (
  <HeaderRestaurant backgroundImage={restaurante.foto}>
    <DetailsHeader>
      <a href="">
        <Link to="/" onClick={scrollToTop}>
          Restaurantes
        </Link>
      </a>
      <p>0 produto(s) no carrinho</p>
    </DetailsHeader>
    <TitlePhoto>
      <div>
        <h2>{restaurante.tipo}</h2>
      </div>
      <div>
        <h1>{restaurante.nome}</h1>
      </div>
    </TitlePhoto>
  </HeaderRestaurant>
)

export default RestaurantProductHeader
