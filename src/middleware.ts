import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

type TRole = keyof typeof roleBasedRoutes;

const AuthRoutes = ["/login", "/register"];
const roleBasedRoutes = {
  user: [/^\/user/],
  admin: [/^\/admin/],
};

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && roleBasedRoutes[user?.role as TRole]) {
    const routes = roleBasedRoutes[user?.role as TRole];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/user-dashboard",
    "/user-dashboard/:page*",
    "/admin-dashboard",
    "/admin-dashboard/:page*",
    "/login",
    "/register",
  ],
};
