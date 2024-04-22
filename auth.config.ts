import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import SignInSchema from './schemas/SigninSchema';
import { NextAuthConfig } from 'next-auth';
import axios from 'axios';

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
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
