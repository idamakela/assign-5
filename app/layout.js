import { Inter } from 'next/font/google'
import './globals.css'
;
const inter = Inter({ 
    variable: '--inter-font',
    subsets: ['latin'] 
})

// metadatan kan ändras, är som titel i index html
export const metadata = {
  title: 'Ida Mäkelä',
  description: 'FrontEnd / App Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
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
