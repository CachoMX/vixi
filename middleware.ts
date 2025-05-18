import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get hostname (e.g. www.vixi.agency, vixi.agency)
  const hostname = request.headers.get('host') || ''

  // If hostname starts with www., redirect to non-www
  if (hostname.startsWith('www.')) {
    const newUrl = `https://${hostname.replace('www.', '')}${request.nextUrl.pathname}${request.nextUrl.search}`
    return NextResponse.redirect(newUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}