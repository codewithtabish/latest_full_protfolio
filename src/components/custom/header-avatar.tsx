import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CustomDropdown, DropdownMenu } from './custom-dropdown';
import Link from 'next/link'; // Import Link from Next.js

type Props = {
    user: User | null | any;
};

const HeaderAvatar = ({ user }: Props) => {
    console.log('The profile pic is ', user?.profilePicture);

    return (
        <CustomDropdown
            trigger={
                <Avatar className="shadow-2xl border-2 border-gray-500">
                    <AvatarImage src={user?.profilePicture} />
                    <AvatarFallback>{user?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
            }
        >
            <DropdownMenu
                label="My Account"
                items={[
                    user?.isAdmin && (
                        <Link href="/dashboard" key="dashboard">
                            Dashboard
                        </Link>
                    ),
                    'Billing',
                    'Team',
                    'Subscription',
                ]}
            />
        </CustomDropdown>
    );
};

export default HeaderAvatar;
