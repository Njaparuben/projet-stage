"use client"

import * as React from "react"
import { Plus } from 'lucide-react';
import {
    CollapsibleContent,
    CollapsibleTrigger,
    Collapsible

} from "@/components/ui/collapsible"

import { Button } from "@/components/ui/button";
import { Minus } from 'lucide-react';




const Faqs = ({ title, description }: { title?: string, description?: string }) => {

    const [open, setOpen] = React.useState<boolean>(false);
    const [counter, setCounter] = React.useState<number>(0);

    const reduceCounter = () => setCounter(p => p - 1)
    const incrementCounter = () => setCounter(p => p + 1)

    const handleOpen = (open: boolean) => {
        setOpen(open)
        if (open) incrementCounter()
    }

    const displayNumbers = React.useMemo(() => {
        return `Mon compteur est actuelement a ${counter}`
    }, [counter])

    React.useEffect(() => {
        if (open) incrementCounter()
        console.log("Effet declenche apres le rendu");
    }, [open]);

    React.useLayoutEffect(() => {
        console.log("Effet declenche avant le rendu");

    }, [])


    return (
        <Collapsible
            open={open}
            onOpenChange={setOpen}
        >
            <CollapsibleTrigger>
                <Button className="flex items-center justify-between space-x-3">

                    <div className="flex flex-col">
                        <h2>{title}</h2>
                        <span>{displayNumbers}</span>
                    </div>
                    {open ? <Minus /> : <Plus />}
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-8">
                <div className=" w-fit flex items-center justify-between gap-3">
                    <Button
                        variant={"outline"}
                        onClick={reduceCounter}
                        className="rounded-full p-2"
                    >
                        <Minus />
                    </Button>
                    <h2 className="text-3xl font-bold">{counter}</h2>
                    <Button
                        variant={"outline"}
                        onClick={incrementCounter}
                        className="rounded-full p-2"
                    >
                        <Plus />
                    </Button>
                </div>
                <p>{description}</p>
            </CollapsibleContent>
        </Collapsible>
    );
}


export default Faqs;