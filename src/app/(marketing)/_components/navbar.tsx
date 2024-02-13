import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    return ( 
        <>
            <div className="flex fixed top-0 w-full h-14 px-4 shadow-sm items-center bg-white border-b">
                <div className="flex items-center w-full justify-between mx-auto md:max-w-screen-2xl">
                    <Logo /> 
                    <div className="flex items-center justify-between w-full md:w-auto space-x-4 md:block">
                            <Button size={'sm'} variant={'outline'} asChild>
                                <Link href={'/sign-in'}>
                                    Login
                                </Link>
                            </Button>
                            <Button size={'sm'} asChild className="bg-black">
                                <Link href={'/sign-up'}>
                                    Get Trello for free
                                </Link>
                            </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

