import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from "./components/Header.tsx"
import { Main } from "./components/Main.tsx"
// import { Footer } from "./components/Footer.tsx"
import { CookiePage } from "./components/parts/Cookie_page.tsx"
import { Whats_button } from "./components/parts/Whats_Button.tsx"




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Main  />
   {/*  <Footer /> */}
    <Whats_button />
    <CookiePage />
  </StrictMode>,
)
