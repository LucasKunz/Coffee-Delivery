import { MapPinLine } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import {
  AddressDelivery,
  CityInput,
  CodeInput,
  ComplementInput,
  DistrictInput,
  FormContainer,
  FormLayout,
  NumberInput,
  StateInput,
  StreetInput
} from './style'

import { useEffect } from 'react';

interface FormProps {
  handleMessageError: (value: string) => void
}




export function Form({ handleMessageError }: FormProps) {
  const { register, formState: {errors} } = useFormContext()

  useEffect(() => {
    if (Object.values(errors)[0]?.message) {
      const getFirstMessageError: any = Object.values(errors)[0]?.message
      handleMessageError(getFirstMessageError)
    }
  }, [errors])

  return (
    <FormContainer>
      <AddressDelivery>
        <MapPinLine size={22} color='#C47F17' weight="regular" />
        <div>
          <span className="title">Endereço de Entrega</span>
          <span className="description">Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </AddressDelivery>
      <FormLayout>
        <CodeInput type="text" placeholder="CEP" {...register('cep')} />
        <StreetInput type="text" placeholder="Rua" {...register('street')} />
        <div>
          <NumberInput type="text" placeholder="Número" {...register('number')} />
          <ComplementInput type="text" placeholder="Complemento" {...register('complement')} />
        </div>
        <div>
          <DistrictInput type="text" placeholder="Bairro" {...register('district')} />
          <CityInput type="text" placeholder="Cidade" {...register('city')} />
          <StateInput maxLength={2} type="text" placeholder="UF" {...register('state')} />
        </div>
      </FormLayout>
    </FormContainer>
  )
}