import '@/styles/globals.css'
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <style jsx global>{`
        :root { --font-jetbrains: ${jetbrains.style.fontFamily}; }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
