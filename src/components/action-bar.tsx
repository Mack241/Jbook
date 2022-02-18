import { useActions } from '../hooks/use-actions'
import './action-bar.css'

interface ActionBaProps {
  id: string
}

//try to extract the buttons into a seperate ActionButton component
//pass props of onClick and type of button

const ActionBar: React.FC<ActionBaProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions()

  return (
  <div className='action-bar'>
    <button className='button is-primary is-small' onClick={() => moveCell(id, 'up')}>
      <span className='icon'>
        <i className='fas fa-arrow-up'/>
      </span>
    </button>
    <button className='button is-primary is-small' onClick={() => moveCell(id, 'down')}>
      <span>
        <i className='fas fa-arrow-down'/>
      </span>
    </button>
    <button className='button is-primary is-small' onClick={() => deleteCell(id)}>
      <span>
        <i className='fas fa-times'/>
      </span>
    </button>
  </div>
  )
}

export default ActionBar