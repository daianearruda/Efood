declare type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}
