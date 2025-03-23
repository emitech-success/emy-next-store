
// import {FaHeart} from 'react-icons/fa'
// import { Button } from '../ui/button'
import { auth } from '@clerk/nextjs/server'
import { CardSignInButton } from '../form/Button';
import { fetchFavoriteId } from '@/utils/actions';
import FavoriteToggleform from './FavoriteToggleform';

interface FavoriteToggleButtonProps {
  productId: string;
}

async function FavoriteToggleButton({ productId }: FavoriteToggleButtonProps) {
  const {userId} = await auth()
  const favoriteId = await fetchFavoriteId({productId})

  if(!userId) return <CardSignInButton />
  
  return (
    <FavoriteToggleform favoriteId ={favoriteId} productId= {productId} />
  )
}
export default FavoriteToggleButton