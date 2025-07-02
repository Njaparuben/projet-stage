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

    
    return (
       <Collapsible>
            <CollapsibleTrigger>
                <Button>
            
                    <h2>{title}</h2>
                    <Plus />
                </Button>  
            </CollapsibleTrigger>
            <CollapsibleContent>
                <p>{description}</p>
            </CollapsibleContent>
        </Collapsible>
    );
}


export default Faqs;