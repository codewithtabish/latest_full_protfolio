'use server'

import React from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';



const HeaderRightSide = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div>
            {
                !user ?
                    <LoginLink postLoginRedirectURL='/'>
                        lOGIN
                    </LoginLink> :
                    (
                        <>
                            <p>{user?.given_name}</p>
                            <LogoutLink postLogoutRedirectURL='/'>
                                Logout
                            </LogoutLink>
                        </>
                    )

            }


        </div>
    )
}

export default HeaderRightSide
