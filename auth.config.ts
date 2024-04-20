import Credentials from 'next-auth/providers/credentials';
import SignInSchema from './schemas/SigninSchema';
import { NextAuthConfig } from 'next-auth';
import axios from 'axios';

export default {
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const validatedFiles = SignInSchema.safeParse(credentials);

        if (!validatedFiles.success) return null;

        const { email, password } = validatedFiles.data;

        return await axios({
          method: 'POST',
          url: 'http://localhost:3010/auth/login',
          data: { email, password },
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((res) => {
          if (res.status === 201) return res.data;
          return null;
        });
      },
    }),
  ],
} satisfies NextAuthConfig;
