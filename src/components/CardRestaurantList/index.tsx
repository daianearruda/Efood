import CardRestaurant from '../CardRestaurant'
import Restaurant from '../models/Restaurants'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const ProductList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((rest) => (
        <CardRestaurant
          type={rest.type ? rest.type : 'highlight'}
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
  </Container>
)

export default ProductList
