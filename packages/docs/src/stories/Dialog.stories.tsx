import { Meta, StoryObj } from '@storybook/react'
import {
  InfoCircle,
  TickCircle,
  Like1,
  Dislike,
  LockSlash
} from 'iconsax-react'
import React from 'react'
import { Dialog, DialogProps } from '@bsafer-system/react'

const buttonClassName = 'py-2 px-4 bg-black text-white rounded'

export default {
  title: 'Core/Dialog',
  component: Dialog,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=136%3A1139&t=N6A9wPW31A8qbawc-0'
    }
  },
  args: {
    children: <button className={buttonClassName}>Abrir</button>,
    title: 'Você deseja realmente excluir esse cadeado?',
    subtitle: 'Texto secundário do modal',
    icon: <InfoCircle color="#EF1B1F" size={32} />,
    successButtonText: 'Agora não',
    cancelButtonText: 'Sim, excluir',
    isActionDialog: true,
    overlayBackdrop: true
  },
  argTypes: {
    children: {
      control: 'null'
    },
    icon: {
      control: 'null'
    },
    isActionDialog: {
      control: 'boolean'
    },
    overlayBackdrop: {
      control: 'boolean'
    },
    title: {
      control: 'text'
    },
    subtitle: {
      control: 'text'
    },
    successButtonText: {
      control: 'text'
    },
    cancelButtonText: {
      control: 'text'
    },
    onSuccessButtonClick: { action: 'onSuccessButtonClick' },
    onCancelButtonClick: { action: 'onCancelButtonClick' }
  },
  decorators: [
    (Story) => {
      return Story()
    }
  ]
} as Meta<DialogProps>

export const Playground: StoryObj<DialogProps> = {}

export const Subtitle = () => {
  return (
    <>
      <Dialog
        title="Cadeado excluído com sucesso!"
        subtitle="ID: 68d47246-b163-4666-97f2-2245c670a12a"
        icon={<TickCircle color="#05BA38" size={32} />}
        successButtonText="Entendi"
        onSuccessButtonClick={() => {
          console.log('onSuccessButtonClick')
        }}
      >
        <button className={buttonClassName}>Abrir</button>
      </Dialog>
    </>
  )
}

export const MultipleActions = () => {
  return (
    <Dialog
      title="Você deseja realmente excluir esse cadeado?"
      icon={<InfoCircle color="#EF1B1F" size={32} />}
      successButtonText="Agora não"
      cancelButtonText="Sim, excluir"
      onSuccessButtonClick={() => {
        console.log('onSuccessButtonClick')
      }}
      onCancelButtonClick={() => {
        console.log('onCancelButtonClick')
      }}
    >
      <button className={buttonClassName}>Abrir</button>
    </Dialog>
  )
}

export const Icons = () => {
  return (
    <Dialog
      title="Você deseja realmente excluir esse cadeado?"
      icon={<LockSlash color="#EF1B1F" size={32} />}
      successButtonText="Agora não"
      cancelButtonText="Sim, excluir"
      onSuccessButtonClick={() => {
        console.log('onSuccessButtonClick')
      }}
      onCancelButtonClick={() => {
        console.log('onCancelButtonClick')
      }}
      successButtonStartIcon={<Dislike size={16} />}
      successButtonEndIcon={<Dislike size={16} />}
      cancelButtonStartIcon={<Like1 size={16} />}
      cancelButtonEndIcon={<Like1 size={16} />}
    >
      <button className={buttonClassName}>Abrir</button>
    </Dialog>
  )
}

export const NoActions = () => {
  return (
    <Dialog
      title="Aguarde só um momento! Estamos excluindo o cadeado."
      icon={<LockSlash color="black" size={32} />}
      isActionDialog={false}
    >
      <button className={buttonClassName}>Abrir</button>
    </Dialog>
  )
}

export const WithoutChildren = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <button className={buttonClassName} onClick={() => setOpen(!open)}>
        Função para abrir o modal controladamente
      </button>
      <Dialog
        title="Cadeado excluído com sucesso!"
        subtitle="ID: 68d47246-b163-4666-97f2-2245c670a12a"
        icon={<LockSlash color="black" size={32} />}
        successButtonText="Entendi"
        onSuccessButtonClick={() => {
          console.log('onSuccessButtonClick')
        }}
        onCloseIconButtonClick={() => setOpen(!open)}
        openMenu={open}
      />
    </>
  )
}

export const WithBackdrop = () => {
  return (
    <Dialog
      title="Aguarde só um momento! Estamos excluindo o cadeado."
      icon={<LockSlash color="black" size={32} />}
      isActionDialog={false}
      openMenu={true}
      closeOnClickOutside={true}
      overlayBackdrop={true}
    />
  )
}

export const WithoutBackdrop = () => {
  return (
    <Dialog
      title="Aguarde só um momento! Estamos excluindo o cadeado."
      icon={<LockSlash color="black" size={32} />}
      isActionDialog={false}
      openMenu={true}
      closeOnClickOutside={true}
      overlayBackdrop={false}
    />
  )
}
