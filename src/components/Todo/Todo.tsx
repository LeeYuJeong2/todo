import React, { useEffect } from 'react'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/configureStore'
import { ADD_TODO, CHECKED_TODO, DELETE_ALL, DELETE_SELECTED, TodoState } from '../../store/modules/todos'

export interface TodoItem {
  id: number
  content: string
  checked: boolean
}

const Todo = () => {
  const todoItems = useSelector((state: RootState) => state.todos.todoList)
  const dispatch = useDispatch()

  // const [todoItems, setTodoItems] = useState<TodoItem[]>(todoState)
  const totalTodo = todoItems.length

  useEffect(() => {
    console.log('useEffect', todoItems)
  }, [todoItems])

  const handleAddTodo = (value: string) => {
    // setTodoItems([...todoItems.concat(newTodo)])
    //  console.log(newTodo)
    dispatch({
      type: ADD_TODO,
      value,
    })
  }

  // const handleDeleteAll = (): void => {
  //   setTodoItems([])
  // }

  const handleDeleteAll = (): void => {
    dispatch({
      type: DELETE_ALL,
    })
  }

  const handleDeleteSelected = (): void => {
    const deleteList = todoItems.filter(todoItem => todoItem.checked == true)
    console.log(deleteList)

    //setTodoItems(checkedList)
    dispatch({
      type: DELETE_SELECTED,
      deleteList,
    })
  }

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>, item: TodoState) => {
    console.log('tsx check', item)
    dispatch({
      type: CHECKED_TODO,
      item,
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="secondary"
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
          >
            ToDo List App
          </Typography>
        </Toolbar>
      </AppBar>

      <TodoHeader onAddTodo={handleAddTodo} />
      <TodoList
        todoItem={todoItems}
        onHandleCheckChange={handleCheckChange}
      />
      <TodoFooter
        total={totalTodo}
        onDeleteAll={handleDeleteAll}
        onDeleteSelected={handleDeleteSelected}
      />
    </Box>
  )
}

export default Todo
