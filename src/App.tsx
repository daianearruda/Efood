import Header from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
    </>
  )
}

export default App
