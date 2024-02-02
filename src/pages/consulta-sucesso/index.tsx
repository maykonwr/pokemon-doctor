import React, { useContext } from "react"
import DefaultPage from "../default"
import { BottomHeader } from "../../components/bottomHeader"
import { Main } from "./style"
import { Button } from "../../components/Button/style"
import { ScheduleContext } from '../../context/ScheduleContext'
import router from "next/router"

const ConsultaSucesso = () => {
    const { appointmentDetails } = useContext(ScheduleContext)

    const handleFormSubmit = async () => {
        router.push('/consulta')
    }

    const pokemonCountText = appointmentDetails.pokemonCount === 1 ? 'pokémon' : 'pokémons'

    return (
        <>
            <DefaultPage>
                <BottomHeader section='Agendar consulta' description='Recupere seus pokémons em 5 segundos' />
                <Main>
                    <div>
                        <h1>Consulta Agendada</h1>
                        <img src="/images/check.svg" alt="" />
                        <p>
                            Seu agendamento para o dia {appointmentDetails.date}, às 00h00m,
                            para {appointmentDetails.pokemonCount} {pokemonCountText} foi realizado com sucesso!
                        </p>
                        <Button type='submit' onClick={handleFormSubmit}>
                            Fazer novo Agendamento
                        </Button>
                    </div>
                </Main>
            </DefaultPage>
        </>
    )
}

export default ConsultaSucesso
