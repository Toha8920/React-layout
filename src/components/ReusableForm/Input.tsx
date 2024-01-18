export const Input = ({ label, register, errors, type }) => {
  return (
    <div className="max-w-md w-full">
      <label className="block w-full" htmlFor="name">
        {label}
      </label>
      <input className="w-full" type={type} id="name" {...register} />
      {errors.name && (
        <span className="text-xs text-red-500">{errors.name.message}</span>
      )}
    </div>
  );
};
