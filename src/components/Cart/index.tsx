import { useSelector, useDispatch } from 'react-redux'
import img from '../../assets/images/imagePizzaProduto.png'
import Button from '../Button'

import { CartContainer, Overlay, Sidebar, CartItem, Prices } from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
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
        <Button
          background="white"
          type="button"
          title="Continuar com a entrega"
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
