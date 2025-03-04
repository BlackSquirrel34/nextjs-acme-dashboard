import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
// initializing NextAuth.js with the authConfig object and exporting the 
// auth property. We're also using the matcher option from Middleware to 
// specify that it should run on specific paths.
// With middleware, the protected routes will not even start rendering until 
// the Middleware verifies the authentication
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};