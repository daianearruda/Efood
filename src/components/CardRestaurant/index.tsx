import Tag from '../Tag'
import Button from '../Button'
import { Card, Title, Description, Rating } from './style'
import { Taghighlight } from '../Tag/taghighlight/styles'
import { Link } from 'react-router-dom'
import imgStar from '../../assets/images/estrela.png'

type Props = {
  id: number
  title: string
  type: string
  description: string
  image: string
  rating: number
  destacado: boolean
}

const CardRestaurant = ({
  id,
  title,
  type,
  description,
  image,
  rating,
  destacado
}: Props) => (
  <Card>
    {destacado && <Taghighlight>Destaque da semana</Taghighlight>}
    <Tag>{type}</Tag>
    <img className="photoFood" src={image} alt={title} />
    <div className="border">
      <div className="details">
        <Title>{title}</Title>
        <Rating>
          <div>{rating}</div>
          <img src={imgStar} alt="Estrela" />
        </Rating>
      </div>
      <Description>{description}</Description>
      <Link
        to={`/restaurantes/${id}`}
        onClick={() => {
          console.log('clicado')
        }}
      >
        <Button title={title} background="orange" type={'button'}>
          Saiba mais
        </Button>
      </Link>
    </div>
  </Card>
)

export default CardRestaurant
