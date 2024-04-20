import * as z from 'zod';

const SignInSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
  });

export default SignInSchema;