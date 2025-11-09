import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Extract token from cookies or Authorization header
  const token = request.cookies.get('auth-token')?.value || 
                request.headers.get('Authorization')?.replace('Bearer ', '')

  // Check if user is trying to access protected routes
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // For admin routes, we'll implement role checking in the component itself
  // since we're using localStorage for tokens rather than cookies
  // The component will check localStorage for admin token and role
  
  // Note: For admin routes, we're not redirecting here since we use localStorage
  // which can't be accessed by middleware. The role checking happens in components.

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
}
