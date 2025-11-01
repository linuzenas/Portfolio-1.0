import type { Metadata } from 'next'
import { Inter, Poppins, Manrope } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MouseFollower from '@/components/MouseFollower'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Petlu Linu Zenas Paul - Frontend Developer & IT Student',
  description: 'Passionate frontend developer and B.Tech IT student crafting intuitive digital experiences. Explore my projects, skills, and journey in web development.',
  keywords: 'frontend developer, web development, UI/UX design, React, JavaScript, Python, IT student, portfolio',
  authors: [{ name: 'Petlu Linu Zenas Paul' }],
  creator: 'Petlu Linu Zenas Paul',
  publisher: 'Petlu Linu Zenas Paul',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://linuzenas.dev',
    title: 'Petlu Linu Zenas Paul - Frontend Developer & IT Student',
    description: 'Passionate frontend developer and B.Tech IT student crafting intuitive digital experiences.',
    siteName: 'Linu Zenas Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Petlu Linu Zenas Paul - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petlu Linu Zenas Paul - Frontend Developer & IT Student',
    description: 'Passionate frontend developer and B.Tech IT student crafting intuitive digital experiences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${manrope.variable} font-poppins antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-700">
            <MouseFollower />
            <Navbar />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
