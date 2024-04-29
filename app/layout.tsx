import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Music from '@/components/Music'
import "@uploadthing/react/styles.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nucleus',
  description: 'Welcome to Nucleus, a Software Engineering company based in Lesotho! We specialize in providing top-notch web development services, mobile app development, and phone repair services to individuals and businesses alike. With years of experience in the industry, we have established a reputation for delivering high-quality, reliable solutions that meet our clients unique needs.',
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
