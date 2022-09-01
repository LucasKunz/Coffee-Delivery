import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { CoffeeLayout, PriceCoffe, ShoppingCartIcon, TypeCoffee } from "./style"
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"
import { CounterCoffee } from "../../utils/CounterCoffee"

export type Coffee = {
  id: number
  name: string
  description: string
  flags: string[]
  image: string
  price: number
  quantity: number
}

export type CoffeeProps = {
  coffee: Coffee
}


export function CoffeeInformations({ coffee }: CoffeeProps) {
  const { addedCoffees, setAddedCoffees } = useContext(CartContext)

  const quantityUptadet = addedCoffees.filter(addedCoffee => addedCoffee.id === coffee.id)[0]?.quantity

  const handleCounterCoffee = (type: string, coffee: Coffee) => {
    const counter = CounterCoffee({
      type,
      coffee,
      addedCoffees
    })

    if (!counter) return
    
    setAddedCoffees(counter)
  }
  
  return (
    <CoffeeLayout key={coffee.id} className="keen-slider__slide">
      <img src={coffee.image} alt="" />
      <div className="coffee-type">
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
          <Minus weight="bold" color="#8047F8" size={14} onClick={() => handleCounterCoffee('reduce', coffee)} />
          <span>{quantityUptadet ? quantityUptadet : 0}</span>
          <Plus weight="bold" color="#8047F8" size={14} onClick={() => handleCounterCoffee('increase', coffee)} />
        </div>
        <Link to={'/cart'}>
          <ShoppingCartIcon>
            <ShoppingCartSimple size={22} color='#fff' weight="fill" />
          </ShoppingCartIcon>
        </Link>
      </PriceCoffe>
    </CoffeeLayout>
  )
}