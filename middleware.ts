import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if user is trying to access protected routes
  if (pathname.startsWith("/dashboard")) {
    // Note: Middleware can't access localStorage, so this check won't work for tokens stored there
    // Client-side protection will handle this
  }

  // Check if admin is trying to access admin routes
  if (
    pathname.startsWith("/admin/dashboard") ||
    pathname.startsWith("/admin/pendaftar") ||
    pathname.startsWith("/admin/verifikasi") ||
    pathname.startsWith("/admin/pengumuman") ||
    pathname.startsWith("/admin/pengaturan")
  ) {
    // Note: Middleware can't access localStorage, so this check won't work for tokens stored there
    // Client-side protection will handle this
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
}
