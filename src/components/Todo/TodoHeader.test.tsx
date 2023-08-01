import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TodoHeader from './TodoHeader'

describe('TodoHeader', () => {
  const mockOnAddTodo = jest.fn()

  it('입력 필드에 값을 입력하면 상태가 올바르게 변경된다', () => {
    const { getByPlaceholderText } = render(<TodoHeader onAddTodo={mockOnAddTodo} />)

    const input = getByPlaceholderText('해야할 일을 입력해보세요!') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'New Task' } })
    expect(input.value).toBe('New Task')
  })

  it('"Directions" 아이콘을 클릭하면 onAddTodo 함수가 호출된다', () => {
    const { getByRole, getByTestId } = render(<TodoHeader onAddTodo={mockOnAddTodo} />)

    const input = getByRole('textbox') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'New Task' } })
    fireEvent.click(getByTestId('DirectionsIcon'))

    expect(mockOnAddTodo).toHaveBeenCalled()
  })
})
