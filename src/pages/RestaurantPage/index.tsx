import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantProductHeader from '../../components/RestaurantProductHeader'
import ProductListRestaurant from '../../components/RestaurantProductList'

export type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

type Restaurante = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

type RestaurantProps = {
  id: number
  nome: string
  tipo: string
  foto: string
}

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRestaurante(data)
      })
  }, [id])

  if (!restaurante) {
    return <p>Restaurante não encontrado.</p>
  }

  // Supondo que o componente RestaurantProductHeader espera um tipo de propriedades específico
  const restaurantProps: RestaurantProps = {
    id: restaurante.id,
    nome: restaurante.titulo, // Exemplo: Usando o título como nome
    tipo: restaurante.tipo, // Exemplo: Usando o tipo como tipo
    foto: restaurante.capa // Exemplo: Usando a capa como foto
  }

  return (
    <>
      <RestaurantProductHeader restaurante={restaurantProps} />
      <ProductListRestaurant products={restaurante.cardapio} />
    </>
  )
}

export default RestaurantPage
