import { , createRef } from 'react'
import { FiCheckSquare } from 'react-icons/fi'

import { Form } from './styles'
import Modal from '../Modal'
import Input from '../Input'
import { FormHandles, FormProps } from '@unform/core'
import { FoodProps } from '../../@types'

interface ModalEditFoodProps {
  setIsOpen: () => void
  handleUpdateFood: () => void
  editingFood: FoodProps
  isOpen: boolean
}

interface FormDataProps extends FormProps {
  image: string
  name: string
  price: string
  description: string
}

const ModalEditFood = ({ isOpen, setIsOpen, editingFood, handleUpdateFood }: ModalEditFoodProps) => {
  const formRef = createRef<FormHandles>()

  const handleSubmit = (data: FormDataProps) => {
    handleUpdateFood(data)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" />

        <Input name="name" />
        <Input name="price" />

        <Input name="description" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}

export default ModalEditFood
