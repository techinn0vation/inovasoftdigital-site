import { Inter, Poppins } from "next/font/google";
// import localFont from "next/font/local";

const mainFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-good",
});

// const mainFont = localFont({
//   src: [
//     {
//       path: "./fonts/good-font.ttf",
//       style: "normal",
//     },
//   ],
//   variable: "--font-good",
//   display: "swap",
// });

const secundaryFont = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--inter-font",
});

export { mainFont, secundaryFont };
