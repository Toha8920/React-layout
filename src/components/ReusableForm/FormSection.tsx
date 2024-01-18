import { ReactNode, useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from ".";

type TFormSection = {
  children: ReactNode;
};

export const FormSection = ({ children }: TFormSection) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn(" grid grid-cols-1 justify-items-center gap-5", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
