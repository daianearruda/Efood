import Product from '../RestaurantProduct'

import { ContainerList, ProductList } from './styles'

const ProductListRestaurant = () => (
  <ContainerList className="container">
    <ProductList>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductList>
  </ContainerList>
)

export default ProductListRestaurant
