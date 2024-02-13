import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    return ( 
        <>
            <div className="fixed bottom-0 w-full p-4 bg-slate-100 border-t">
                <div className="flex items-center justify-between w-full mx-auto md:max-w-screen-2xl">
                    <Logo /> 
                    <div className="flex items-center justify-between w-full md:w-auto space-x-4 md:block">
                            <Button size={'sm'} variant={'ghost'}>
                                    Privacy Policy
                            </Button>
                            <Button size={'sm'} variant={'ghost'}>
                                    Terms and Conditions
                            </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

