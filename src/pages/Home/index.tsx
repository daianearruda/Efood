import CardRestaurantList from '../../components/CardRestaurantList'
import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantQuery()

  if (restaurantes) {
    return (
      <>
        <CardRestaurantList restaurants={restaurantes} />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Home
