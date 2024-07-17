import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'

export const mainFont = localFont({
  src: [{
    path: '../../public/fonts/good-font.TTF',
    style: "normal"
  }], variable: "--font-good"
},)

export const secundaryFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: "--poppins-font"
})