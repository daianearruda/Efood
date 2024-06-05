import { createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'

import { GlobalCss } from './styles'
import Product from './components/Product'

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
          rating={3.5}
          description="daskdjsajfljds salkfjdsaakljflas asdfasd"
          infos={['ola', '01']}
        />
        <Product
          title="Restaurante JS"
          category="Japonesa"
          image={'https://via.placeholder.com/250'}
          rating={3.5}
          description="daskdjsajfljds salkfjdsaakljflas asdfasd"
          infos={['ola', '01']}
        />
      </div>
    </>
  )
}

export default App
