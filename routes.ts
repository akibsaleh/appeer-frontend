/**
 * An array of routes accessible publicly.
 * These routes do not require authentication.
 * @type {string[]}
 */

export const publicRoutes: string[] = ['/', '/contact'];

/**
 * An array of routes used for authentication.
 * These routes will redirect user to /dashboard page is user is logged in.
 * @type {string[]}
 */

export const authRoutes: string[] = ['/auth/signin', '/auth/signup'];

/**
 * The prefix for api authentication routes.
 * routes that start with this prefix will be used for Api authentication purposes.
 * @type {string}
 */

export const apiAuthPrefix: string = '/api/auth';

/**
 * Default redirect path after login.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT: string = '/dashboard';




