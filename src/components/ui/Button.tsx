import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;

type TButtonOptions = {
  variant?: TVariant;
};

type TVariant = "solid" | "ghost" | "outline";

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };

    return (
      <div>
        <button
          {...rest}
          ref={ref}
          className={cn(getVariant(variant), className)}
        >
          Click
        </button>
      </div>
    );
  }
);

export default Button;

// type TRef = HTMLButtonElement;

// type TButtonOptions = {
//   variant?: TVariant;
// };

// type TVariant = "solid" | "ghost" | "outline";

// type TButton = DetailedHTMLProps<
//   ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// > &
//   TButtonOptions;
