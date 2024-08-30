import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getServerSession } from 'next-auth';
import SessionProvider from './SessionProvider';
import { authOptions } from './api/auth/[...nextauth]/options';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nucleus',
  description: 'Empower your software development journey with Nucleus - your comprehensive hub for learning, tools, and solutions. Based in Lesotho, we are dedicated to helping individuals and businesses build a strong online presence. Explore our curated courses, discover essential development tools, leverage expert consulting services, and unleash the potential of custom software solutions tailored to your needs.',
  keywords: 'Nucleus, Nucleus devs, Nucleusdevs, software development, courses, tutorials, learn how to code, learn to programme, tools, consulting services, custom solutions, Lesotho, online presence, codiac, Nucleus Codiac, Nucleusdevs Academy, Nudevs Academy, Retsepile Shao',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <Head>
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1pyCrohWBXxpGzqrC"
          data-version="062024"
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RJVTNEGB1T"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RJVTNEGB1T');`}
        </script>
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SessionProvider session={session}>
            <Analytics />
            {children}
          </SessionProvider>
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}