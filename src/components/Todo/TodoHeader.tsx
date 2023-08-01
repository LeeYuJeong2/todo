import React, { useRef, useState } from 'react'
import { TodoItem } from './Todo'

import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import DirectionsIcon from '@mui/icons-material/Directions'
import { TodoState } from '../../store/modules/todos'

interface Props {
  onAddTodo: (value: string) => void
}

const TodoHeader = ({ onAddTodo }: Props) => {
  const [content, setContent] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const handleSaveTodo = () => {
    if (content.trim() === '') {
      alert('내용을 입력하세요')
      inputRef.current?.focus()
      return
    }
    setContent('')
    inputRef.current?.focus()
    console.log('content', content)
    onAddTodo(content)
  }

  return (
    <div>
      <br />

      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="해야할 일을 입력해보세요!"
          value={content}
          onChange={handleChange}
          ref={inputRef}
        />

        <DirectionsIcon
          color="secondary"
          onClick={handleSaveTodo}
          data-testid="DirectionsIcon"
        />
      </Paper>

      <br />
      <br />
    </div>
  )
}

export default TodoHeader
