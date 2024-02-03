import { ScheduleContext } from '../../context/ScheduleContext'
import { ContainerResponseSchedule } from './style'
import { useContext } from 'react'
import LinkRedirect from '../LinkRedirect'

interface ResponseScheduleProps {
    isError: boolean;
}

export const ResponseSchedule: React.FC<ResponseScheduleProps> = ({ isError }) => {
    const { descriptionError, descriptionSuccess } = useContext(ScheduleContext)

    return (
        <ContainerResponseSchedule>
            <section>
                <h2>{isError ? 'Houve um problema no agendamento' : 'Consulta agendada'}</h2>
                { isError ? 
                    <img src="/images/warning.svg" alt="Erro no agendamento" /> 
                    : 
                    <img src="/images/check.svg" alt="Sucesso no agendamento" /> 
                }
                <p>{isError ? descriptionError : descriptionSuccess}</p>
                <LinkRedirect children='Fazer novo agendamento' href='/consulta' />
            </section>
        </ContainerResponseSchedule>
    )
}
