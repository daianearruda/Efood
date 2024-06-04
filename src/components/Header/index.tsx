import { HeaderBar, Title } from './styles'

import imgBackgroundHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${imgBackgroundHeader})` }}>
    <div className="container">
      <img src={logo} alt="efood" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </HeaderBar>
)

export default Header
