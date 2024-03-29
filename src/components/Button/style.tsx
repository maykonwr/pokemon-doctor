import styled from 'styled-components'
import { IButtonAddPokemon } from '../../types/components'

export const Button = styled.button<IButtonAddPokemon>`
    max-width: 253px;
    height: 42px;
    color: ${(props: IButtonAddPokemon) => props.$addPokemon ? '#1D1D1D' : '#FFFFFF'};
    background-color: ${(props: IButtonAddPokemon) => props.$addPokemon ? 'transparent' : '#E40F0F'};
    border: ${(props: IButtonAddPokemon) => props.$addPokemon ? 'solid 1px #1D1D1D' : 'transparent'};
    border-radius: 30px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    padding: 0px 5px;

    :hover {
        border: 2px solid var(--primary-color);
        background-color: var(--white-color);
        color: var(--primary-color);
        transition: 0.2s;
    }
`