import { createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'

import { GlobalCss } from './styles'
import Product from './components/Product'
import imgStar from './assets/images/estrela.png'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <></>
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
        <Product
          title="Restaurante JS"
          category="Japonesa"
          image={'https://via.placeholder.com/250'}
          rating={4.9}
          imgStar={imgStar}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.
          Experimente o Japão sem sair do lar com nosso delivery!"
        />
      </div>
    </>
  )
}

export default App
