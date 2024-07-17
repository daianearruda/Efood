import CardRestaurantList from '../../components/CardRestaurantList'
import Loader from '../../components/Loader'
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
  return <Loader />
}

export default Home
