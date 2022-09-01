import { Coffee } from "../components/CoffeeLayout"

interface CounterCoffeeProps {
  type: string
  coffee: Coffee
  addedCoffees: Coffee[]
}

export const CounterCoffee = ({ type, coffee, addedCoffees }: CounterCoffeeProps) => {
  const quantityUptadet = addedCoffees.filter(addedCoffee => addedCoffee.id === coffee.id)[0]?.quantity

  if (type === 'reduce' && quantityUptadet > 0) {

    const newArrayCoffee = addedCoffees.map(addedCoffee => {
      if (addedCoffee.id === coffee.id) {
        return { ...addedCoffee, quantity: addedCoffee.quantity - 1 }
      }

      return addedCoffee
    })

    return newArrayCoffee
  } else if (type === 'increase') {
    if (addedCoffees.length === 0) {
      coffee.quantity = 1
      return [coffee]
    } else {
      let coffeeExist = false

      const arrayUpdated = addedCoffees.map(addedCoffee => {
        if (addedCoffee.id === coffee.id) {
          coffeeExist = true
          return { ...addedCoffee, quantity: addedCoffee.quantity + 1 }
        }

        return addedCoffee
      })
      if (coffeeExist) {
        return arrayUpdated
      } else {
        return ((current: []) => [...current, coffee])
      }
    }
  }

  return ''
}
