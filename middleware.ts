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

  // Check if user is trying to access admin routes
  if (
    pathname.startsWith("/admin/dashboard") ||
    pathname.startsWith("/admin/pendaftar") ||
    pathname.startsWith("/admin/verifikasi") ||
    pathname.startsWith("/admin/pengumuman") ||
    pathname.startsWith("/admin/pengaturan")
  ) {
    if (!token) {
      // Redirect to admin login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    // In a real app, you'd also verify the token and check admin role here
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
}
