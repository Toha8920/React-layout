import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TNormalForm, signUpSchema } from "./validation";
import InputField from "./InputField";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({ resolver: zodResolver(signUpSchema) });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  console.log(watch("name", "email"));

  const double = true;

  return (
    <FormProvider {...methods}>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "border border-gray-300 shadow-sm rounded-lg max-w-md p-4 mx-auto ",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        <div
          className={cn(" grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="max-w-md w-full">
            <label className="block w-full" htmlFor="something">
              something
            </label>
            <InputField />
          </div>

          <div className="max-w-md w-full">
            <label className="block w-full" htmlFor="name">
              Name
            </label>
            <input
              className="w-full"
              type="text"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="max-w-md w-full">
            <label className="block w-full" htmlFor="email">
              Email
            </label>
            <input
              className="w-full"
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="max-w-md w-full">
            <label className="block w-full" htmlFor="password">
              Password
            </label>
            <input
              className="w-full"
              type="password"
              id="password"
              {...register("password", { minLength: 8 })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
        </div>
        <div
          className={cn(" grid grid-cols-1 justify-items-center gap-5", {
            "md:grid-cols-2 ": double,
          })}
        >
          <div className=" w-full max-w-md col-start-1 md:col-start-2 flex justify-end my-8">
            <Button className=" md:w-fit w-[430px]" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default NormalForm;
