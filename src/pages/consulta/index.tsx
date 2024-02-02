import React from "react"
import { Form } from "../../components/Form"
import { IScheduleProps } from "../../types/pages"
import DefaultPage from "../default"
import { BottomHeader } from "../../components/bottomHeader"
import { Main } from "./style"
import { getServerSideProps } from "./../api/pokemon"

const Consulta = ({ regions, dates }: IScheduleProps) => {
    return (
        <>
            <DefaultPage>
                <BottomHeader section='Agendar consulta' description='Recupere seus pokémons em 5 segundos' />
                <Main>
                    <Form regions={regions} dates={dates} />
                </Main>
            </DefaultPage>
        </>
    )
}

export { getServerSideProps }

export default Consulta
