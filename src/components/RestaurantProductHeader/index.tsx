import { HeaderRestaurant, DetailsHeader, TitlePhoto } from './styles'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

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

const RestaurantProductHeader = ({ restaurante }: RestaurantProps) => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderRestaurant backgroundImage={restaurante.foto}>
      <DetailsHeader>
        <a href="">
          <Link to="/" onClick={scrollToTop}>
            Restaurantes
          </Link>
        </a>
        <a role="button" onClick={openCart}>
          {items.length} <span>produto(s) no carrinho</span>
        </a>
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
}

export default RestaurantProductHeader
