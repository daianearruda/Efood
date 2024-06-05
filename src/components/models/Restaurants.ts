class Restaurant {
  category: string
  title: string
  description: string
  image: string
  rating: number
  infos: string[]
  id: number

  constructor(
    id: number,
    infos: string[],
    rating: number,
    image: string,
    description: string,
    title: string,
    category: string
  ) {
    this.id = id
    this.infos = infos
    this.rating = rating
    this.image = image
    this.description = description
    this.title = title
    this.category = category
  }
}

export default Restaurant
