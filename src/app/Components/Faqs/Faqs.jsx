"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { useState } from "react";
  import FaqsData from "@/app/Data/FaqsData";
  
  export function Faqs() {
    const [activeItem, setActiveItem] = useState("item-1");
  
    return (
      <div className="flex md:flex-row flex-col w-full sm:w-[1024px] gap-[32px] py-10 ">
        <div className="md:pl-[32px] max-sm:text-center w-[100%] mb-8 flex flex-col gap-[28px]">
          <h1 className="text-[20px] md:text-[32px] font-semibold text-[#141A30]">Got questions?</h1>
          <h1 className="text-[20px] md:text-[32px] font-semibold text-[#5176FE]">- We have answers.</h1>
        </div>
        <div className="max-sm:px-[16px] mx-auto">
          <Accordion
            type="single"
            collapsible
            value={activeItem} 
            onValueChange={(value) => setActiveItem(value)} 
            className="w-full"
          >
            {FaqsData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-[16px] font-bold">
                  {faq.title}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] font-normal text-[#4C4C4C]">
                  {faq.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    );
  }
  