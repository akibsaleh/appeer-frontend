import authConfig from './auth.config';
import NextAuth from 'next-auth';
import { JWT } from '@auth/core/jwt';
import { User } from '@auth/core/types';

declare module '@auth/core/types' {
  interface User {
    role?: 'TEACHER' | 'STUDENT';
    accessToken: string;
    refreshToken: string;
  }
  interface Session {
    user: User;
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    role?: 'TEACHER' | 'STUDENT';
    accessToken: string;
    refreshToken: string;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ account, user }) {
      return true;
    },
    async session({ session, token, user }) {
      if (token && token.sub) {
        session.userId = token.sub!;
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (!token.sub) return token;
      if (user) {
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
  },
  ...authConfig,
});

/**
 * You have the right idea. After the refresh token expires (in your case, after 7 days), you'll need to implement a way to obtain a new set of access and refresh tokens. Here's a general approach you can follow:

1. **Create a new API route for token renewal**: Create a new API route (e.g., `/api/auth/renew`) in your Next.js application. This route will be responsible for handling the token renewal process.

2. **Check for the presence of a valid refresh token**: In this API route, first check if the client has sent a valid refresh token. You can verify the refresh token against the one stored in your database or any other storage mechanism you're using.

3. **If the refresh token is valid and not expired**:
   - Generate a new access token and refresh token pair.
   - Update the refresh token in your storage (database, etc.) with the new refresh token.
   - Return the new access token and refresh token to the client.

4. **If the refresh token is expired or invalid**:
   - Respond with an error indicating that the client needs to re-authenticate.

5. **On the client-side**:
   - When the refresh token expires (after 7 days in your case), send a request to the `/api/auth/renew` route with the old refresh token.
   - If the response contains a new access token and refresh token, update the stored tokens in your client-side state or storage (e.g., cookies, local storage).
   - If the response indicates an error or that the client needs to re-authenticate, redirect the user to the login page or initiate the authentication flow again.

6. **Implement token storage and management**:
   - Decide where to store the access token and refresh token on the client-side (e.g., in-memory state, cookies, or local storage).
   - Implement logic to send the access token with each protected API request to your Nest.js backend.
   - When the access token expires, use the refresh token to obtain a new access token from the `/api/auth/renew` route before sending the API request.

By following this approach, you can handle the expiration of both the access token and the refresh token. When the refresh token expires, the client will need to initiate the authentication flow again, and a new set of tokens will be issued.

Keep in mind that this is a general approach, and you may need to adjust it based on your specific requirements, such as additional security measures, token revocation, or other factors.
 */