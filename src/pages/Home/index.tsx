import CardRestaurantList from '../../components/CardRestaurantList'
import { Cardapio } from '../RestaurantPage'

import { useGetRestaurantQuery } from '../../services/api'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantQuery()

  if (restaurantes) {
    return (
      <>
        <CardRestaurantList restaurants={restaurantes} />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Home
