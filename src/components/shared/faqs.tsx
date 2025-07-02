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




const Faqs = ({title,description}:{title?:string,description?:string}) => {

    const [open, setOpen]= React.useState(false);

    
    return (
       <Collapsible 
       open={open}
       onOpenChange={setOpen}
        >
            <CollapsibleTrigger>
                <Button className="flex items-center justify-between space-x-3">

                    <h2>{title}</h2>
                    {open ? <Minus/> : <Plus />}
                    
                </Button>  
            </CollapsibleTrigger>
            <CollapsibleContent>
                <p>{description}</p>
            </CollapsibleContent>
        </Collapsible>
    );
}


export default Faqs;