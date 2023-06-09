import './globals.css'
import { Andada_Pro } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const andada_pro = Andada_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Biblioteca',
  description: 'Personal Home Library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={andada_pro.className}>{children}</body>
    </html>
  )
}
