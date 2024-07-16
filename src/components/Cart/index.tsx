import { useSelector, useDispatch } from 'react-redux'

import Button from '../Button'

import { CartContainer, Overlay, Sidebar, CartItem, Prices } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco, 0).toFixed(2)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToDelivery = () => {
    navigate('/delivery')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>$ {item.preco.toFixed(2)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </CartItem>
              ))}
            </ul>
            <Prices>
              Valor total <span>R$ {getTotalPrice()}</span>
            </Prices>
            <Button
              background="white"
              type="button"
              title="Continuar com a entrega"
              onClick={goToDelivery}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="emptyText">
            O carrinho está vazio, adicione um produto para continuar com a
            compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
