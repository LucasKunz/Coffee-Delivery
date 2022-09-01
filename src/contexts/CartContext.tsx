import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../components/CoffeeLayout";

interface CartContextType {
  addedCoffees: Coffee[]
  setAddedCoffees: ([]: any) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [addedCoffees, setAddedCoffees] = useState<Coffee[]>(() => {
    const storedCoffees = localStorage.getItem('@ignite-timer:cartCoffees-1.0.0')

    if (storedCoffees) return JSON.parse(storedCoffees)

    return []
  })

  useEffect(() => {
    const addedCoffeesWithQuantity = addedCoffees.filter(coffee => coffee.quantity > 0)

    if (addedCoffeesWithQuantity) {
      const stateJSON = JSON.stringify(addedCoffeesWithQuantity)
      localStorage.setItem('@ignite-timer:cartCoffees-1.0.0', stateJSON)
    } else {
      localStorage.clear()
    }
  }, [addedCoffees])
  
  return (
    <CartContext.Provider
      value={{
        addedCoffees,
        setAddedCoffees
      }}
    >
      {children}
    </CartContext.Provider>
  )
}