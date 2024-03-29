import React from 'react'
import { IInput } from '../../types/components'
import { DivLabelInput } from './style'

export const Input = React.forwardRef<HTMLInputElement, IInput>(({valueLabel, idInput, typeInput, placeholder, ...rest}, ref) => {

    return (
        <>
            <DivLabelInput>
                <label htmlFor={idInput}>{valueLabel}</label>
                <input id={idInput} type={typeInput} placeholder={placeholder} ref={ref} {...rest} />
            </DivLabelInput>
        </>
    )

})