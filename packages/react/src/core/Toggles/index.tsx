import React from 'react'

import {ToggleContainer, ToggleRoot, ToggleThumb, ToggleContainerProps} from './styles'

export interface ToggleProps extends React.HTMLAttributes<HTMLInputElement> {
    /**
     * Filling this parameter, the toggle will have a background and a text.
     * Depending on the state, the background color will be different.
     */
    text?: string
}

/**
 * Render a toggle switch element
 * @param ToggleProps
 */
export const Toggle = ({
    text,
    ...props
}: ToggleProps) => {

    const [toggleState, setToggleState] = React.useState<boolean>(false)
    const handleToggle = () => setToggleState(!toggleState)
    
    const textDefault = (toggleState ? 'Ativo' : 'Inativo')
    
    return(
        <ToggleContainer text={text!} checked={toggleState} {...props}>
            {text && <span>{text}</span>}
            <ToggleRoot onClick={() => handleToggle() }>
                <ToggleThumb />
            </ToggleRoot>
        </ToggleContainer>
    )
}