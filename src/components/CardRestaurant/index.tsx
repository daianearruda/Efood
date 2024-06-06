import Tag from '../Tag'
import Button from '../Button'
import { Card, Title, Description, Rating } from './style'
import { Taghighlight } from '../Tag/taghighlight/styles'
import { Link } from 'react-router-dom'

type Props = {
  category: string
  title: string
  description: string
  image: string
  rating: number
  type: 'no' | 'highlight'
  imgStar: string
}

const CardRestaurant = ({
  category,
  rating,
  image,
  description,
  title,
  imgStar,
  type
}: Props) => (
  <Card>
    {type === 'highlight' && <Taghighlight>Destaque da semana</Taghighlight>}
    <Tag>{category}</Tag>
    <img className="photoFood" src={image} alt={title} />
    <div className="border">
      <div className="details">
        <Title>{title}</Title>
        <Rating>
          <div>{rating}</div>
          <img src={imgStar} />
        </Rating>
      </div>
      <Description>{description}</Description>
      <Link to="/restaurantes">
        <Button title={title} background="orange" type={'button'}>
          Saiba mais
        </Button>
      </Link>
    </div>
  </Card>
)

export default CardRestaurant
