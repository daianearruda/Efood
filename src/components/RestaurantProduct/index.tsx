import Button from '../Button'

import { ProductCard } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => (
  <ProductCard className="container">
    <img src={image} alt="" />
    <div className="textContainer">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <Button title="Adicionar ao carrinho" background="white" type="button">
      Adicionar ao carrinho
    </Button>
  </ProductCard>
)

export default Product
