import { Inter , Roboto , Poppins} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const rtb = Roboto({ subsets: ['latin'] , weight: "300"})

const pop = Poppins({ subsets: ['latin'] , weight: "300"})

export const metadata = {
  title:{
    default:"LOCAD"
  },
  template: '%s | LOCAD' ,
  description:"Display OOH, Digital Billboards, Digital Signage",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}>{children}</body>
    </html>
  )
}
