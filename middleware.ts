import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

// export default clerkMiddleware(async (auth, req) => {
//   const { userId, redirectToSignIn } = await auth(); // 

  
//   if (isAdminRoute(req)) {
//     const isAdminUser = userId === process.env.ADMIN_USER_ID;
//     if (!isAdminUser) {
//       return NextResponse.redirect(new URL('/', req.url));
//     }
//     return NextResponse.next(); 
//   }

  
//   if (isPublicRoute(req)) {
//     return NextResponse.next();
//   }

  
//   if (!userId) {
//     return redirectToSignIn();
//   }

//   return NextResponse.next();
// });

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  console.log("Middleware - User ID:", userId);

  if (isAdminRoute(req)) {
    const isAdminUser = userId === process.env.ADMIN_USER_ID;
    console.log("Middleware - Is Admin User:", isAdminUser);
    if (!isAdminUser) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next();
  }

  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  if (!userId) {
    return redirectToSignIn();
  }

  return NextResponse.next();
});
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
