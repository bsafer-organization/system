var c=Object.defineProperty;var o=(e,l)=>c(e,"name",{value:l,configurable:!0});import{x as t,T as i}from"./index-341021b4.js";import{j as n,a as r,F as a}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const v={title:"Core/Button",component:t,parameters:{storySource:{source:`import { Meta, StoryObj } from '@storybook/react'
import { TickCircle } from 'iconsax-react'
import { Button, ButtonProps } from '@bsafer-system/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A3&t=MiQGdhHsZublWo6t-0'
    }
  },
  args: {
    children: 'Botão padrão',
    color: 'primary',
    variant: 'contained',
    size: 'md',
    disabled: false,
    onClick: () => {
      console.log('CLICK')
    }
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary'] as PropsToArray<
        ButtonProps['color']
      >
    },
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'] as PropsToArray<
        ButtonProps['variant']
      >
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'] as PropsToArray<ButtonProps['size']>
    },
    disabled: {
      control: 'boolean'
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col justify-center items-center gap-10">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<ButtonProps>

export const Playground: StoryObj<ButtonProps> = {}

export const Sizes = () => {
  return (
    <>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </>
  )
}

export const Variants = () => {
  return (
    <>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
    </>
  )
}

export const Colors = () => {
  return (
    <div className="grid gap-4 grid-cols-3">
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
      <Button variant="contained" color="default">
        Default Button
      </Button>
      <Button variant="outlined" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary Button
      </Button>
      <Button variant="outlined" color="default">
        Default Button
      </Button>
      <Button variant="text" color="primary">
        Primary Button
      </Button>
      <Button variant="text" color="secondary">
        Secondary Button
      </Button>
      <Button variant="text" color="default">
        Default Button
      </Button>
    </div>
  )
}

export const Icons = () => {
  return (
    <>
      <Button
        variant="contained"
        size="lg"
        startIcon={<TickCircle size={16} />}
      >
        Start icon
      </Button>
      <Button variant="contained" size="lg" endIcon={<TickCircle size={16} />}>
        End icon
      </Button>
    </>
  )
}
`,locationsMap:{sizes:{startLoc:{col:21,line:59},endLoc:{col:1,line:67},startBody:{col:21,line:59},endBody:{col:1,line:67}},variants:{startLoc:{col:24,line:69},endLoc:{col:1,line:77},startBody:{col:24,line:69},endBody:{col:1,line:77}},colors:{startLoc:{col:22,line:79},endLoc:{col:1,line:111},startBody:{col:22,line:79},endBody:{col:1,line:111}},icons:{startLoc:{col:21,line:113},endLoc:{col:1,line:128},startBody:{col:21,line:113},endBody:{col:1,line:128}}}},design:{type:"figma",url:"https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A3&t=MiQGdhHsZublWo6t-0"}},args:{children:"Botão padrão",color:"primary",variant:"contained",size:"md",disabled:!1,onClick:()=>{console.log("CLICK")}},argTypes:{color:{control:"select",options:["default","primary","secondary"]},variant:{control:"select",options:["text","contained","outlined"]},size:{control:"radio",options:["sm","md","lg"]},disabled:{control:"boolean"}},decorators:[e=>n("div",{className:"flex flex-col justify-center items-center gap-10",children:e()})]},f={},g=o(()=>r(a,{children:[n(t,{size:"sm",children:"Small Button"}),n(t,{size:"md",children:"Medium Button"}),n(t,{size:"lg",children:"Large Button"})]}),"Sizes"),h=o(()=>r(a,{children:[n(t,{variant:"contained",children:"Contained Button"}),n(t,{variant:"outlined",children:"Outlined Button"}),n(t,{variant:"text",children:"Text Button"})]}),"Variants"),x=o(()=>r("div",{className:"grid gap-4 grid-cols-3",children:[n(t,{variant:"contained",color:"primary",children:"Primary Button"}),n(t,{variant:"contained",color:"secondary",children:"Secondary Button"}),n(t,{variant:"contained",color:"default",children:"Default Button"}),n(t,{variant:"outlined",color:"primary",children:"Primary Button"}),n(t,{variant:"outlined",color:"secondary",children:"Secondary Button"}),n(t,{variant:"outlined",color:"default",children:"Default Button"}),n(t,{variant:"text",color:"primary",children:"Primary Button"}),n(t,{variant:"text",color:"secondary",children:"Secondary Button"}),n(t,{variant:"text",color:"default",children:"Default Button"})]}),"Colors"),z=o(()=>r(a,{children:[n(t,{variant:"contained",size:"lg",startIcon:n(i,{size:16}),children:"Start icon"}),n(t,{variant:"contained",size:"lg",endIcon:n(i,{size:16}),children:"End icon"})]}),"Icons"),C=["Playground","Sizes","Variants","Colors","Icons"];export{x as Colors,z as Icons,f as Playground,g as Sizes,h as Variants,C as __namedExportsOrder,v as default};
//# sourceMappingURL=Button.stories-d93c718c.js.map
