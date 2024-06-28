import img from '../../assets/images/imagePizzaProduto.png'
import Button from '../Button'

import { CartContainer, Overlay, Sidebar, CartItem, Prices } from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={img} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={img} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={img} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Prices>
        Valor total <span>R$ 182,70</span>
      </Prices>
      <Button background="white" type="button" title="Continuar com a entrega">
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
