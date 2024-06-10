import './globals.css'
import { Inter , Roboto , Poppins} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const rtb = Roboto({ subsets: ['latin'] , weight: "300"})

const pop = Poppins({ subsets: ['latin'] , weight: "300"})

export const metadata = {
  title:{
    default:"Display OOH, Digital Billboards, Digital Signage"
  },
  template: '%s | LOCAD' ,
  description:"Out of home advertising is traditional medium of advertising so jump to digital advertising and marketing OOH. This may include digital billboards and outdoor signage.",
  author:"Locad.net",
  keywords:"IOT solutions, Locad, ooh, adtech, locaudit, plano, screeno, live traffic monitoring, mobile ad platform, ooh media industry, location based advertising"
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='/assets/favicon.png' rel='shortcut icon' type='image/png' />
      </head>
      <body className={pop.className}>{children}</body>
    </html>
  )
}
