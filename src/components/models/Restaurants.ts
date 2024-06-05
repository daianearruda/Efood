class Restaurant {
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
    category: string
  ) {
    this.id = id
    this.rating = rating
    this.image = image
    this.description = description
    this.title = title
    this.category = category
    this.imgStar = imgStar
  }
}

export default Restaurant
