import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
   publicRoutes: ['/site','/api/uploadthing']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};