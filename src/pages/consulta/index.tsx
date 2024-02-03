import React, { useContext } from "react"
import { Form } from "../../components/Form"
import { IScheduleProps } from "../../types/pages"
import DefaultPage from "../default"
import { BottomHeader } from "../../components/bottomHeader"
import { Main } from "./style"
import { getServerSideProps } from "./../api/pokemon"
import { ResponseSchedule } from "../../components/ResponseSchedule"
import { ScheduleContext } from "../../context/ScheduleContext"

const Consulta = ({ regions, dates }: IScheduleProps) => {
    const { isError } = useContext(ScheduleContext)

    return (
        <>
            <DefaultPage>
                <BottomHeader section='Agendar consulta' description='Recupere seus pokémons em 5 segundos' />
                {
                    isError === true ? <ResponseSchedule isError={isError} /> : null
                }
                {
                    isError === false ? <ResponseSchedule isError={isError} /> : null
                }
                {
                    isError === undefined && 
                        <Main>
                            <Form regions={regions} dates={dates} />
                        </Main>
                }
            </DefaultPage>
        </>
    )
}

export { getServerSideProps }

export default Consulta
