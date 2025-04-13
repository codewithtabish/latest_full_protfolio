import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type Props = {
    user: User | null | any
}




const HeaderAvatar = ({ user }: Props) => {
    console.log('The profile pic is ', user?.profilePicture)
    return (
        <Avatar className='shadow-2xl border-2 border-gray-500'>
            <AvatarImage src={user?.profilePicture} />
            <AvatarFallback>{user?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

    )
}

export default HeaderAvatar