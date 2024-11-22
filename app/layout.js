import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nirmal Kukna - Software Developer",
  description:
    "This is the portfolio of Nirmal Kukna. Experienced Full-Stack Developer with expertise in building scalable web applications and integrating AI solutions. Proficient in utilizing a wide range of modern frameworks, technologies, and cloud services to design and implement robust, highperformance solutions. Proven ability to lead cross-functional teams in Agile environments, optimize development workflows, and deliver impactful results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
