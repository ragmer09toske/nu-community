import NextAuth from "next-auth"
import { authOptions } from "./options"
// import GoogleProvider from "next-auth/providers/google";
// import NextAuth from "next-auth"

// const handler = NextAuth({
//     providers: [
//       GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID!,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET!
//       })
//     ],
// })

// export { handler as GET, handler as POST }
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}