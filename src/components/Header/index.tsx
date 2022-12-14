import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logoCoffee from '../../assets/logo-coffee.svg'
import { CartContext } from '../../contexts/CartContext'
import { Actions, CartIcon, HeaderContainer, LocationIcon } from './style'

export function Header() {
  const { addedCoffees } = useContext(CartContext)

  const sumWithInitial = addedCoffees.length > 0 ? addedCoffees.reduce(function (acc, obj) { return acc + obj.quantity }, 0) : 0

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logoCoffee} />
      </Link>
      <Actions>
        <LocationIcon>
          <MapPin size={22} color={'#8047f8'} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationIcon>
        <Link to={'/cart'}>
          <CartIcon>
            <ShoppingCart color={'#C47F17'} size={22} weight="fill" />
            {sumWithInitial > 0 ? <span>{sumWithInitial}</span> : ''}
          </CartIcon>
        </Link>
      </Actions>
    </HeaderContainer>
  )
}