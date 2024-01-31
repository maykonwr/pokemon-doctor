import { Header } from "../components/Header"
import { BannerStatic } from '../components/BannerStatic'
import { Footer } from "../components/Footer"
import {GlobalStyle} from './Styled';

export default function Home() {
  return (
    <>
      <GlobalStyle />
        <Header />
        <BannerStatic />
        <Footer />
    </>
  )
}
