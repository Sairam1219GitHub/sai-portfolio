import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'B Sai Ram - Full Stack Developer | Portfolio',
  description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications with a focus on performance and user experience.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, JavaScript, Web Development, Software Engineer',
  authors: [{ name: 'B Sai Ram' }],
  openGraph: {
    title: 'B Sai Ram - Full Stack Developer',
    description: 'Experienced Full Stack Developer Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" role="main" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  )
}

