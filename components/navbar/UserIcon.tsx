/* eslint-disable @next/next/no-img-element */
import {LuUser} from 'react-icons/lu';
import { currentUser} from '@clerk/nextjs/server';


async function UserIcon() {
  const user = await currentUser()
  const profileImg = user?.imageUrl;
  if(profileImg){
    return <img src={profileImg} alt="icon" className='w-6 h-6 rounded-full object-cover '/>
  }
  return (
    <LuUser className="w-6 h-6 rounded-full bg-primary text-white"/>
  )
}
export default UserIcon