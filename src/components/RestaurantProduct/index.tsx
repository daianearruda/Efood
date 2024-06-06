import Button from '../Button'

import { ProductCard } from './styles'
import imgProdutoPizzza from '../../assets/images/imagePizzaProduto.png'

const Product = () => (
  <ProductCard className="container">
    <img src={imgProdutoPizzza} alt="" />
    <div className="textContainer">
      <h3>Pizza Marguerita</h3>
      <p>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </p>
    </div>
    <Button title="Adicionar ao carrinho" background="white" type="button">
      Adicionar ao carrinho
    </Button>
  </ProductCard>
)

export default Product
