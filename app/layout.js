import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({ subsets: ['latin'],
  weight:["100", "200", "300", "500", "700", "900"],
  variable:"--my-font"
})

export const metadata = {
  title: 'Get local Tours',
  description: 'A touring company based in Kolkata',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
