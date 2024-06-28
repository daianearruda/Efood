import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantProductHeader from '../../components/RestaurantProductHeader'
import ProductListRestaurant from '../../components/RestaurantProductList'

import { useGetRestaurantIdQuery } from '../../services/api'

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
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantIdQuery(id!)

  if (!restaurante) {
    return <p>Carregando...</p>
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
