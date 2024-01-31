import React from "react";
import { useRouter } from "next/dist/client/router";
import { ContainerHeader, ContentHeader, LogoContainer, LogoParagraph, WeAre, ScheduleAppointment, ScheduleParagraph, LogoContent, ImageLogo } from '../../pages/Styled';

import whitePokeball from './../../../public/images/whitePokeball.svg'

const Header = () => {
    const router = useRouter();

    const handleNavigateHome = () => {
        router.push("/");
    };

    const handleNavigateToQuemSomos = () => {
        router.push("/quem-somos");
    };

    const handleNavigateToConsulta = () => {
        router.push("/consulta");
    };

    return (
        <ContainerHeader>
            <LogoContainer onClick={handleNavigateHome}>
                <LogoContent>
                    <ImageLogo src="/_next/static/media/whitePokeball.c4a04b5e.svg" alt="white Pokeball" />
                    <LogoParagraph>Centro Pokémon</LogoParagraph>
                </LogoContent>
            </LogoContainer>
            <ContentHeader>
                <WeAre onClick={handleNavigateToQuemSomos}>Quem Somos</WeAre>
                <ScheduleAppointment>
                    <ScheduleParagraph onClick={handleNavigateToConsulta}>Agendar Consulta</ScheduleParagraph>
                </ScheduleAppointment>
            </ContentHeader>
        </ContainerHeader>
    );
};

export default Header;
