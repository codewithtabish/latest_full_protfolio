import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react'
import { APIRESPONSE } from '../../../types';
import { saveAndGetUser } from '@/actions/user';
import { redirect } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

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
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased    px-6",
                // fontSans.variable
            )}
        >
            {children}

        </body >
    )
}

export default DashboardMainRoot
