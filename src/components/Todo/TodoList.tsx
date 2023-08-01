import React from 'react'
import type { TodoItem } from './Todo'
import TodoListItem from './TodoListItem'

interface Props {
  todoItem: TodoItem[]
  onHandleCheckChange: (e: React.ChangeEvent<HTMLInputElement>, item: TodoItem) => void
}

const TodoList = ({ todoItem, onHandleCheckChange }: Props) => {
  return (
    <>
      {todoItem.map((item: TodoItem, index: number) => (
        <TodoListItem
          item={item}
          key={index}
          onHandleCheckChange={onHandleCheckChange}
        />
      ))}
    </>
  )
}

export default TodoList
