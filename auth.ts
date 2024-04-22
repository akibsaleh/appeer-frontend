import authConfig from './auth.config';
import NextAuth from 'next-auth';
import { JWT } from '@auth/core/jwt';
import { User } from '@auth/core/types';
import getAuthUser from './data/getAuthUser';

declare module '@auth/core/types' {
  interface User {
    role?: 'TEACHER' | 'STUDENT';
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
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
    refreshTokenExpiresAt: Date;
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
        session.user.refreshTokenExpiresAt = token.refreshTokenExpiresAt;
      }
      return session;
    },
    async jwt({ token, user, trigger, session, profile, account }) {
      if (!token.sub) return token;
      if (user) {
        token.role = user.role;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.refreshTokenExpiresAt = user.refreshTokenExpiresAt;
      };
      if(account?.provider === 'google' && profile) {
        const oAuthUser = await getAuthUser(`${profile?.given_name} ${profile?.family_name}`, profile?.email as string, profile?.picture, account.id_token as string, 'STUDENT');
        token.role = oAuthUser.role;
        token.accessToken = oAuthUser.accessToken;
        token.refreshToken = oAuthUser.refreshToken;
        token.refreshTokenExpiresAt = oAuthUser.refreshTokenExpiresAt;
      }
      // console.log(new Date(token.refreshTokenExpiresAt) < new Date(Date.now())); 
      if (trigger === 'update') return {
        ...token,
        accessToken: session.user.accessToken,
        refreshToken: session.user.refreshToken,
        refreshTokenExpiresAt: session.user.refreshTokenExpiresAt,
      };
      return token;
    },
  },
  ...authConfig,
});



function get0AuthUser(arg0: string, email: string | null | undefined, picture: any, id_token: string | undefined, arg4: string) {
  throw new Error('Function not implemented.');
}
// {
//   iss: 'https://accounts.google.com',
//   azp: '60772464529-a0grv7h08eo91ed8kiv4s8r1v1p387nu.apps.googleusercontent.com',
//   aud: '60772464529-a0grv7h08eo91ed8kiv4s8r1v1p387nu.apps.googleusercontent.com',
//   sub: '106258363433918663786',
//   email: 'akibzihan@gmail.com',
//   email_verified: true,
//   at_hash: 'BzMoRohL8gpV-B-9wWWAfQ',
//   name: 'Akib Saleh',
//   picture: 
//     'https://lh3.googleusercontent.com/a/ACg8ocKMB4gUoIr9Vse_-pbXfmxijRoTGs5vZxHh4t7hllFiA7Ad8eY=s96-c',
//   given_name: 'Akib',
//   family_name: 'Saleh',
//   iat: 1713776143,
//   exp: 1713779743
// }

// {
//   access_token: 
//     'ya29.a0Ad52N3_5f-q9BxOm9iHyK78_iXhgvQaD-tOBxdgKhRKkjr6pQs8qmCEEqrHIVcRboYYwxf3D_s6caN0F2pRtC9L3RTnkZwZuoZ_U4DI4G2Cl0dheE89Vuupy25fM1cyAdwu2NUJX3MSHMxgSE2dRJxaClJgaLiZM1SfJaCgYKAbsSARESFQHGX2Miy6sY_YSDfs1S4I6PdIMreQ0171',
//   expires_in: 3599,
//   scope: 
//     'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
//   token_type: 'bearer',
//   id_token: 
//     'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjZTExYWVjZjllYjE0MDI0YTQ0YmJmZDFiY2Y4YjMyYTEyMjg3ZmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2MDc3MjQ2NDUyOS1hMGdydjdoMDhlbzkxZWQ4a2l2NHM4cjF2MXAzODdudS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjYwNzcyNDY0NTI5LWEwZ3J2N2gwOGVvOTFlZDhraXY0czhyMXYxcDM4N251LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MjU4MzYzNDMzOTE4NjYzNzg2IiwiZW1haWwiOiJha2liemloYW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJLN2ZWangybGctVXVMV20tTFJlWlZnIiwibmFtZSI6IkFraWIgU2FsZWgiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS01CNGdVb0lyOVZzZV8tcGJYZm14aWpSb1RHczV2WnhIaDR0N2hsbEZpQTdBZDhlWT1zOTYtYyIsImdpdmVuX25hbWUiOiJBa2liIiwiZmFtaWx5X25hbWUiOiJTYWxlaCIsImlhdCI6MTcxMzc3NjI2OSwiZXhwIjoxNzEzNzc5ODY5fQ.uxZdqINOekOWWXdIYZB1iRBbSTbELp1iR2v6u44IoGoOoirX9HkhHhh5i8dC7tRLHgjk9W-CGtqejUz7DmU9cdizTldbxY50Pt7Vv8qs2B-DokwQVxSDwgRZ-29iEkmN_h_rX43QCiXktWJygDXgcO_QneIvhK-KMymQFOfQ4M2XFNblRJmWJTgib4tqHN3lvGC3x6ulFfz1s88KPQcZxj6_KwTutqWRtPVeOspMAxnR0qZTeFTjfVv650qh38Tm3J3vGjwRqvYPh7FeAF_mGbjz40a77CgWts9hQPABerZYtslBNwrt6vdxomliTw_oZcxh9OIc29txbL0cq2-z5Q',
//   expires_at: 1713779867,
//   provider: 'google',
//   type: 'oidc',
//   providerAccountId: '106258363433918663786'
// }