import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react'
import { APIRESPONSE } from '../../../types';
import { saveAndGetUser } from '@/actions/user';
import { redirect } from 'next/navigation';

const DashboardMainRoot = async ({ children }: { children: React.ReactNode }) => {
    let gettingUser: User | null = null;
    let errorMessage: string | null = null;

    try {
        const response: APIRESPONSE<User> | any = await saveAndGetUser();

        if (response?.error) {
            errorMessage = response.message || "Error occurred while retrieving user.";
        } else {
            gettingUser = response.data || null;
        }
    } catch (error: any) {
        console.error("Failed to fetch or create user:", error);
        errorMessage = "Something went wrong. Please try again later.";
    }
    if (!gettingUser || !gettingUser?.isAdmin) {
        redirect("/")

    }

    return (
        <div>
            {children}

        </div>
    )
}

export default DashboardMainRoot
