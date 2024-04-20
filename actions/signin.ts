'use server';
import SignInSchema from '@/schemas/SigninSchema';
import { signIn } from '@/auth';
import * as z from 'zod';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';

const signInAction = async (values: z.infer<typeof SignInSchema>) => {
  const valid = SignInSchema.safeParse(values);
  if (!valid.success) {
    return { error: 'Invalid Credentials' };
  }

  const { email, password } = valid.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid Credentials' };
        default:
          return { error: 'Unknown Error' };
      }
    }
    throw error;
  }
  return { success: 'Account created successfully' };
};

export default signInAction;