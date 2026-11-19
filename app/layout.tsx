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
  title: 'B Sai Ram - AI Engineer & Full Stack Developer | Portfolio',
  description: 'AI Engineer and Full Stack Developer experienced in building end-to-end Generative AI applications, Retrieval-Augmented Generation (RAG) systems, multi-agent workflows using LangGraph, and scalable microservices with FastAPI, Docker, and AWS EKS.',
  keywords: 'AI Engineer, Full Stack Developer, Generative AI, RAG, LangGraph, LangChain, LlamaIndex, Multi-Agent Systems, Pinecone, ChromaDB, FastAPI, Docker, AWS EKS, LangSmith, CloudWatch, Grafana, React, Next.js, TypeScript, Python',
  authors: [{ name: 'B Sai Ram' }],
  metadataBase: new URL('https://sai-portfolio-gules.vercel.app'),
  openGraph: {
    title: 'B Sai Ram - AI Engineer & Full Stack Developer',
    description: 'Portfolio of B Sai Ram: AI Engineer & Full Stack Developer specializing in Generative AI, RAG, LangGraph, FastAPI, AWS EKS, and Next.js.',
    type: 'website',
    url: 'https://sai-portfolio-gules.vercel.app',
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

