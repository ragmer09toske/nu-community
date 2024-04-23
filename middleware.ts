import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
   publicRoutes: ['/','/api/uploadthing']
});
