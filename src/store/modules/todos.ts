// Interface

//type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>
type TodoAction =
  | ReturnType<typeof deleteAll>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof checkedTodo>
  | ReturnType<typeof deleteSelected>

/**
 * Interface, Type
 */
export interface TodoState {
  id: number
  content: string
  checked: boolean
}

// Constants
export const INCREASE = 'counter/INCREASE' as const
export const DECREASE = 'counter/DECREASE' as const
export const DELETE_ALL = 'todos/DELETE_ALL' as const
export const ADD_TODO = 'todos/ADD_TODO' as const
export const CHECKED_TODO = 'todos/CHECKED_TODO' as const
export const DELETE_SELECTED = 'todos/DELETE_SELECTED' as const

// Actions
export const increase = () => ({ type: INCREASE })

export const decrease = () => ({ type: DECREASE })
export const deleteAll = () => ({ type: DELETE_ALL })
export const addTodo = (value: string) => ({ type: ADD_TODO, value })
export const checkedTodo = (item: TodoState) => ({ type: CHECKED_TODO, item })
export const deleteSelected = (deleteList?: TodoState[]) => ({ type: DELETE_SELECTED, deleteList })

// Initialize
const initialState = {
  nextId: 3,
  checked: false,
  todoList: [
    {
      id: 1,
      content: 'TO DO LIST 만들기',
      checked: false,
    },
    {
      id: 2,
      content: 'REDUX 사용해보기',
      checked: false,
    },
  ],
}

/**
 * Reducer
 * @param {TodoState} state
 * @param { TodoAction} action
 * @returns {TodoState}
 */
const reducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    // case INCREASE:
    //   return {
    //     ...state,
    //     value: state.value + 1,
    //   }

    // case DECREASE:
    //   return {
    //     ...state,
    //     value: state.value - 1,
    //   }
    case DELETE_ALL:
      console.log('delete')
      return {
        ...state,
        todoList: [],
      }

    case ADD_TODO:
      console.log('state', state)
      const newTodo = {
        id: state.nextId,
        content: action.value,
        checked: state.checked,
      }
      console.log('reducer add', newTodo)
      return {
        ...state,
        nextId: state.nextId + 1,
        todoList: state.todoList.concat(newTodo),
      }

    case CHECKED_TODO:
      console.log('reducer check', action.item)

      const checkedList = state.todoList.map(todoItem => {
        if (todoItem.id === action.item.id) {
          return {
            ...todoItem,
            checked: !todoItem.checked,
          }
        }
        return todoItem
      })
      return {
        ...state,
        todoList: checkedList,
      }
    case DELETE_SELECTED:
      console.log('deleteSeleted', action.deleteList)
      const deleteList = action.deleteList
      const notDeleted = state.todoList.filter(todoItem => !deleteList?.includes(todoItem))
      console.log('안지워진거', notDeleted)
      return {
        ...state,
        // todoList: !deleteList,
        todoList: notDeleted,
      }

    default:
      return { ...state }
  }
}

export default reducer
