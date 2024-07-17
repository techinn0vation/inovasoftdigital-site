import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const mainFont = localFont({
  src: [
    {
      path: "./fonts/good-font.ttf",
      style: "normal",
    },
  ],
  variable: "--font-good",
  display: "swap",
});

const secundaryFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--poppins-font",
});

export { mainFont, secundaryFont };
