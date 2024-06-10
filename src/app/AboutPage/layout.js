import { Inter , Roboto , Poppins} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const rtb = Roboto({ subsets: ['latin'] , weight: "300"})

const pop = Poppins({ subsets: ['latin'] , weight: "300"})

export const metadata = {
  title:{
    default:"LOCAD"
  },
  template: '%s | LOCAD' ,
  description:"Locad analytics platform is a Saas based module where advertisers and media owners can get a real time monitoring feed of OOH campaigns across India.",
  author:"Locad.net",
  keywords:"Locad, ooh, adtech, locaudit, live traffic monitoring, Analytics platform, Site Analysis Tracker, real time feed, location based advertising"
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}>{children}</body>
    </html>
  )
}
