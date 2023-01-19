import { Alerts, AlertProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Alerts',
  component: Alerts,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A325&t=yFGXEsdXrdkco4En-0'
    }
  },
  args: {
    feedback: 'success',
    message: 'Mensagem de feedback para o usuário',
    complement: 'Texto complementar sobre o feedback apresentado.'
  },
  argTypes: {
    feedback: {
      control: 'inline-radio',
      options: ['success', 'warning', 'error', 'info'] as PropsToArray<AlertProps['feedback']>
    }    
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-10 max-w-2xl my-0 mx-auto">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<AlertProps>

export const Playground: StoryObj<AlertProps> = {}

export const Feedbacks = () => {
  return(
    <div className='flex flex-col gap-8'>
      <Alerts
        message='Mensagem de feedback para o usuário'
        feedback='success'
      />
      <Alerts
        message='Mensagem de feedback para o usuário'
      />
      <Alerts
        message='Mensagem de feedback para o usuário'
        feedback='error'
      />
      <Alerts
        message='Mensagem de feedback para o usuário'
        feedback='info'
      />
    </div>
  )
}

export const WithoutComplementText = () => {
  return(
    <Alerts
      message='Mensagem de feedback para o usuário'
    />
  )
}

export const WithComplementText = () => {
  return(
    <Alerts
      message='Mensagem de feedback para o usuário'
      complement='Texto complementar sobre o feedback apresentado.'
    />
  )
} 