import { Minus, Plus, Trash } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { CounterCoffee } from "../../utils/CounterCoffee"
import {
  CheckoutLayout,
  CheckoutContainer,
  CoffeeCart,
  AddedCoffees,
  OrderInfo,
  CoffeeInfo,
} from './style'

type Coffee = {
  id: number
  name: string
  description: string
  flags: string[]
  image: string
  price: number
  quantity: number
}

interface CheckoutProps {
  messageError: string
}

export function CheckoutSideBar({ messageError }: CheckoutProps ) {
  const { addedCoffees, setAddedCoffees } = useContext(CartContext)
  const totalPrice = addedCoffees.length > 0 ? addedCoffees.reduce(function (acc, obj) { return acc + (obj.price * obj.quantity) }, 0) : 0
  const deliveryPrice = addedCoffees.length > 0 ? 3.70 : 0

  const handleCounterCoffee = (type: string, coffee: Coffee) => {
    const counter = CounterCoffee({
      type,
      coffee,
      addedCoffees
    })

    if (!counter) return
    
    setAddedCoffees(counter)
  }

  const handleAddedCoffes = (coffee: Coffee) => {
    const addedCoffeesUpdated = addedCoffees.filter(addedCoffee => addedCoffee.id !== coffee.id)

    setAddedCoffees(addedCoffeesUpdated)
  } 
    
  return (
    <CheckoutContainer>
    <p className="checkout-title">Cafés selecionados</p>
    <CheckoutLayout>
      <AddedCoffees>
        {addedCoffees.map(coffee => {
          const quantityUptadet = addedCoffees.filter(addedCoffee => addedCoffee.id === coffee.id)[0]?.quantity

          if (quantityUptadet === 0) return
          return (
            <CoffeeCart key={coffee.id}>
              <div>
                <img src={coffee.image} alt={coffee.name} />
                <CoffeeInfo>
                  <p>{coffee.name}</p>
                  <div>
                    <div className="counter">
                      <Minus weight="bold" color="#8047F8" size={14} onClick={() => handleCounterCoffee('reduce', coffee)} />
                      <span>{quantityUptadet}</span>
                      <Plus weight="bold" color="#8047F8" size={14} onClick={() => handleCounterCoffee('increase', coffee)} />
                    </div>
                    <button onClick={() => handleAddedCoffes(coffee)}>
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
          <span className="order-price">R$ {totalPrice.toFixed(2)}</span>
        </div>
        <div>
          <span className="order-description">Entrega</span>
          <span className="order-price">R$ {deliveryPrice}</span>
        </div>
        <div>
          <span className="order-total">Total</span>
          <span className="order-total">R$ {(totalPrice + deliveryPrice).toFixed(2)}</span>
        </div>
        <button form="form-address">Confirmar Pedido</button>
        {messageError && <p className="messageError">{messageError}</p>}
      </OrderInfo>
    </CheckoutLayout>
  </CheckoutContainer>
  )
}