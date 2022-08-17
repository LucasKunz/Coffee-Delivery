import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import {
  CartContainer,
  CheckoutLayout,
  FormContainer,
  RequestContainer,
  AddressDelivery,
  FormLayout,
  CodeInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  DistrictInput,
  CityInput,
  StateInput,
  CheckoutContainer,
  PaymentContainer,
  PaymentInfo,
  ButtonPayment,
  PaymentOptions,
  CoffeeCart,
  AddedCoffees,
  OrderInfo,
  CoffeeInfo
} from "./style"

export function Cart() {
  const { addedCoffees } = useContext(CartContext)
  console.log('AddedCoffees', addedCoffees)
  return (
    <CartContainer>
      <RequestContainer>
        <p className="form-title">Complete seu pedido</p >
        <FormContainer>
          <AddressDelivery>
            <MapPinLine size={22} color='#C47F17' weight="regular" />
            <div>
              <span className="title">Endereço de Entrega</span>
              <span className="description">Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AddressDelivery>
          <FormLayout action="">
            <CodeInput type="text" placeholder="CEP" />
            <StreetInput type="text" placeholder="Rua" />
            <div>
              <NumberInput type="text" placeholder="Número" />
              <ComplementInput type="text" placeholder="Complemento" />
            </div>
            <div>
              <DistrictInput type="text" placeholder="Bairro" />
              <CityInput type="text" placeholder="Cidade" />
              <StateInput maxLength={2} type="text" placeholder="UF" />
            </div>
          </FormLayout>
        </FormContainer>
        <PaymentContainer>
          <PaymentInfo>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <span className="payment-title">Pagamento</span>
              <span className="payment-description">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </PaymentInfo>
          <PaymentOptions>
            <ButtonPayment>
              <CreditCard size={17} color="#8047F8" />
              Cartão de crédito
            </ButtonPayment>
            <ButtonPayment>
              <Bank size={17} color="#8047F8" />
              Cartão de débito
            </ButtonPayment>
            <ButtonPayment>
              <Money size={17} color="#8047F8" />
              Dinheiro
            </ButtonPayment>
          </PaymentOptions>
        </PaymentContainer>
      </RequestContainer>
      <CheckoutContainer>
        <p className="checkout-title">Cafés selecionados</p>
        <CheckoutLayout>
          <AddedCoffees>
            {addedCoffees.map(coffee => {
              return (
                <CoffeeCart key={coffee.id}>
                  <div>
                    <img src={coffee.image} alt={coffee.name} />
                    <CoffeeInfo>
                      <p>{coffee.name}</p>
                      <div>
                        <div className="counter">
                          <Minus weight="bold" color="#8047F8" size={14} />
                          <span>1</span>
                          <Plus weight="bold" color="#8047F8" size={14} />
                        </div>
                        <button>
                          <Trash size={17} color="#8047F8" />
                          Remover
                        </button>
                      </div>
                    </CoffeeInfo>
                  </div>
                  <span>R$<span>{coffee.price.toFixed(2)}</span></span>
                </CoffeeCart>
              )
            })}
          </AddedCoffees>
          <OrderInfo>
            <div>
              <span className="order-description">Total de itens</span>
              <span className="order-price">R$ 29,70</span>
            </div>
            <div>
              <span className="order-description">Entrega</span>
              <span className="order-price">R$ 3,70</span>
            </div>
            <div>
              <span className="order-total">Total</span>
              <span className="order-total">R$ 29,70</span>
            </div>
            <button>Confirmar Pedido</button>
          </OrderInfo>
        </CheckoutLayout>
      </CheckoutContainer>
    </CartContainer>
  )
}