class Restaurant {
  type: 'no' | 'highlight'
  category: string
  title: string
  description: string
  image: string
  rating: number
  imgStar: string
  id: number

  constructor(
    id: number,
    rating: number,
    image: string,
    description: string,
    title: string,
    imgStar: string,
    category: string,
    type: 'no' | 'highlight'
  ) {
    this.id = id
    this.rating = rating
    this.image = image
    this.description = description
    this.title = title
    this.category = category
    this.imgStar = imgStar
    this.type = type
  }
}

export default Restaurant
