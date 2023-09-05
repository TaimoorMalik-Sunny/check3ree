import Wrapper from '@/components/shared/Wrapper'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/views/Navbar'
import Footer from '@/components/views/Footter'
import background from '../../public/gmain9.png'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" >
     
      {/* <body className="backdrop-blur-lg bg-gray-100 z-50"> */}
      {/* bg-white z-50 backdrop-blur-sm */}
      {/* https://www.google.com/search?q=+background++light+yellow+and++light+red+gradient&tbm=isch&ved=2ahUKEwiKzojjuYGBAxVSpycCHTg3DkMQ2-cCegQIABAA&oq=+background++light+yellow+and++light+red+gradient&gs_lcp=CgNpbWcQAzoECCMQJzoGCAAQCBAeULgHWP1SYJVVaABwAHgAgAHTAogB2xySAQYyLTE0LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=b6ztZMraBdLOnsEPuO64mAQ&bih=944&biw=1920#imgrc=zewGwdSt85ftFM&imgdii=O6YSbFpqru3cTM */}
      {/* className='bg-[url("https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210__340.jpg")] bg-cover bg-center h-80 w-96 */}
          <body 
          className=" bg-[url('../../public/gmain13.png')] bg-cover bg-center bg-opacity-90 backdrop-blur-lg rounded drop-shadow-lg">
          <Navbar/>
        <Wrapper>
          {children}
         </Wrapper>
         <Footer/>
          
         
        </body>
    </html>
  )
}
