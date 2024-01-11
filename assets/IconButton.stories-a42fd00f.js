var l=Object.defineProperty;var r=(c,a)=>l(c,"name",{value:a,configurable:!0});import{S as o,T as t}from"./index-341021b4.js";import{j as n,a as i,F as e}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const I={title:"Core/IconButton",component:o,parameters:{storySource:{source:`import { Meta, StoryObj } from '@storybook/react'
import { IconButton, IconButtonProps } from '@bsafer-system/react'
import { TickCircle } from 'iconsax-react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/IconButton',
  component: IconButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=535%3A4503&t=LBvrED4ki7epUItI-0'
    }
  },
  args: {
    children: <TickCircle />,
    color: 'primary',
    variant: 'contained',
    size: 'md',
    disabled: false
  },
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary'] as PropsToArray<
        IconButtonProps['color']
      >,
      control: 'radio'
    },
    variant: {
      options: ['text', 'contained', 'outlined'] as PropsToArray<
        IconButtonProps['variant']
      >,
      control: 'radio'
    },
    size: {
      options: ['sm', 'md', 'lg'] as PropsToArray<IconButtonProps['size']>,
      control: 'radio'
    },
    disabled: {
      control: 'boolean'
    },
    children: {
      control: 'null'
    },
    onClick: { action: 'onClick' }
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
} as Meta<IconButtonProps>

export const Playground: StoryObj<IconButtonProps> = {}

export const Sizes = () => {
  return (
    <>
      <IconButton size="sm">
        <TickCircle />
      </IconButton>
      <IconButton size="md">
        <TickCircle />
      </IconButton>
      <IconButton size="lg">
        <TickCircle />
      </IconButton>
    </>
  )
}

export const Variants = () => {
  return (
    <>
      <IconButton variant="contained">
        <TickCircle />
      </IconButton>
      <IconButton variant="outlined">
        <TickCircle />
      </IconButton>
      <IconButton variant="text">
        <TickCircle />
      </IconButton>
    </>
  )
}

export const Colors = () => {
  return (
    <div className="grid gap-4 grid-cols-3">
      <IconButton variant="contained" color="primary">
        <TickCircle />
      </IconButton>
      <IconButton variant="contained" color="secondary">
        <TickCircle />
      </IconButton>
      <IconButton variant="contained" color="default">
        <TickCircle />
      </IconButton>
      <IconButton variant="outlined" color="primary">
        <TickCircle />
      </IconButton>
      <IconButton variant="outlined" color="secondary">
        <TickCircle />
      </IconButton>
      <IconButton variant="outlined" color="default">
        <TickCircle />
      </IconButton>
      <IconButton variant="text" color="primary">
        <TickCircle />
      </IconButton>
      <IconButton variant="text" color="secondary">
        <TickCircle />
      </IconButton>
      <IconButton variant="text" color="default">
        <TickCircle />
      </IconButton>
    </div>
  )
}
`,locationsMap:{sizes:{startLoc:{col:21,line:60},endLoc:{col:1,line:74},startBody:{col:21,line:60},endBody:{col:1,line:74}},variants:{startLoc:{col:24,line:76},endLoc:{col:1,line:90},startBody:{col:24,line:76},endBody:{col:1,line:90}},colors:{startLoc:{col:22,line:92},endLoc:{col:1,line:124},startBody:{col:22,line:92},endBody:{col:1,line:124}}}},design:{type:"figma",url:"https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=535%3A4503&t=LBvrED4ki7epUItI-0"}},args:{children:n(t,{}),color:"primary",variant:"contained",size:"md",disabled:!1},argTypes:{color:{options:["default","primary","secondary"],control:"radio"},variant:{options:["text","contained","outlined"],control:"radio"},size:{options:["sm","md","lg"],control:"radio"},disabled:{control:"boolean"},children:{control:"null"},onClick:{action:"onClick"}},decorators:[c=>n("div",{className:"flex flex-col flex-wrap justify-center items-center gap-10 max-w-2xl my-0 mx-auto",children:c()})]},v={},f=r(()=>i(e,{children:[n(o,{size:"sm",children:n(t,{})}),n(o,{size:"md",children:n(t,{})}),n(o,{size:"lg",children:n(t,{})})]}),"Sizes"),x=r(()=>i(e,{children:[n(o,{variant:"contained",children:n(t,{})}),n(o,{variant:"outlined",children:n(t,{})}),n(o,{variant:"text",children:n(t,{})})]}),"Variants"),C=r(()=>i("div",{className:"grid gap-4 grid-cols-3",children:[n(o,{variant:"contained",color:"primary",children:n(t,{})}),n(o,{variant:"contained",color:"secondary",children:n(t,{})}),n(o,{variant:"contained",color:"default",children:n(t,{})}),n(o,{variant:"outlined",color:"primary",children:n(t,{})}),n(o,{variant:"outlined",color:"secondary",children:n(t,{})}),n(o,{variant:"outlined",color:"default",children:n(t,{})}),n(o,{variant:"text",color:"primary",children:n(t,{})}),n(o,{variant:"text",color:"secondary",children:n(t,{})}),n(o,{variant:"text",color:"default",children:n(t,{})})]}),"Colors"),T=["Playground","Sizes","Variants","Colors"];export{C as Colors,v as Playground,f as Sizes,x as Variants,T as __namedExportsOrder,I as default};
//# sourceMappingURL=IconButton.stories-a42fd00f.js.map
