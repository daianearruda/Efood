import Tag from '../Tag'
import Button from '../Button'
import { Card, Title, Description, Infos } from './style'

type Props = {
  category: string
  title: string
  description: string
  image: string
  rating: number
  infos: string[]
}

const Product = ({
  category,
  rating,
  image,
  description,
  title,
  infos
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Tag>{category}</Tag>
    <Tag>{rating}</Tag>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button title={title} background="orange" type={'button'}>
      Saiba mais
    </Button>
  </Card>
)

export default Product
