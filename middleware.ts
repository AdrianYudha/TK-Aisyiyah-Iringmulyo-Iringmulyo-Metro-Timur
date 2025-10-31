import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if user is trying to access protected routes
  if (pathname.startsWith("/dashboard")) {
    const token = request.cookies.get("token")?.value
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Check if admin is trying to access admin routes
  if (
    pathname.startsWith("/admin/dashboard") ||
    pathname.startsWith("/admin/pendaftar") ||
    pathname.startsWith("/admin/verifikasi") ||
    pathname.startsWith("/admin/pengumuman") ||
    pathname.startsWith("/admin/pengaturan")
  ) {
    const adminToken = request.cookies.get("adminToken")?.value
    if (!adminToken) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
}
