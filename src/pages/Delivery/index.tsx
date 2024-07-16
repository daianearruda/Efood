import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { usePurchaseMutation } from '../../services/api'
import { CartContainer, Overlay } from '../../components/Cart/styles'
import * as Yup from 'yup'

import ReactInputMask from 'react-input-mask'
import { CustomSidebar, DivInputs, Row } from './styles'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { clear, open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'

const Delivery = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, isLoading }] = usePurchaseMutation()
  const [showPayment, setShowPayment] = useState(false)
  const [paymentData, setPaymentData] = useState({
    name: '',
    number: '',
    code: '',
    month: '',
    year: ''
  })

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome deve ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(3, 'O nome deve ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(2, 'A cidade deve ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP deve ter 8 caracteres')
        .max(9, 'O CEP deve ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.number()
        .min(1, 'O número deve ter pelo menos 1 caractere')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: parseInt(values.number),
            complement: values.complement
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        payment: {
          card: {
            name: paymentData.name,
            number: paymentData.number,
            code: parseInt(paymentData.code),
            expires: {
              month: parseInt(paymentData.month),
              year: parseInt(paymentData.year)
            }
          }
        }
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      setShowPayment(true)
      setPaymentData({
        name: '',
        number: '',
        code: '',
        month: '',
        year: ''
      })
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isLoading && !isSuccess) {
    return <Navigate to="/" />
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const closeCart = () => {
    if (!showPayment) {
      dispatch(open())
      navigate('/cart')
    }
  }

  const toShowPayment = () => {
    setShowPayment(true)
  }

  const backToAddress = () => {
    setShowPayment(false)
  }

  return (
    <div>
      {!showPayment ? (
        <CartContainer className="is-open">
          <Overlay onClick={closeCart} />
          <CustomSidebar>
            <h2>Entrega</h2>
            <form onSubmit={form.handleSubmit}>
              <DivInputs>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </DivInputs>
              <DivInputs>
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('description') ? 'error' : ''}
                />
              </DivInputs>
              <DivInputs>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </DivInputs>
              <Row>
                <DivInputs maxWidth="46%">
                  <label htmlFor="zipCode">CEP</label>
                  <ReactInputMask
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99999-999"
                  />
                </DivInputs>
                <DivInputs maxWidth="46%">
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </DivInputs>
              </Row>
              <DivInputs>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </DivInputs>

              <Button
                background="white"
                type="submit"
                title="Enviar Endereço"
                disabled={isLoading}
                onClick={toShowPayment}
              >
                {isLoading ? 'Enviando...' : 'Continuar com o pagamento'}
              </Button>
              <Button
                background="white"
                type="button"
                title="Voltar para o carrinho"
                onClick={closeCart}
              >
                Voltar para o carrinho
              </Button>
            </form>
          </CustomSidebar>
        </CartContainer>
      ) : (
        <CartContainer className="is-open">
          <Overlay onClick={closeCart} />
          <CustomSidebar>
            <h2>Pagamento</h2>
            <form onSubmit={form.handleSubmit}>
              <DivInputs>
                <label htmlFor="name">Nome no cartão</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={paymentData.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('name') ? 'error' : ''}
                />
              </DivInputs>
              <Row>
                <DivInputs maxWidth="70%">
                  <label htmlFor="number">Número do cartão</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={paymentData.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </DivInputs>
                <DivInputs maxWidth="20%">
                  <label htmlFor="code">CVV</label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={paymentData.code}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('code') ? 'error' : ''}
                  />
                </DivInputs>
              </Row>
              <Row>
                <DivInputs maxWidth="46%">
                  <label htmlFor="month">Mês de vencimento</label>
                  <input
                    type="text"
                    id="month"
                    name="month"
                    value={paymentData.month}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('month') ? 'error' : ''}
                  />
                </DivInputs>
                <DivInputs maxWidth="46%">
                  <label htmlFor="year">Ano de vencimento</label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={paymentData.year}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('year') ? 'error' : ''}
                  />
                </DivInputs>
              </Row>

              <Button
                background="white"
                type="submit"
                title="Enviar Pagamento"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar Pagamento'}
              </Button>
              <Button
                background="white"
                type="button"
                title="Voltar ao endereço"
                onClick={backToAddress}
              >
                Voltar ao endereço
              </Button>
            </form>
          </CustomSidebar>
        </CartContainer>
      )}
    </div>
  )
}

export default Delivery
