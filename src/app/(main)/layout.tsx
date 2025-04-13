import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { MainProvider } from '@/providers/main-provider'
import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6",
                // fontSans.variable
            )}
        >
            <ThemeProvider attribute="class" defaultTheme="light">
                <MainProvider>

                    <TooltipProvider delayDuration={0}>
                        {/* <Header /> */}
                        <Navbar />
                        {children}



                        {/* {children} */}


                    </TooltipProvider>
                </MainProvider>
            </ThemeProvider>
        </body>

    )
}

export default MainLayout
