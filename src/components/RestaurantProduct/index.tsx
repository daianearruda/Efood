import { Link } from 'react-router-dom'
import Button from '../Button'

import { ProductCard } from './styles'

type Props = {
  id: number
  image: string
  title: string
  description: string
  openModal: () => void
}

const Product = ({ id, image, title, description, openModal }: Props) => {
  return (
    <>
      <ProductCard className="container">
        <img src={image} alt="" />
        <div className="textContainer">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Link to={`/restaurantes/${id}`}></Link>
        <Button
          title="Mais detalhes"
          background="white"
          type="button"
          onClick={openModal}
        >
          Mais detalhes
        </Button>
      </ProductCard>
    </>
  )
}

export default Product
