import { Inter } from 'next/font/google'
import NavLayout from './navbar'
import FooterLayout from './footer'
import '../styles/globals.scss'

const inter = Inter({ 
    variable: '--inter-font',
    subsets: ['latin'] 
})

export const metadata = {
  title: 'Ida Mäkelä | FrontEnd / App Developer | Portfolio',
  description: 'Welcome to the personal portfolio of a Frontend / App developer!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {/* <head>
            <link rel="icon" type="image/svg+js" href="../public/face-smiling-beam-regular.svg" />
        </head> */}
        <body className={inter.className}> 
            <NavLayout />
            <main>{children}</main>
            <FooterLayout />
        </body>
    </html>
  )
}

//statiska elemt för hela applicationen kan läggas här, ex navbar

//för att lägga till element
//skapa mapp under app med fil som heter page.js (läses som index.html)
//skriv export default function 
//importera elemetet ovan
//deklarera i RootLayout 

//OBS <body>{children}</body> fungerar för det finns en page.js fil i samma dir, ska ändras om annat ska läggas till


//SIDOR TILL SIDOR, aka submappar
//import Link from 'next/link'
//deklarera link tag i export functionen med dir för submapp

//DYNAMISKA URL/SIDOR
//[mapp] 
