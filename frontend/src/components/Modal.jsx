import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'
import { hideModal } from '../reducers/modalReducer'
import { resetItem, setItem } from '../reducers/activeReducer'
import { createTodo, editTodo } from '../reducers/todoReducer'

const CustomModal = () => {

  const activeItem = useSelector(state => state.active)
  console.log(activeItem)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    let { name, value } = e.target

    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }

    dispatch(setItem({ ...activeItem, [name]: value }))
  }

  const onSave = () => {
    dispatch(hideModal())
    if (activeItem.id) {
      dispatch(editTodo(activeItem))
    } else {
      dispatch(createTodo(activeItem))
    }
    dispatch(resetItem())
  }

  const toggle = () => {
    dispatch(hideModal())
  }

  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}>Todo Item </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for='todo-title'>Title</Label>
            <Input
              type='text'
              id='todo-title'
              name='title'
              value={activeItem.title}
              onChange={handleChange}
              placeholder='Enter Todo Title'
            />
          </FormGroup>
          <FormGroup>
            <Label for='todo-description'>Description</Label>
            <Input
              type='text'
              id='todo-description'
              name='description'
              value={activeItem.description}
              onChange={handleChange}
              placeholder='Enter Todo description'
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='checkbox'
                name='completed'
                checked={activeItem.completed}
                onChange={handleChange}
              />
              Completed
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color='success'
          onClick={onSave}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default CustomModal
