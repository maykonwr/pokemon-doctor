// components/BannerStatic.js
import React from 'react';

import { BannerWrapper, BannerImage, BannerText } from '../../pages/Styled';


const BannerStatic = () => {
  return (
    <BannerWrapper>
      <BannerText>Cuidamos bem do seu pokémon,<br/> para ele cuidar bem de você</BannerText>
      <BannerImage src="./../../images/pokemon-hero.jpg" alt="pokemon hero" />
    </BannerWrapper>
  );
};

export default BannerStatic;
