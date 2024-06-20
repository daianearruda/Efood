import CardRestaurant from '../CardRestaurant'
import { Restaurante } from '../../pages/Home'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurante[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurante) => (
        <CardRestaurant
          id={restaurante.id}
          key={restaurante.id}
          title={restaurante.titulo}
          type={restaurante.tipo}
          description={restaurante.descricao}
          image={restaurante.capa}
          rating={parseFloat(restaurante.avaliacao)}
          destacado={restaurante.destacado}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantList
