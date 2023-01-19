import React from 'react'
import { TickCircle, Danger, Warning2, InfoCircle, Add } from 'iconsax-react'

import { AlertContainer, Alert, AlertContainerProps, AlertMessage, AlertComplement } from './styles'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The feedback will change the icon and
     * the color in message and in icon.
     *  It can be:
     * - success
     * - warning
     * - error
     * - info
     * 
     * @default 'warning'
    */
    feedback?: AlertContainerProps['feedback']
    /**
     * The message to be displayed in the alert
     * should go here
     */
    message: string
    /**
     * If there's any complementary message, it
     * should go here
     */
    complement?: string
}

/**
 * Render an alert box 
 * @param AlertProps 
 * @returns `<Alert
 *              message='The message goes here'
 *           />`
 */
export const Alerts = ({
    message,
    feedback='warning',
    complement
}: AlertProps) => {
    let icon
    switch (feedback) {
        case 'success':
            icon = <TickCircle size={20} />
            break;
        case 'warning':
            icon = <Danger size={20} />
            break;
        case 'error':
            icon = <Warning2 size={20} />
            break;
        case 'info':
            icon = <InfoCircle size={20} />
            break;
    }
    return(
        <AlertContainer>
            <Alert>
                <AlertMessage feedback={feedback}>
                    {icon}
                    <p>{message}</p>
                </AlertMessage>
                <Add className='rotate-45' size={20} />
            </Alert>
            <AlertComplement>{complement}</AlertComplement>
        </AlertContainer>
    )
}