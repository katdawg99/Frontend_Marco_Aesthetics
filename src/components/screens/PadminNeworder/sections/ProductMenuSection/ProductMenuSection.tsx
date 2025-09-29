import { SearchIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "C:/Users/eturi/UNITY/IT-PROJECT-/Frontend_Marco_Aesthetics/src/components/ui/card.tsx";
import { Input } from "C:/Users/eturi/UNITY/IT-PROJECT-/Frontend_Marco_Aesthetics/src/components/ui/input.tsx";
// Update the import path to the correct location of ScrollArea
import { ScrollArea } from "C:/Users/eturi/UNITY/IT-PROJECT-/Frontend_Marco_Aesthetics/src/components/ui/scroll-area.tsx";

const productData = [
  {
    id: 1,
    name: "Gold Ring (Large)",
    price: "K5.00",
    image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image.png",
  },
  {
    id: 2,
    name: "Gold Ring (Medium)",
    price: "K5.00",
    image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image-1.png",
  },
  {
    id: 3,
    name: "Gold Ring (Small)",
    price: "K5.00",
    image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image-2.png",
  },
  {
    id: 4,
    name: "Silver Ring (Large)",
    price: "K5.00",
    image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image-3.png",
  },
  {
    id: 5,
    name: "Silver Ring (Medium)",
    price: "K5.00",
    image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image-4.png",
  },
  {
    id: 6,
    name: "Silver Ring (Small)",
    price: "K5.00",
    image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image-5.png",
  },
];

const emptySlots = [
  {
    id: 7,
    image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image-6.png",
  },
  {
    id: 8,
    image: null,
  },
  {
    id: 9,
    image: null,
  },
];

export const ProductMenuSection = (): JSX.Element => {
  return (
    <section className="h-[744px] gap-[30px] pt-[30px] pb-0 px-0 flex flex-col items-start flex-1 grow translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="gap-[136px] flex items-center w-full flex-[0_0_auto]">
        <div className="flex h-10 items-center gap-2.5 px-[30px] py-[11px] flex-1 grow bg-[#ffffff] rounded-[10px] shadow-[0px_1px_20px_#00000005] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <SearchIcon className="w-6 h-6 text-grey" />
          <Input
            placeholder="Search"
            className="border-0 shadow-none p-0 h-auto bg-transparent [font-family:'SF_Pro-Medium',Helvetica] font-medium text-grey text-base focus-visible:ring-0"
          />
        </div>
      </div>

      <ScrollArea className="flex-1 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex flex-col items-start gap-5 pr-4">
          <div className="grid grid-cols-3 gap-5 w-full">
            {productData.map((product, index) => (
              <Card
                key={product.id}
                className="h-[250px] shadow-[0px_4px_20px_#00000005] bg-[#ffffff] border-0 cursor-pointer hover:shadow-lg transition-shadow translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${600 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="flex flex-col items-center gap-2.5 px-2.5 py-5 h-full">
                  <img
                    className="w-[122px] h-[122px] object-contain"
                    alt={product.name}
                    src={product.image}
                  />
                  <div className="flex flex-col items-center gap-2.5 flex-1 w-full">
                    <div className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#000000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      {product.price}
                    </div>
                    <div className="flex h-[58px] items-start justify-center gap-2.5 w-full">
                      <div className="flex-1 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#000000] text-base text-center tracking-[0] leading-[normal]">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-5 w-full">
            {emptySlots.map((slot, index) => (
              <Card
                key={slot.id}
                className="h-[250px] shadow-[0px_4px_20px_#00000005] bg-[#ffffff] border-0 translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${1200 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="flex flex-col items-center gap-2.5 px-2.5 py-5 h-full">
                  {slot.image && (
                    <img
                      className="w-[105.92px] h-[90px] object-contain"
                      alt="Product placeholder"
                      src={slot.image}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollArea>
    </section>
  );
};
