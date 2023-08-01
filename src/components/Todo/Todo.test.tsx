import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Todo from './Todo'
import { Store } from 'redux'
import { fireEvent } from '@testing-library/react'

describe('TodoComponent', () => {
  const initialState = { todos: { todoList: [] } }
  const mockStore = configureStore([thunk])
  let store: Store

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('TodoComponent가 정상적으로 렌더링 된다.', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Todo />
      </Provider>
    )

    // Check that given texts exist in the document
    expect(getByText('ToDo List App')).toBeInTheDocument()
    expect(getByPlaceholderText('해야할 일을 입력해보세요!')).toBeInTheDocument()

    // Since no todos have been added yet, the number of Completed Todos in TodoFooter should be 0
    // make sure 'Completed Todos : 0' actually exists in your TodoFooter component
    // expect(getByText('Completed Todos : 0')).toBeInTheDocument()
  })

  it('adds a new todo item when the "할일1" is entered', async () => {
    const { getByPlaceholderText, getByTestId, getByText, findByText } = render(
      <Provider store={store}>
        <Todo />
      </Provider>
    )

    // Enter '할일1' in the input field
    fireEvent.change(getByPlaceholderText('해야할 일을 입력해보세요!'), {
      target: { value: '할일1' },
    })

    // Simulate a click on the submit button
    fireEvent.click(getByTestId('DirectionsIcon'))
    await waitFor(() => expect(findByText('할일1')).toBeInTheDocument())
    const newTodoItem = await findByText('할일1', {}, { timeout: 3000 })

    expect(newTodoItem).toBeInTheDocument()
  })
})
