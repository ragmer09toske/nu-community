import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Music from '@/components/Music'
// import { dark } from '@clerk/themes'
import "@uploadthing/react/styles.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
// import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nucleus',
  description: 'Empower your software development journey with Nucleus - your comprehensive hub for learning, tools, and solutions. Based in Lesotho, we are dedicated to helping individuals and businesses build a strong online presence. Explore our curated courses, discover essential development tools, leverage expert consulting services, and unleash the potential of custom software solutions tailored to your needs.',
  keywords: 'Nucleus,Nucleus devs, Nucleusdevs, Nucleus devs, software development, courses, tutorials,learn how to code, learn to programme, tools, consulting services, custom solutions, Lesotho, online presence, codiac'
}

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <body className={inter.className}>{children}</body>
          <Toaster />
          <SpeedInsights/>
        </ThemeProvider>
    </html>
  )
}
