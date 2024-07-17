import { useParams } from 'react-router-dom'
import RestaurantProductHeader from '../../components/RestaurantProductHeader'
import ProductListRestaurant from '../../components/RestaurantProductList'

import { useGetRestaurantIdQuery } from '../../services/api'
import Loader from '../../components/Loader'

type RestaurantProps = {
  id: number
  nome: string
  tipo: string
  foto: string
}

const RestaurantPage = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantIdQuery(id!)

  if (!restaurante) {
    return <Loader />
  }

  const restaurantProps: RestaurantProps = {
    id: restaurante.id,
    nome: restaurante.titulo,
    tipo: restaurante.tipo,
    foto: restaurante.capa
  }

  return (
    <>
      <RestaurantProductHeader restaurante={restaurantProps} />
      <ProductListRestaurant products={restaurante.cardapio} />
    </>
  )
}

export default RestaurantPage
