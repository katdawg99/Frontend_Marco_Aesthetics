import { CheckoutStatusSection } from "./sections/CheckoutStatusSection/CheckoutStatusSection";
import { OrderSummarySection } from "./sections/OrderSummarySection/OrderSummarySection";
import { ProductCategoriesSection } from "./sections/ProductCategoriesSection/ProductCategoriesSection";
import { ProductMenuSection } from "./sections/ProductMenuSection/ProductMenuSection";

export const PadminiNeworder = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative bg-app-background min-h-screen translate-y-[-1rem] animate-fade-in opacity-0"
      data-model-id="26:1291"
    >
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full">
        <CheckoutStatusSection />
      </div>
      <div className="flex items-start relative self-stretch w-full flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <ProductCategoriesSection />
        </div>
        <div className="flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <ProductMenuSection />
        </div>
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <OrderSummarySection />
        </div>
      </div>
    </div>
  );
};
