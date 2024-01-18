import { createContext } from "react";
import cn from "../../utils/cn";
import { TForm } from "../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TFormType = {
  double: boolean;
};

export const FormElementContext = createContext<TFormType | undefined>(
  undefined
);

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  const testing: TFormType = {
    double: double,
  };

  return (
    <FormElementContext.Provider value={testing}>
      <form
        onSubmit={onSubmit as SubmitHandler<FieldValues>}
        className={cn(
          "border border-gray-300 shadow-sm rounded-lg max-w-md p-4 mx-auto ",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
