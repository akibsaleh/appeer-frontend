import * as z from 'zod';

const SignupSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) ctx.addIssue({ code: 'custom', message: 'Password do not match', path: ["confirmPassword"] });
  });

export default SignupSchema;
