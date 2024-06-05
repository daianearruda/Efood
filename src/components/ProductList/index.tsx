import Product from '../Product'
import Restaurant from '../models/Restaurants'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  restaurants: Restaurant[]
}

const ProductList = ({ title, restaurants }: Props) => (
  <Container>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {restaurants.map((rest) => (
          <Product
            key={rest.id}
            category={rest.category}
            description={rest.description}
            image={rest.image}
            imgStar={rest.imgStar}
            title={rest.title}
            rating={rest.rating}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
