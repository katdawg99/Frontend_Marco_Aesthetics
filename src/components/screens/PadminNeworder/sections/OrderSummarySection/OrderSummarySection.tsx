import {
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Button } from "C:/Users/eturi/UNITY/IT-PROJECT-/Frontend_Marco_Aesthetics/src/components/ui/button.tsx";
import { Card, CardContent } from "C:/Users/eturi/UNITY/IT-PROJECT-/Frontend_Marco_Aesthetics/src/components/ui/card.tsx";

export const OrderSummarySection = (): JSX.Element => {
  const orderItems = [
    {
      id: 1,
      name: "Gold Bracelet (Large)",
      price: "K5.00",
      quantity: 1,
      image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image-7.png",
    },
    {
      id: 2,
      name: "Gold Bracelet (Small)",
      price: "K5.00",
      quantity: 1,
      image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image-8.png",
    },
    {
      id: 3,
      name: "Gold Bracelet (Medium)",
      price: "K5.00",
      quantity: 1,
      image: "https://c.animaapp.com/mg4n4284FdQmXB/img/image-9.png",
    },
  ];

  return (
    <aside className="flex flex-col w-full max-w-[309px] h-[744px] items-start gap-5 pt-[34px] pb-5 px-2.5 bg-white shadow-[-4px_0px_20px_#00000005] translate-y-[-1rem] animate-fade-in opacity-0">
      <header className="justify-between flex items-center w-full">
        <h2 className="[font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
          Current Sale
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5 p-0 hover:bg-transparent"
        >
          <Trash2Icon className="h-5 w-5" />
        </Button>
      </header>

      <div className="justify-between w-full flex flex-col items-start flex-1 grow">
        <div className="inline-flex flex-col h-[607px] items-start gap-2.5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {orderItems.map((item, index) => (
            <Card
              key={item.id}
              className="w-[289px] shadow-[0px_4px_20px_#0000000d] border-0 translate-y-[-1rem] animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${400 + index * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="p-0">
                <div className="bg-white shadow-[0px_4px_20px_#00000005] flex items-start w-full">
                  <img
                    className="w-[72px] h-[72px] object-cover"
                    alt="Product"
                    src={item.image}
                  />

                  <div className="items-start gap-2.5 pt-5 pb-5 px-2.5 flex-1 grow flex">
                    <div className="flex-col items-start gap-5 flex-1 grow flex">
                      <h3 className="self-stretch [font-family:'SF_Pro-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-5">
                        {item.name}
                      </h3>

                      <div className="inline-flex items-center justify-end gap-[30px]">
                        <Button
                          size="icon"
                          className="w-[30px] h-[30px] bg-[#d4af37] hover:bg-[#c19b26] rounded-[15px] p-0"
                        >
                          <MinusIcon className="w-4 h-4 text-black" />
                        </Button>

                        <span className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-5 whitespace-nowrap">
                          {item.quantity}
                        </span>

                        <Button
                          size="icon"
                          className="w-[30px] h-[30px] bg-[#d4af37] hover:bg-[#c19b26] rounded-[15px] p-0"
                        >
                          <PlusIcon className="w-4 h-4 text-black" />
                        </Button>
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-end justify-between self-stretch">
                      <div className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
                        {item.price}
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-[15px] w-[15px] p-0 hover:bg-transparent"
                      >
                        <XIcon className="h-[15px] w-[15px]" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="w-[289px] h-12 justify-between pl-5 pr-2.5 py-3 mt-[-9px] bg-[#d4af37] hover:bg-[#c19b26] rounded-md shadow-[0px_4px_20px_#0000000d] text-black translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#000000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            K15.00
          </span>

          <div className="inline-flex items-center justify-center gap-[5px]">
            <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#000000] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Checkout
            </span>
            <ChevronRightIcon className="w-6 h-6" />
          </div>
        </Button>
      </div>
    </aside>
  );
};
