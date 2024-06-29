import { HeaderBar, Title } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <Link to={'/'}>
        <img src={logo} alt="efood" />
      </Link>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </HeaderBar>
)

export default Header
