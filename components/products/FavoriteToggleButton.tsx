import {FaHeart} from 'react-icons/fa'
import { Button } from '../ui/button'

function FavoriteToggleButton() {
  return (
    <Button variant='outline' size='icon' className='p-2 cursor-pointer'>
      <FaHeart />
    </Button>
  )
}
export default FavoriteToggleButton