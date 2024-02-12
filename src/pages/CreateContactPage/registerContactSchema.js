import { z } from "zod";

export const registerContactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." })
    .max(50, { message: "O email pode ter no máximo 50 caracteres." })
    .refine((data) => data.trim() !== "", {
      message: "O nome é obrigatório.",
    }),
  email: z
    .string()
    .min(5, { message: "O email deve ter pelo menos 5 caracteres." })
    .max(150, { message: "O email pode ter no máximo 150 caracteres." })
    .refine((data) => data.trim() !== "", {
      message: "O email é obrigatório.",
    }),
  phoneNumber: z
    .string()
    .min(10, "É necessário pelo menos 10 caracteres")
    .max(18, { message: "O telefone pode ter no máximo 18 caracteres." }),
});
