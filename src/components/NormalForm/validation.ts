import { z } from "zod";
export type TNormalForm = z.infer<typeof signUpSchema>;

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is req" }),
  email: z.string().email().min(1, { message: "email is req" }),
  password: z.string().min(8, "Password is Too Short"),
});
