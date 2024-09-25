

// export const config = {
//         /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//      */

//     matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
//   }


import { auth } from "@/auth";
import { NextRequest, NextResponse } from 'next/server';



  //all routes are protected by default

export function middleware(req: NextRequest) {
  const cookies = req.cookies
  console.log('middleware is running');
  const { nextUrl } = req
  let isLoggedIn
  if (process.env.NODE_ENV === 'development') {
    isLoggedIn = !!cookies.get('authjs.session-token')
  } else if (process.env.NODE_ENV === 'production') {
    isLoggedIn = !!cookies.get('__Secure-authjs.session-token')
  }

    // Public routes that don't require authentication
  const publicRoutes = ['/auth/error', '/auth/verify', '/', '/configure/*'];
  
  const authRoutes = ['/auth/signin']
  // Protected routes that require authentication
  // const protectedRoutes = [];

    // Redirect to dashboard if authenticated user tries to access auth routes public routes
    if (isLoggedIn && authRoutes.some(route => nextUrl.pathname.startsWith(route))) {
      
    
      return NextResponse.redirect(new URL('/', req.url));
    }
  

  // Allow access to public routes even without a token
  if (!isLoggedIn && publicRoutes.some(route => nextUrl.pathname.startsWith(route))) {
    console.log('public');

    return NextResponse.next();
  }


  // Redirect to signin if unauthenticated user tries to access protected routes
  // if (!isLoggedIn && protectedRoutes.some(route => nextUrl.pathname.startsWith(route))) {
  //   return NextResponse.redirect(new URL('/auth/signin', req.url));
  // }

  return NextResponse.next();

}




export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}