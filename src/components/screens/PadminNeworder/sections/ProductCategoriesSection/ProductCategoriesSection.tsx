import { useState } from "react";
import { Button } from "C:/Users/eturi/UNITY/IT-PROJECT-/Frontend_Marco_Aesthetics/src/components/ui/button.tsx";
import { Card, CardContent } from "C:/Users/eturi/UNITY/IT-PROJECT-/Frontend_Marco_Aesthetics/src/components/ui/card.tsx";
import { ScrollArea } from "C:/Users/eturi/UNITY/IT-PROJECT-/Frontend_Marco_Aesthetics/src/components/ui/scroll-area.tsx";

export const ProductCategoriesSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("Rings");

  const categories = [
    { name: "Rings", isActive: true },
    { name: "Bracelets", isActive: false },
    { name: "Earrings", isActive: false },
    { name: "Anklets", isActive: false },
  ];

  return (
    <aside className="flex w-[146px] h-[744px] items-center gap-2.5 pl-4 pr-0 pt-5 pb-0 shadow-[4px_0px_20px_#00000005] flex-col relative">
      <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <img
          className="relative w-[102px] h-[102px]"
          alt="Logo"
          src="https://c.animaapp.com/mg4n4284FdQmXB/img/logo.svg"
        />
      </header>

      <nav className="inline-flex items-start gap-5 flex-1 grow flex-col relative w-full">
        <ScrollArea className="h-full w-full">
          <div className="flex flex-col gap-5">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${(index + 1) * 200}ms]`}
              >
                {selectedCategory === category.name ? (
                  <Card className="px-0 py-[15px] self-stretch w-full bg-[#d4af37] h-[95px] rounded-md shadow-[0px_4px_20px_#0000001a] border-0">
                    <CardContent className="flex items-center justify-center p-0 h-full">
                      <Button
                        variant="ghost"
                        className="flex flex-col items-center justify-center h-full w-full bg-transparent hover:bg-transparent p-0"
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <span className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#000000] text-base whitespace-nowrap tracking-[0] leading-[normal]">
                          {category.name}
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="w-[110px] px-2.5 py-[15px] bg-white h-[95px] rounded-md shadow-[0px_4px_20px_#0000001a] border-0">
                    <CardContent className="flex items-center justify-center p-0 h-full">
                      <Button
                        variant="ghost"
                        className="flex flex-col items-center justify-center h-full w-full bg-transparent hover:bg-gray-50 p-0 transition-colors"
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <span className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-black text-base whitespace-nowrap tracking-[0] leading-[normal]">
                          {category.name}
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}

            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
              <Card className="w-[110px] px-2.5 py-[15px] bg-white h-[95px] rounded-md shadow-[0px_4px_20px_#0000001a] border-0">
                <CardContent className="flex items-center justify-center p-0 h-full">
                  <div className="flex flex-col w-[90px] items-center justify-center relative self-stretch">
                    <span className="[font-family:'SF_Compact-Thin',Helvetica] font-thin text-black text-sm tracking-[0] leading-[normal]">
                      {""}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </nav>
    </aside>
  );
};
