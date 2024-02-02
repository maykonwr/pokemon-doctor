import { IBottomHeader } from '../../types/components'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { BottomHeaderStyle } from './style'
import LinkRedirect from '../LinkRedirect'

export const BottomHeader = ({section, description}: IBottomHeader) => {
    return (
        <>
            <BottomHeaderStyle>
                <div>
                    <div>
                        <LinkRedirect children='Home' href='/' />
                        <p><IoChevronForwardOutline /></p>
                        <p>{section}</p>
                    </div>
                    <h2>{section}</h2>
                    <p>{description}</p>
                </div>
            </BottomHeaderStyle>
        </>
    )
}