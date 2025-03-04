import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    // by adding signIn: '/login' into our pages option, the user will
    // be redirected to our custom login page,
    // rather than the NextAuth.js default page.
    signIn: '/login',
  },
  // Logic to protect your routes: next.js middleware
  // middleware is called before a request is completed, and it receives 
  // an object with the auth and request properties. 
  // The auth property contains the user's session, and the request property 
  // contains the incoming request.
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;