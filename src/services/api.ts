// services/api.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type Address = {
  description: string
  city: string
  zipCode: string
  number: number
  complement: string
}

type Delivery = {
  receiver: string
  address: Address
}

type Card = {
  name: string
  number: string
  code: number
  expires: {
    month: number
    year: number
  }
}

type Payment = {
  card: Card
}

type PurchasePayload = {
  products: Product[]
  delivery: Delivery
  payment: Payment
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantId: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantQuery,
  useGetRestaurantIdQuery,
  usePurchaseMutation
} = api

export default api
