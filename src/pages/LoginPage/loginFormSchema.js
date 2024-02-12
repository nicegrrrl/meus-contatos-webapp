import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(5, { message: "O email deve ter pelo menos 5 caracteres." })
    .max(150, { message: "O email pode ter no máximo 150 caracteres." })
    .refine((data) => data.trim() !== "", {
      message: "O email é obrigatório.",
    }),
  password: z.string().refine((data) => data.trim() !== "", {
    message: "A senha é obrigatória.",
  }),
});
