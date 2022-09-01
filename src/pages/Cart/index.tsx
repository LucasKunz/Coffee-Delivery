import { CreditCard, CurrencyDollar, MapPin, Money, Timer } from "phosphor-react"
import { useContext, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { Form } from "../../components/Form"
import { CartContext } from "../../contexts/CartContext"
import orderRealizedImg from '../../assets/order-realized.svg'
import {
  CartContainer,
  RequestContainer,
  PaymentContainer,
  PaymentInfo,
  ButtonPayment,
  PaymentOptions,
  OrderInformations,
  LocationIcon,
  TimerIcon,
  MoneyIcon,
  InformationItem,
  OrderConfirmed,

} from "./style"

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CheckoutSideBar } from "../../components/CheckoutSideBar"


const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe seu CEP.').max(8, 'O CEP deve ser menor que 8 dígitos'),
  street: zod.string().min(3, 'Informe o nome de sua rua.'),
  number: zod.string().min(3, 'Informe o número de seu endereço.'),
  district: zod.string().min(3, 'Informe o seu bairro.'),
  complement: zod.string(),
  city: zod.string().min(3, 'Informe o sua cidade.'),
  state: zod.string().min(2, 'Informe o seu estado.'),
  payment: zod.string().min(5, 'Escolha a forma de pagamento.').default('as')
})

type NewOrderFormData = Zod.infer<typeof newOrderFormValidationSchema>

export function Cart() {
  const { addedCoffees } = useContext(CartContext)
  const [addressOrder, setAddressOrder] = useState({
    cep: '',
    street: '',
    district: '',
    number: '',
    state: '',
    city: '',
    complement: '',
    payment: ''
  })
  const [messageError, setMessageError] = useState('')
  const [formSent, setFormSent] = useState(false)
  const { setAddedCoffees } = useContext(CartContext)
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      district: '',
      number: '',
      state: '',
      city: '',
      complement: '',
      payment: ''
    }
  })

  const { register, handleSubmit } = newOrderForm

  function handleActiveButtonPayment(event: any) {
    const buttonsPaymentWithActiveClass = document.querySelectorAll('.active-payment')

    if (buttonsPaymentWithActiveClass) {
      buttonsPaymentWithActiveClass.forEach(button =>
        button.classList.remove('active-payment')
      )
    }

    event.target.classList.toggle('active-payment')
  }

  function onSubmit(data: any) {
    event?.preventDefault()
    setAddressOrder(data)
    setFormSent(true)
    setAddedCoffees([])
  }

  return (
    <CartContainer>
      {
        formSent ? (
          <>
            <OrderConfirmed>
              <p className="order-confirmed__title">Uhu! Pedido  confirmado</p>
              <p className="order-confirmed__description">Agora é só aguardar que logo o café chegará até você</p>
              <OrderInformations>
                <InformationItem>
                  <LocationIcon>
                    <MapPin weight="fill" color="white" />
                  </LocationIcon>
                  <div>
                    <p>Entrega em</p>
                    <p>{addressOrder.street}, {addressOrder.number} - {addressOrder.city}, {addressOrder.state}</p>
                  </div>
                </InformationItem>
                <InformationItem>
                  <TimerIcon>
                    <Timer weight="fill" color="white" />
                  </TimerIcon>
                  <div>
                    <p>Previsão de entrega</p>
                    <p>20 min - 30 min</p>
                  </div>
                </InformationItem>
                <InformationItem>
                  <MoneyIcon>
                    <CurrencyDollar weight="fill" color="white" />
                  </MoneyIcon>
                  <div>
                    <p>Pagamento na entrega</p>
                    <p>{addressOrder.payment}</p>
                  </div>
                </InformationItem>
              </OrderInformations>
            </OrderConfirmed>
            <img src={orderRealizedImg} alt="" />
          </>
        ) : (
          <>
            <RequestContainer id='form-address' onSubmit={handleSubmit(onSubmit)}>
              <p className="form-title">Complete seu pedido</p >
              <FormProvider {...newOrderForm}>
                <Form handleMessageError={setMessageError} />
              </FormProvider>
              <PaymentContainer>
                <PaymentInfo>
                  <CurrencyDollar size={22} color="#8047F8" />
                  <div>
                    <span className="payment-title">Pagamento</span>
                    <span className="payment-description">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                  </div>
                </PaymentInfo>
                <PaymentOptions>
                  <input type="radio" id="credit-card" value="Cartão de crédito" {...register('payment')} />
                  <ButtonPayment onClick={handleActiveButtonPayment} htmlFor="credit-card">
                    <CreditCard size={17} color="#8047F8" />
                    Cartão de crédito
                  </ButtonPayment>

                  <input type="radio" id="debit-card" value="Cartão de Crédito" {...register('payment')} />
                  <ButtonPayment onClick={handleActiveButtonPayment} htmlFor="debit-card">
                    <CreditCard size={17} color="#8047F8" />
                    Cartão de débito
                  </ButtonPayment>
                  <input type="radio" id="money" value="Dinheiro" {...register('payment')} />
                  <ButtonPayment onClick={handleActiveButtonPayment} htmlFor="money">
                    <Money size={17} color="#8047F8" />
                    Dinheiro
                  </ButtonPayment>
                </PaymentOptions>
              </PaymentContainer>
            </RequestContainer>
            <CheckoutSideBar messageError={messageError} />
          </>
        )
      }
    </CartContainer>
  )
}