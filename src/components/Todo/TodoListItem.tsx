import type { TodoItem } from './Todo'
import Checkbox from '@mui/material/Checkbox'

interface Props {
  item: TodoItem
  onHandleCheckChange: (e: React.ChangeEvent<HTMLInputElement>, item: TodoItem) => void
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const TodoListItem = ({ item, onHandleCheckChange }: Props) => {
  return (
    <>
      <div data-testid="todo-list-item">
        <Checkbox
          {...label}
          color="secondary"
          checked={item.checked}
          onChange={e => onHandleCheckChange(e, item)}
        />
        <span className={item.checked ? 'checked-item' : ''}>
          {item.content} <br />
        </span>
      </div>
    </>
  )
}

export default TodoListItem
