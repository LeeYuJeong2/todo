import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TodoFooter from './TodoFooter'

describe('TodoFooter', () => {
  const mockOnDeleteAll = jest.fn()
  const mockOnDeleteSelected = jest.fn()

  const total = 5

  it('완료된 할 일의 수를 올바르게 표시한다', () => {
    const { getByText } = render(
      <TodoFooter
        total={total}
        onDeleteAll={mockOnDeleteAll}
        onDeleteSelected={mockOnDeleteSelected}
      />
    )

    expect(getByText(`Completed Todos : ${total}`)).toBeInTheDocument()
  })

  it('"Delete All" 버튼 클릭 시 onDeleteAll 함수가 호출된다', () => {
    const { getByText } = render(
      <TodoFooter
        total={total}
        onDeleteAll={mockOnDeleteAll}
        onDeleteSelected={mockOnDeleteSelected}
      />
    )

    fireEvent.click(getByText('Delete All'))
    expect(mockOnDeleteAll).toHaveBeenCalled()
  })

  it('"Delete selected" 버튼 클릭 시 onDeleteSelected 함수가 호출된다', () => {
    const { getByText } = render(
      <TodoFooter
        total={total}
        onDeleteAll={mockOnDeleteAll}
        onDeleteSelected={mockOnDeleteSelected}
      />
    )

    fireEvent.click(getByText('Delete selected'))
    expect(mockOnDeleteSelected).toHaveBeenCalled()
  })
})
