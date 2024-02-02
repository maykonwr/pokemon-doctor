import React from 'react'
import { BannerImage, BannerText, BannerWrapper,  } from './style'

const BannerStatic = () => {
  return (
    <BannerWrapper>
      <BannerText>Cuidamos bem do seu pokémon,<br/> para ele cuidar bem de você</BannerText>
      <BannerImage src="./../../images/pokemon-hero.jpg" alt="pokemon hero" />
    </BannerWrapper>
  )
}

export default BannerStatic
