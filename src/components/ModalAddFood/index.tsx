import { createRef } from 'react'
import { FiCheckSquare } from 'react-icons/fi'

import { Form } from './styles'
import Modal from '../Modal'
import Input from '../Input'
import { FormHandles, FormProps } from '@unform/core'

interface ModalAddFoodProps {
  setIsOpen: () => void
  handleAddFood: () => void
  isOpen: boolean
}

interface FormDataProps extends FormProps {
  image: string
  name: string
  price: string
  description: string
}

const ModalAddFood = ({ handleAddFood, isOpen, setIsOpen }: ModalAddFoodProps) => {
  const formRef = createRef<FormHandles>()

  function handleSubmit(data: FormDataProps) {
    handleAddFood(data)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" />

        <Input name="name" />
        <Input name="price" />

        <Input name="description" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}

export default ModalAddFood
