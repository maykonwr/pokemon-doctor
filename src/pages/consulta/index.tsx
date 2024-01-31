import React from "react";
import { Header } from "./../../components/Header";
import { Footer } from "./../../components/Footer";
import { ContainerQuemSomos, ContentHeaderQuemSomos, GlobalStyle, GoToHome, TextQuemSomos, TitleQuemSomos } from "../Styled";

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}
const Consulta = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    
      console.log(watch("example")) // watch input value by passing the name of it

    return (
        <>
            <GlobalStyle />
            <Header />
            <ContainerQuemSomos>
                <ContentHeaderQuemSomos>
                    <GoToHome>{`Home > Agendar Consulta`}</GoToHome>
                    <TitleQuemSomos>Agendar Consulta</TitleQuemSomos>
                    <TextQuemSomos>Recupere seus pokémons em 5 segundos</TextQuemSomos>
                </ContentHeaderQuemSomos>
            </ContainerQuemSomos>

            <Footer />
        </>
    )
}

export default Consulta