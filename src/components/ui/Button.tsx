import cn from "../../utils/cn";

const Button = ({
  className,
  outline,
}: {
  className: string;
  outline: string;
}) => {
  return (
    <div>
      <button
        className={cn(
          "btn-ghost",
          {
            "border-purple-500 bg-opacity-10": outline,
          },
          className
        )}
      >
        Click
      </button>
    </div>
  );
};

export default Button;
