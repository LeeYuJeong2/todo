import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TodoList from './TodoList'

describe('TodoList', () => {
  const mockHandleCheckChange = jest.fn()

  const todoItems = [
    { id: 1, content: 'Task 1', checked: false },
    { id: 2, content: 'Task 2', checked: false },
    { id: 3, content: 'Task 3', checked: true },
  ]

  it('할 일 항목들을 올바르게 렌더링한다', () => {
    const { getByText } = render(
      <TodoList
        todoItem={todoItems}
        onHandleCheckChange={mockHandleCheckChange}
      />
    )

    todoItems.forEach(item => {
      expect(getByText(item.content)).toBeInTheDocument()
    })
  })

  it('체크박스 클릭 시 onHandleCheckChange 함수가 호출된다', () => {
    const { getAllByRole } = render(
      <TodoList
        todoItem={todoItems}
        onHandleCheckChange={mockHandleCheckChange}
      />
    )
    const checkboxes = getAllByRole('checkbox')
    fireEvent.click(checkboxes[0])

    expect(mockHandleCheckChange).toHaveBeenCalled()
  })
})
