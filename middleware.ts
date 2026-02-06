import { NextRequest, NextResponse } from "next/server";
// import type { NextRequest } from "next/request";

// 1. Tentukan rute mana saja yang publik (bisa diakses tanpa login)
const publicRoutes = ["/login", "/register", "/"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 2. Ambil token dari cookie
  const token = request.cookies.get("session_token")?.value;

  // 3. Cek apakah user sedang berada di rute publik
  const isPublicRoute = publicRoutes.includes(pathname);

  // LOGIKA PROTEKSI:

  // A. Jika user belum login dan mencoba akses rute privat (dashboard, dll)
  if (!token && !isPublicRoute) {
    const loginUrl = new URL("/login", request.url);
    // Simpan halaman asal agar setelah login bisa balik lagi (optional)
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // B. Jika user SUDAH login tapi mencoba akses halaman login/register
  if (token && isPublicRoute && pathname !== "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// 4. KONFIGURASI MATCHER (Kunci Efisiensi)
export const config = {
  /*
   * Match semua request rute kecuali:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * - public folder (public assets)
   */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
