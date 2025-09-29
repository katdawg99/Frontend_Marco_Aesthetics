
export const CheckoutStatusSection = (): JSX.Element => {
  return (
    <header className="flex items-start justify-between px-4 py-0.5 relative self-stretch w-full flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="relative w-[94px] h-5">
        <div className="absolute top-0 left-[25px] w-[69px] h-5 flex">
          <div className="mt-[3px] w-[61px] h-3.5 ml-2 [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#000000] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
            Mon Jun 3
          </div>
        </div>

        <div className="absolute top-[3px] left-0 [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#000000] text-xs tracking-[-0.24px] leading-[normal] whitespace-nowrap">
          9:41
        </div>
      </div>

      <div className="relative w-[98.48px] h-3.5">
        <img
          className="absolute w-[16.76%] h-[71.43%] top-[14.29%] left-0"
          alt="Combined shape"
          src="https://c.animaapp.com/mg4n4284FdQmXB/img/combined-shape.svg"
        />

        <img
          className="absolute w-[14.27%] h-[71.43%] top-[12.50%] left-[21.30%]"
          alt="Combined shape"
          src="https://c.animaapp.com/mg4n4284FdQmXB/img/combined-shape-1.svg"
        />

        <div className="absolute top-0 right-0 w-[60px] h-3.5 gap-0.5 flex justify-end">
          <div className="w-[33px] h-3.5 [font-family:'SF_Pro-Medium',Helvetica] font-normal text-[#000000] text-xs text-right leading-[normal] whitespace-nowrap">
            <span className="font-medium tracking-[0]">100%</span>
          </div>

          <div className="mt-px w-[26.5px] h-3 bg-[url(https://c.animaapp.com/mg4n4284FdQmXB/img/combined-shape-2.svg)] bg-[100%_100%] flex justify-end">
            <div className="mt-0.5 w-5 h-2 mr-[4.5px] bg-[#000000] rounded-[1.5px]" />
          </div>
        </div>
      </div>
    </header>
  );
};
