import Product from '../RestaurantProduct'
import Products from '../models/Products'

import { ContainerList, ProductList } from './styles'

export type Props = {
  products: Products[]
}

const ProductListRestaurant = ({ products }: Props) => (
  <ContainerList className="container">
    <ProductList>
      {products.map((prod) => (
        <Product
          image={prod.image}
          title={prod.title}
          description={prod.description}
          key={prod.id}
        />
      ))}
    </ProductList>
  </ContainerList>
)

export default ProductListRestaurant
