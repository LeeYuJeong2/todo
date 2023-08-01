import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // Add this line
import TodoListItem from './TodoListItem'

describe('TodoListItem', () => {
  it('항목 내용을 렌더링합니다', () => {
    const item = { id: 1, content: 'Jest 배우기', checked: false }
    const { getByText } = render(
      <TodoListItem
        item={item}
        onHandleCheckChange={() => {}}
      />
    )
    expect(getByText('Jest 배우기')).toBeInTheDocument()
  })

  it('항목이 체크되면 checked-item 클래스를 적용합니다', () => {
    const item = { id: 1, content: 'Jest 배우기', checked: true }
    const { getByText } = render(
      <TodoListItem
        item={item}
        onHandleCheckChange={() => {}}
      />
    )
    expect(getByText('Jest 배우기')).toHaveClass('checked-item')
  })

  it('체크박스 클릭 시 onHandleCheckChange 함수를 호출합니다', () => {
    const item = { id: 1, content: 'Jest 배우기', checked: false }
    const mockOnHandleCheckChange = jest.fn()
    const { getByRole } = render(
      <TodoListItem
        item={item}
        onHandleCheckChange={mockOnHandleCheckChange}
      />
    )
    fireEvent.click(getByRole('checkbox'))
    expect(mockOnHandleCheckChange).toBeCalled()
  })
})
