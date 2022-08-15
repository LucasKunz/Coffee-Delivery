import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { CoffeeLayout, PriceCoffe, ShoppingCartIcon, TypeCoffee } from "./style"
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"

export type Coffee = {
  id: number
  name: string
  description: string
  flags: string[]
  image: string
  price: number
}

export type CoffeeProps = {
  coffee: Coffee
}


export function CoffeeInformations({ coffee }: CoffeeProps) {
  const { addedCoffees, setAddedCoffees } = useContext(CartContext)
  const [counter, setCounter] = useState(0)

  const counterUpdated = addedCoffees.filter(item => item.id === coffee.id).length

  function handleCounter(type: string, coffee: Coffee) {
    if (type === 'reduce' && counterUpdated > 0) {
      const indexCoffee = addedCoffees.findIndex(item => item.id === coffee.id)

      if (indexCoffee < 0) return

      const newArrayCoffee = addedCoffees

      newArrayCoffee.splice(indexCoffee, 1)

      setAddedCoffees([...newArrayCoffee])
      setCounter(counter - 1)
    } else if (type === 'increase') {
      setCounter(counter + 1)
      setAddedCoffees([...addedCoffees, coffee])
    }
  }
  return (
    <CoffeeLayout key={coffee.id}>
      <img src={coffee.image} alt="" />
      <div>
        {coffee.flags.map(flag => {
          return <TypeCoffee>{flag}</TypeCoffee>
        })}
      </div>
      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>
      <PriceCoffe>
        <div className="price">
          R$<span>{coffee.price.toFixed(2)}</span>
        </div>
        <div className="counter">
          <Minus weight="bold" color="#8047F8" size={14} onClick={() => handleCounter('reduce', coffee)} />
          <span>{counterUpdated}</span>
          <Plus weight="bold" color="#8047F8" size={14} onClick={() => handleCounter('increase', coffee)} />
        </div>
        <ShoppingCartIcon>
          <ShoppingCartSimple size={22} color='#fff' weight="fill" />
        </ShoppingCartIcon>
      </PriceCoffe>
    </CoffeeLayout>
  )
}