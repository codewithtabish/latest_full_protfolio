import React from 'react';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Badge } from '../ui/badge';
import { saveAndGetUser } from '@/actions/user';
import { APIRESPONSE } from '../../../types';
import { User } from '@prisma/client';
import HeaderAvatar from './header-avatar';

const HeaderRightSide = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    let gettingUser: User | null = null;
    let errorMessage: string | null = null;

    try {
        const response: APIRESPONSE<User> = await saveAndGetUser();

        if (response?.error) {
            errorMessage = response.message || "Error occurred while retrieving user.";
        } else {
            gettingUser = response.data || null;
        }
    } catch (error: any) {
        console.error("Failed to fetch or create user:", error);
        errorMessage = "Something went wrong. Please try again later.";
    }

    return (
        <div>
            {!user ? (
                <LoginLink postLoginRedirectURL='/' >
                    <Badge className='px-4 py-1'>
                        LOGIN
                    </Badge>
                </LoginLink>
            ) : (
                <>
                    {errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (
                        <>
                            <HeaderAvatar user={gettingUser} />

                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default HeaderRightSide;
