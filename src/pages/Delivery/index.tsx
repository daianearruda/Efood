import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { usePurchaseMutation } from '../../services/api'
import { CartContainer, Overlay } from '../../components/Cart/styles'
import * as Yup from 'yup'

import ReactInputMask from 'react-input-mask'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { clear, open, close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'

import * as S from './styles'
import { getTotalPrice } from '../../utils'

const Delivery = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, isLoading, data }] = usePurchaseMutation()
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
      addressNumber: '',
      cardNumber: '',
      complement: '',
      name: '',
      code: '',
      month: '',
      year: ''
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
      addressNumber: Yup.number()
        .min(1, 'O número deve ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
      name: Yup.string().when((values, schema) =>
        paymentData ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        paymentData ? schema.required('O campo é obrigatório') : schema
      ),
      code: Yup.string().when((values, schema) =>
        paymentData ? schema.required('O campo é obrigatório') : schema
      ),
      month: Yup.string().when((values, schema) =>
        paymentData ? schema.required('O campo é obrigatório') : schema
      ),
      year: Yup.string().when((values, schema) =>
        paymentData ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: parseInt(values.addressNumber),
            complement: values.complement
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        payment: {
          card: {
            name: values.name,
            number: values.cardNumber,
            code: parseInt(values.code),
            expires: {
              month: parseInt(values.month),
              year: parseInt(values.year)
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

  useEffect(() => {
    if (showPayment) {
      form.setValues({
        ...form.values,
        name: '',
        cardNumber: '',
        code: '',
        month: '',
        year: ''
      })
    }
  }, [showPayment])

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

  const closeCard = () => {
    dispatch(close())
    navigate('/')
  }

  const toShowPayment = async () => {
    const inputElements = document.querySelectorAll('input')
    const allInputsEmpty = Array.from(inputElements).every(
      (input) => input.value === ''
    )

    if (document.querySelectorAll('.error').length === 0 && !allInputsEmpty) {
      setPaymentData({
        name: '',
        number: '',
        code: '',
        month: '',
        year: ''
      })
      setShowPayment(true)
    }
  }

  const backToAddress = () => {
    setShowPayment(false)
  }

  return (
    <div>
      {!showPayment ? (
        <CartContainer className="is-open">
          <Overlay onClick={closeCart} />
          <S.CustomSidebar>
            <h2>Entrega</h2>
            <form onSubmit={form.handleSubmit}>
              <S.DivInputs>
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
              </S.DivInputs>
              <S.DivInputs>
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
              </S.DivInputs>
              <S.DivInputs>
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
              </S.DivInputs>
              <S.Row>
                <S.DivInputs maxWidth="46%">
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
                </S.DivInputs>
                <S.DivInputs maxWidth="46%">
                  <label htmlFor="addressNumber">Número</label>
                  <input
                    type="text"
                    id="addressNumber"
                    name="addressNumber"
                    value={form.values.addressNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('addressNumber') ? 'error' : ''
                    }
                  />
                </S.DivInputs>
              </S.Row>
              <S.DivInputs>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.DivInputs>

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
                onClick={() => {
                  closeCart()
                }}
              >
                Voltar para o carrinho
              </Button>
            </form>
          </S.CustomSidebar>
        </CartContainer>
      ) : (
        <>
          {isSuccess && data ? (
            <>
              <CartContainer className="is-open">
                <Overlay onClick={closeCart} />
                <S.CustomSidebar>
                  <h2>Pedido realizado - {data?.orderId} </h2>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                  <Button
                    title="concluir"
                    background="white"
                    type="button"
                    onClick={closeCard}
                    disabled={isLoading}
                  >
                    {' '}
                    Concluir
                  </Button>
                </S.CustomSidebar>
              </CartContainer>
            </>
          ) : (
            <>
              <CartContainer className="is-open">
                <Overlay onClick={closeCart} />
                <S.CustomSidebar>
                  <h2>Pagamento - Valor a pagar {getTotalPrice(items)}</h2>
                  <form onSubmit={form.handleSubmit}>
                    <S.DivInputs>
                      <label htmlFor="name">Nome no cartão</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.values.name}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('name') ? 'error' : ''}
                      />
                    </S.DivInputs>
                    <S.Row>
                      <S.DivInputs maxWidth="70%">
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <ReactInputMask
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask={'9999 9999 9999 9999'}
                        />
                      </S.DivInputs>
                      <S.DivInputs maxWidth="20%">
                        <label htmlFor="code">CVV</label>
                        <ReactInputMask
                          type="text"
                          id="code"
                          name="code"
                          value={form.values.code}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('code') ? 'error' : ''}
                          mask={'999'}
                        />
                      </S.DivInputs>
                    </S.Row>
                    <S.Row>
                      <S.DivInputs maxWidth="46%">
                        <label htmlFor="month">Mês de vencimento</label>
                        <ReactInputMask
                          type="text"
                          id="month"
                          name="month"
                          value={form.values.month}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('month') ? 'error' : ''}
                          mask={'99'}
                        />
                      </S.DivInputs>
                      <S.DivInputs maxWidth="46%">
                        <label htmlFor="year">Ano de vencimento</label>
                        <ReactInputMask
                          type="text"
                          id="year"
                          name="year"
                          value={form.values.year}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('year') ? 'error' : ''}
                          mask={'9999'}
                        />
                      </S.DivInputs>
                    </S.Row>

                    <Button
                      background="white"
                      type="submit"
                      title="Finalizar pagamento"
                      disabled={isLoading}
                      onClick={form.handleSubmit}
                    >
                      {isLoading ? 'Enviando...' : 'Finalizar pagamento'}
                    </Button>
                    <Button
                      background="white"
                      type="button"
                      title="Voltar para a edição de endereço"
                      onClick={backToAddress}
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </form>
                </S.CustomSidebar>
              </CartContainer>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Delivery
