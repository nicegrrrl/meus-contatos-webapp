import { z } from "zod";

export const registerFormSchema = z
  .object({
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
    password: z
      .string()
      .min(8, "É necessário pelo menos 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ter pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ter pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário ter pelo menos um número")
      .refine((data) => data.trim() !== "", {
        message: "A senha é obrigatória.",
      }),
    confirmPassword: z
      .string()
      .min(8, "É necessário confirmar a senha")
      .refine((data) => data.trim() !== "", {
        message: "A confirmação de senha é obrigatória.",
      }),
    phoneNumber: z
      .string()
      .min(10, "É necessário pelo menos 10 caracteres")
      .max(18, { message: "O telefone pode ter no máximo 18 caracteres." }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "A senhas não correspondem",
    path: ["confirmPassword"],
  });
