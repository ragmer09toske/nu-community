import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Music from '@/components/Music'
import "@uploadthing/react/styles.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { getServerSession } from 'next-auth'
import SessionProvider from './SessionProvider'
import { authOptions } from './api/auth/[...nextauth]/options'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nucleus',
  description: 'Empower your software development journey with Nucleus - your comprehensive hub for learning, tools, and solutions. Based in Lesotho, we are dedicated to helping individuals and businesses build a strong online presence. Explore our curated courses, discover essential development tools, leverage expert consulting services, and unleash the potential of custom software solutions tailored to your needs.',
  keywords: 'Nucleus,Nucleus devs, Nucleusdevs, Nucleus devs, software development, courses, tutorials,learn how to code, learn to programme, tools, consulting services, custom solutions, Lesotho, online presence, codiac, Nucleus Codiac, Nucleusdevs Academy, Nudevs Academy, Retsepile Shao'
}
import { Analytics } from "@vercel/analytics/react"
 
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <SessionProvider session={session}>
            <Analytics/>
            <body className={inter.className}>
              {children}
            </body>
          </SessionProvider>
          <Toaster />
          <SpeedInsights/>
        </ThemeProvider>
    </html>
  )
}
