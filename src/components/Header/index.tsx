import { HeaderBar, Title } from './styles'

import imgBackgroundHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${imgBackgroundHeader})` }}>
    <div className="container">
      <Link to={'/'}>
        <img src={logo} alt="efood" />
      </Link>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </HeaderBar>
)

export default Header
