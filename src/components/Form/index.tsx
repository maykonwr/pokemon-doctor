import { useContext, useState } from 'react'
import { ScheduleContext } from '../../context/ScheduleContext'
import { IForm } from '../../types/components'
import { Select } from '../Select'
import { Input } from '../Input'
import { Button } from '../Button/style'
import { ContainerForm } from './style'

import { useRouter } from 'next/router'

export const Form: React.FC<IForm> = ({ regions, dates }) => {
    const router = useRouter()
    const scheduleContext = useContext(ScheduleContext)

    const [isPokemonAdded, setIsPokemonAdded] = useState(false)

    const { 
        createSelectPokemon,
        getGenerationRegion,
        selectsPokemons, 
        getAllPokemons, 
        handleSubmit,
        getCities, 
        rateValue, 
        onSubmit,
        register,
        getHours,
        cities, 
        hours,
        selectedDate,
        selectedHour,
        setSelectedDate,
        setSelectedHour,
        saveAppointmentDetails,
    } = scheduleContext

    const handleDateChange = (newDate: string) => {
        setSelectedDate(newDate)
        getHours(newDate)
    }

    const handleHourChange = (newHour: string) => {
        setSelectedHour(newHour)
    }
    

    const handleFormSubmit = async () => {
        saveAppointmentDetails({
          pokemonCount: selectsPokemons.length,
          date: selectedDate,
          hour: selectedHour,
        })
        router.push('/consulta-sucesso')
      }

    const renderSelectCities = () => {
        return (
          <Select
            {...register('city')}
            callBack={getAllPokemons}
            valueLabel='Cidade'
            idSelect='city'
            options={cities.map((element: { name: string }) => element.name)}
            optionDefault={cities.length ? 'Selecione uma cidade' : 'Selecione primeiro uma região'}
            isDisable={cities.length ? false : true}
          />
        )
      }
      
      const renderPokemonList = () => {
        return (
          <ul>
            {selectsPokemons?.map((item: JSX.Element, index: number) => (
              <li key={`list-select-${index}`}>{item}</li>
            ))}
          </ul>
        )
      }
      
    return (
        <ContainerForm>
            <form onSubmit={handleSubmit(onSubmit)} action=''>
                <h3>Preencha o formulário abaixo para agendar sua consulta</h3>
                <section>
                    <Input {...register('name')} valueLabel='Nome' idInput='name' typeInput='text' placeholder='Digite seu nome' />
                    <Input {...register('surname')} valueLabel='Sobrenome' idInput='surname' typeInput='text' placeholder='Digite seu sobrenome' />
                    <Select {...register('region')} callBack={getCities} valueLabel='Região' idSelect='region' options={regions.map((element) => element.name)} optionDefault='Selecione uma região' />
                    {renderSelectCities()}
                </section>
                <section>
                    <div>
                        <h4>Cadastre seu time</h4>
                        <p>Atendemos até 06 pokémons por vez</p>
                    </div>
                    {renderPokemonList()}
                    <Button
                        type='button'
                        $addPokemon={true}
                        onClick={() => {
                            getGenerationRegion(regions)
                            createSelectPokemon()
                            setIsPokemonAdded(true)
                        }}
                        >
                        Adicionar novo pokémon ao time
                    </Button>
                </section>
                <section>
                    <Select {...register('date')} callBack={getHours} valueLabel='Data para atendimento' idSelect='dateSchedule' options={dates} optionDefault='Selecione uma data' />
                    <Select {...register('hour')} valueLabel='Horário de atendimento' idSelect='hourSchedule' options={hours} optionDefault={hours.length ? 'Selecione um horário' : 'Selecione primeiro uma data'} isDisable={hours.length ? false : true} />
                </section>
                <section>
                    <div>
                        <div>
                            <p>Número de pokémons a serem atendidos:</p>
                            <p>{selectsPokemons.length === 0 ? '0' : `0${selectsPokemons.length}`}</p>
                        </div>
                        <div>
                            <p>Atendimento unitário por pokémon: </p>
                            <p>R$ 70,00</p>
                        </div>
                        <div>
                            <p>Subtotal:</p>
                            <p>R$ {selectsPokemons.length > 0 ? (selectsPokemons.length * 70).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0,00'}</p>
                        </div>
                        <div>
                            <p>Taxa geracional*: </p>
                            <p>R$ {rateValue ? rateValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0,00'}</p>
                        </div>
                        <p>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</p>
                    </div>
                    <div>
                        <p>Valor Total: R$ {rateValue ? (parseFloat(rateValue.toFixed(2)) + (selectsPokemons.length * 70)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0,00'}</p>
                        <Button type='submit' onClick={handleFormSubmit} disabled={!isPokemonAdded || !selectedDate}>
                            Concluir Agendamento
                        </Button>
                    </div>
                </section>
            </form>
        </ContainerForm>
    )
}