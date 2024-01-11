var f=Object.defineProperty;var r=(t,i)=>f(t,"name",{value:i,configurable:!0});import{c as d,a as u,x as l,e,M as h}from"./index-341021b4.js";import{r as a}from"./index-406657fe.js";import{a as o,j as n}from"./jsx-runtime-71fb89ed.js";import"./index-7c736eb3.js";import"./iframe-2763bc4f.js";import"./index-5aa49b9b.js";const N={parameters:{storySource:{source:`import {
  Badge,
  Button,
  Heading,
  Modal,
  ModalProps,
  Text
} from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'
import { useEffect, useState } from 'react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Modal'
} as Meta

export const Playground: StoryFn<ModalProps['Root'] & ModalProps['Content']> = (
  props
) => {
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen)

  useEffect(() => {
    setIsModalOpen(props.isOpen)
  }, [props.isOpen])

  return (
    <div className="flex flex-col gap-2 items-center">
      <Text>Modal is:</Text>
      <Badge color={isModalOpen ? 'green' : 'red'}>
        {isModalOpen ? 'Opened' : 'Closed'}
      </Badge>
      {!isModalOpen && (
        <Button
          variant="text"
          color="default"
          onClick={() => setIsModalOpen(true)}
        >
          Open it
        </Button>
      )}
      <Modal.Root isOpen={isModalOpen}>
        <Modal.Content
          onDismiss={() => setIsModalOpen(false)}
          position={props.position}
          maxWidth={props.maxWidth}
          maxHeight={props.maxHeight}
        >
          <div className="w-full h-full p-5 overflow-auto">
            <Heading as="h4">Title</Heading>
          </div>
        </Modal.Content>
      </Modal.Root>
    </div>
  )
}

Playground.args = {
  isOpen: true,
  position: 'right',
  maxWidth: 'xl'
}
Playground.argTypes = {
  maxHeight: {
    control: 'text'
  },
  maxWidth: {
    options: [
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      'full'
    ] as PropsToArray<ModalProps['Content']['maxWidth']>,
    control: 'select'
  },
  position: {
    options: ['center', 'left', 'right'] as PropsToArray<
      ModalProps['Content']['position']
    >,
    control: 'inline-radio'
  }
}

export const UncontrolledModal: StoryFn = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p>Modals with triggers:</p>

      <div className="flex gap-4">
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button>Trigger - position: left</Button>
          </Modal.Trigger>
          <Modal.Content position="left">
            <p>
              It&lsquo;s use trigger instead controller <b>isOpens</b>
            </p>
          </Modal.Content>
        </Modal.Root>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button>Trigger - position: center</Button>
          </Modal.Trigger>
          <Modal.Content position="center">
            <p>
              It&lsquo;s use trigger instead controller <b>isOpens</b>
            </p>
          </Modal.Content>
        </Modal.Root>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button>Trigger - position: right</Button>
          </Modal.Trigger>
          <Modal.Content>
            <p>
              It&lsquo;s use trigger instead controller <b>isOpens</b>
            </p>
          </Modal.Content>
        </Modal.Root>
      </div>
    </div>
  )
}

UncontrolledModal.storyName = 'Uncontrolled modal (with trigger)'

interface WithConfirmationProps {
  isOpen: boolean
  dismissConfirmation: boolean
  title: string
  cancelText: string
  successText: string
  focusedButton: 'cancel' | 'success'
}
export const WithConfirmation: StoryFn<WithConfirmationProps> = (props) => {
  const [modal, setModal] = useState<boolean | undefined>(false)
  const { isOpen, dismissConfirmation, ...dismissConfimationProps } = props

  useEffect(() => {
    setModal(isOpen)
  }, [isOpen])

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Text>Modals with confirmation before close:</Text>
      <span className="block p-2 rounded bg-assistant-red-light/30">
        <Text color="assistant-red-main">
          This feature need <b>controlled</b> modal to work
        </Text>
      </span>

      <div className="flex gap-4 mt-5">
        <Modal.Root isOpen={!!modal}>
          <Modal.Trigger asChild>
            <Button onClick={() => setModal(true)}>Open Modal</Button>
          </Modal.Trigger>
          <Modal.Content
            position="left"
            onDismiss={() => setModal(false)}
            dismissConfirmation={
              dismissConfirmation === true ? dismissConfimationProps : undefined
            }
          >
            <div className="w-full h-full flex justify-center items-center">
              <p>To close, needs confirmation step</p>
            </div>
          </Modal.Content>
        </Modal.Root>
      </div>
    </div>
  )
}

WithConfirmation.args = {
  isOpen: true,
  dismissConfirmation: true,
  title: 'Do you really want to close the modal?',
  cancelText: 'No',
  successText: 'Yes, sure.',
  focusedButton: 'cancel'
}
`,locationsMap:{playground:{startLoc:{col:79,line:17},endLoc:{col:1,line:55},startBody:{col:79,line:17},endBody:{col:1,line:55}},"uncontrolled-modal":{startLoc:{col:42,line:87},endLoc:{col:1,line:126},startBody:{col:42,line:87},endBody:{col:1,line:126}},"with-confirmation":{startLoc:{col:64,line:138},endLoc:{col:1,line:175},startBody:{col:64,line:138},endBody:{col:1,line:175}}}}},title:"Core/Modal"},p=r(t=>{const[i,s]=a.useState(t.isOpen);return a.useEffect(()=>{s(t.isOpen)},[t.isOpen]),o("div",{className:"flex flex-col gap-2 items-center",children:[n(d,{children:"Modal is:"}),n(u,{color:i?"green":"red",children:i?"Opened":"Closed"}),!i&&n(l,{variant:"text",color:"default",onClick:()=>s(!0),children:"Open it"}),n(e.Root,{isOpen:i,children:n(e.Content,{onDismiss:()=>s(!1),position:t.position,maxWidth:t.maxWidth,maxHeight:t.maxHeight,children:n("div",{className:"w-full h-full p-5 overflow-auto",children:n(h,{as:"h4",children:"Title"})})})})]})},"Playground");p.args={isOpen:!0,position:"right",maxWidth:"xl"};p.argTypes={maxHeight:{control:"text"},maxWidth:{options:["sm","md","lg","xl","2xl","3xl","4xl","full"],control:"select"},position:{options:["center","left","right"],control:"inline-radio"}};const x=r(()=>o("div",{className:"flex flex-col gap-4 justify-center items-center",children:[n("p",{children:"Modals with triggers:"}),o("div",{className:"flex gap-4",children:[o(e.Root,{children:[n(e.Trigger,{asChild:!0,children:n(l,{children:"Trigger - position: left"})}),n(e.Content,{position:"left",children:o("p",{children:["It‘s use trigger instead controller ",n("b",{children:"isOpens"})]})})]}),o(e.Root,{children:[n(e.Trigger,{asChild:!0,children:n(l,{children:"Trigger - position: center"})}),n(e.Content,{position:"center",children:o("p",{children:["It‘s use trigger instead controller ",n("b",{children:"isOpens"})]})})]}),o(e.Root,{children:[n(e.Trigger,{asChild:!0,children:n(l,{children:"Trigger - position: right"})}),n(e.Content,{children:o("p",{children:["It‘s use trigger instead controller ",n("b",{children:"isOpens"})]})})]})]})]}),"UncontrolledModal");x.storyName="Uncontrolled modal (with trigger)";const M=r(t=>{const[i,s]=a.useState(!1),{isOpen:c,dismissConfirmation:m,...g}=t;return a.useEffect(()=>{s(c)},[c]),o("div",{className:"flex flex-col gap-4 justify-center items-center",children:[n(d,{children:"Modals with confirmation before close:"}),n("span",{className:"block p-2 rounded bg-assistant-red-light/30",children:o(d,{color:"assistant-red-main",children:["This feature need ",n("b",{children:"controlled"})," modal to work"]})}),n("div",{className:"flex gap-4 mt-5",children:o(e.Root,{isOpen:!!i,children:[n(e.Trigger,{asChild:!0,children:n(l,{onClick:()=>s(!0),children:"Open Modal"})}),n(e.Content,{position:"left",onDismiss:()=>s(!1),dismissConfirmation:m===!0?g:void 0,children:n("div",{className:"w-full h-full flex justify-center items-center",children:n("p",{children:"To close, needs confirmation step"})})})]})})]})},"WithConfirmation");M.args={isOpen:!0,dismissConfirmation:!0,title:"Do you really want to close the modal?",cancelText:"No",successText:"Yes, sure.",focusedButton:"cancel"};const P=["Playground","UncontrolledModal","WithConfirmation"];export{p as Playground,x as UncontrolledModal,M as WithConfirmation,P as __namedExportsOrder,N as default};
//# sourceMappingURL=Modal.stories-0ae009a8.js.map
