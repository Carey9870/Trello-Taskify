import Link from "next/link";
import { Medal } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home(){
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex p-2 items-center shadow-sm border rounded-xl justify-center gap-x-2 bg-orange-300 mb-3">
                        <Medal className="h-4 w-4" />
                        <h2 className="uppercase font-bold p-2 text-amber-700">NO 1 task Management</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center mb-4">
                        <h1 className="font-bold text-3xl md:text-6xl mb-3">Trello helps teams move <br /> </h1>
                        <h1 className="font-bold text-white text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 p-2 w-fit rounded-lg">work forward.</h1>
                    </div>
                    <div className="flex text-center items-center justify-center">
                        <h2 className="text-center max-w-xs md:max-w-2xl text-muted-foreground items-center justify-center">Collaborate, manage projects and reach new productivity peaks.
                            From high rises to the home office, the way your teams works is
                            unique - accomplish it all with Trello.
                        </h2>
                    </div>
                </div>
                <div className="mt-4">
                    <Button size={'lg'} asChild className="bg-black hover:bg-black">
                        <Link href={'/sign-up'}>
                            Get Trello for free
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    )
}

