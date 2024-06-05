import Tag from '../Tag'
import Button from '../Button'
import { Card, Title, Description, Rating } from './style'

type Props = {
  category: string
  title: string
  description: string
  image: string
  rating: number
  highlight?: string
  imgStar: string
}

const Product = ({
  category,
  rating,
  image,
  description,
  title,
  imgStar
}: Props) => (
  <Card>
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
      <Button title={title} background="orange" type={'button'}>
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Product
