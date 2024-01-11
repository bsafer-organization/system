var c=Object.defineProperty;var o=(r,l)=>c(r,"name",{value:l,configurable:!0});import{N as e}from"./index-341021b4.js";import{j as n,a,F as t}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const B={title:"Core/ActionBadge",component:e,parameters:{storySource:{source:`import { Meta, StoryObj } from '@storybook/react'
import { ActionBadge, ActionBadgeProps } from '@bsafer-system/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/ActionBadge',
  component: ActionBadge,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A203&t=XXZQL1f0uq4lyXu2-0'
    }
  },
  args: {
    children: 'ActionBadge padrão',
    color: 'green',
    size: 'md',
    avatarUrl: '',
    disabled: false,
    icon: undefined
  },
  argTypes: {
    color: {
      options: ['green', 'blue', 'red', 'yellow', 'black'] as PropsToArray<
        ActionBadgeProps['color']
      >,
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'] as PropsToArray<
        ActionBadgeProps['size']
      >,
      control: { type: 'select' }
    },
    avatarUrl: {
      control: { type: null }
    },
    icon: {
      control: { type: null }
    },
    onActionClick: { action: 'onActionClick' }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-10 max-w-2lx my-0 mx-auto">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<ActionBadgeProps>

export const Playground: StoryObj<ActionBadgeProps> = {}

export const Sizes = () => {
  return (
    <>
      <ActionBadge size="xs">Extra Small Badge</ActionBadge>
      <ActionBadge size="sm">Small ActionBadge</ActionBadge>
      <ActionBadge size="md">Medium ActionBadge</ActionBadge>
      <ActionBadge size="lg">Large ActionBadge</ActionBadge>
    </>
  )
}

export const Colors = () => {
  return (
    <>
      <ActionBadge color="green">Green</ActionBadge>
      <ActionBadge color="blue">Blue</ActionBadge>
      <ActionBadge color="red">Red</ActionBadge>
      <ActionBadge color="yellow">Yellow</ActionBadge>
      <ActionBadge color="black">Black</ActionBadge>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <ActionBadge disabled={true}>Disabled</ActionBadge>
    </>
  )
}

export const Avatar = () => {
  return (
    <>
      <ActionBadge
        size="lg"
        avatarUrl="https://media.discordapp.net/attachments/998742286626193459/1024512586605146112/Mockup_Cadeado_para_teste.png?width=494&height=682"
      >
        Avatar
      </ActionBadge>
    </>
  )
}
`,locationsMap:{sizes:{startLoc:{col:21,line:58},endLoc:{col:1,line:67},startBody:{col:21,line:58},endBody:{col:1,line:67}},colors:{startLoc:{col:22,line:69},endLoc:{col:1,line:79},startBody:{col:22,line:69},endBody:{col:1,line:79}},disabled:{startLoc:{col:24,line:81},endLoc:{col:1,line:87},startBody:{col:24,line:81},endBody:{col:1,line:87}},avatar:{startLoc:{col:22,line:89},endLoc:{col:1,line:100},startBody:{col:22,line:89},endBody:{col:1,line:100}}}},design:{type:"figma",url:"https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A203&t=XXZQL1f0uq4lyXu2-0"}},args:{children:"ActionBadge padrão",color:"green",size:"md",avatarUrl:"",disabled:!1,icon:void 0},argTypes:{color:{options:["green","blue","red","yellow","black"],control:{type:"select"}},size:{options:["xs","sm","md","lg"],control:{type:"select"}},avatarUrl:{control:{type:null}},icon:{control:{type:null}},onActionClick:{action:"onActionClick"}},decorators:[r=>n("div",{className:"flex flex-col flex-wrap justify-center items-center gap-10 max-w-2lx my-0 mx-auto",children:r()})]},u={},y=o(()=>a(t,{children:[n(e,{size:"xs",children:"Extra Small Badge"}),n(e,{size:"sm",children:"Small ActionBadge"}),n(e,{size:"md",children:"Medium ActionBadge"}),n(e,{size:"lg",children:"Large ActionBadge"})]}),"Sizes"),h=o(()=>a(t,{children:[n(e,{color:"green",children:"Green"}),n(e,{color:"blue",children:"Blue"}),n(e,{color:"red",children:"Red"}),n(e,{color:"yellow",children:"Yellow"}),n(e,{color:"black",children:"Black"})]}),"Colors"),x=o(()=>n(t,{children:n(e,{disabled:!0,children:"Disabled"})}),"Disabled"),f=o(()=>n(t,{children:n(e,{size:"lg",avatarUrl:"https://media.discordapp.net/attachments/998742286626193459/1024512586605146112/Mockup_Cadeado_para_teste.png?width=494&height=682",children:"Avatar"})}),"Avatar"),b=["Playground","Sizes","Colors","Disabled","Avatar"];export{f as Avatar,h as Colors,x as Disabled,u as Playground,y as Sizes,b as __namedExportsOrder,B as default};
//# sourceMappingURL=ActionBadge.stories-087e9a1c.js.map
