import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface Props {
  total: number
  onDeleteAll: () => void
  onDeleteSelected: () => void
}

const TodoFooter = ({ total, onDeleteAll, onDeleteSelected }: Props) => {
  return (
    <>
      <h6>Completed Todos : {total}</h6>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        size="small"
        color="secondary"
        onClick={onDeleteSelected}
      >
        Delete selected
      </Button>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        size="small"
        color="secondary"
        onClick={onDeleteAll}
      >
        Delete All
      </Button>
    </>
  )
}

export default TodoFooter
