import { useNavigate } from 'react-router-dom'
import Tag from '../Tag'
import Button from '../Button'
import * as S from './style'
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
  highlighted: boolean
}

const CardRestaurant = ({
  id,
  title,
  type,
  description,
  image,
  rating,
  highlighted
}: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    window.scrollTo(0, 0)
    navigate(`/restaurantes/${id}`)
  }

  return (
    <S.Card>
      {highlighted && <Taghighlight>Destaque da semana</Taghighlight>}
      <Tag>{type}</Tag>
      <img className="photoFood" src={image} alt={title} />
      <div className="border">
        <div className="details">
          <S.Title>{title}</S.Title>
          <S.Rating>
            <div>{rating}</div>
            <img src={imgStar} alt="Estrela" />
          </S.Rating>
        </div>
        <S.Description>{description}</S.Description>
        <Button
          title={title}
          background="orange"
          type={'button'}
          onClick={handleClick}
        >
          Saiba mais
        </Button>
      </div>
    </S.Card>
  )
}

export default CardRestaurant
