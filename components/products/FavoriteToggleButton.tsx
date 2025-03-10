import {FaHeart} from 'react-icons/fa'
import { Button } from '../ui/button'

interface FavoriteToggleButtonProps {
  productId: string;
}
function FavoriteToggleButton({ productId }: FavoriteToggleButtonProps) {
  const handleToggleFavorite = () => {
    console.log(`Toggling favorite for product: ${productId}`);
  };
  return (
    <Button variant='outline' size='icon' className='p-2 cursor-pointer' onClick={handleToggleFavorite}>
      <FaHeart />
    </Button>
  )
}
export default FavoriteToggleButton