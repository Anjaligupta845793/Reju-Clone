import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
export async function middleware(request) {
  console.log("Middleware executed for:", request.nextUrl.pathname);
  const token = await request.cookies.get("token")?.value;

  const publicRoutes = ["/login", "/register"];
  const currentPath = request.nextUrl.pathname.toLowerCase();

  if (token && publicRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const isPublicRoute = publicRoutes.includes(currentPath);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect to login if the user is not authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  const decoded = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.jwt_secret)
  );

  // Attach user data to request object if needed

  return NextResponse.next();
}

// Optionally, specify which routes the middleware should run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
/* export const config = {
  matcher: [
    "/new",
    "/",
    "/header",
    "/theme",
    "/Login",
    "/register",
    "/api/:path*",
  ], // Apply middleware to specific routes
}; */
