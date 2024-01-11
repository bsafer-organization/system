var s=Object.defineProperty;var n=(r,d)=>s(r,"name",{value:d,configurable:!0});import{a as o}from"./index-341021b4.js";import{j as e,a,F as l}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const u={title:"Core/Badge",component:o,parameters:{storySource:{source:`import { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeProps } from '@bsafer-system/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Badge',
  component: Badge,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A203&t=XXZQL1f0uq4lyXu2-0'
    }
  },
  args: {
    children: 'Badge padrão',
    color: 'green',
    size: 'md',
    disabled: false
  },
  argTypes: {
    color: {
      options: ['green', 'blue', 'red', 'yellow', 'black'] as PropsToArray<
        BadgeProps['color']
      >,
      control: 'select'
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'] as PropsToArray<BadgeProps['size']>,
      control: 'radio'
    }
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
} as Meta<BadgeProps>

export const Playground: StoryObj<BadgeProps> = {
  name: 'Playground'
}

export const Sizes = () => {
  return (
    <>
      <Badge size="xs">Extra Small Badge</Badge>
      <Badge size="sm">Small Badge</Badge>
      <Badge size="md">Medium Badge</Badge>
      <Badge size="lg">Large Badge</Badge>
    </>
  )
}

export const Colors = () => {
  return (
    <>
      <Badge color="green">Green</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="black">Black</Badge>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <Badge disabled={true}>Disabled</Badge>
    </>
  )
}
`,locationsMap:{sizes:{startLoc:{col:21,line:47},endLoc:{col:1,line:56},startBody:{col:21,line:47},endBody:{col:1,line:56}},colors:{startLoc:{col:22,line:58},endLoc:{col:1,line:68},startBody:{col:22,line:58},endBody:{col:1,line:68}},disabled:{startLoc:{col:24,line:70},endLoc:{col:1,line:76},startBody:{col:24,line:70},endBody:{col:1,line:76}}}},design:{type:"figma",url:"https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A203&t=XXZQL1f0uq4lyXu2-0"}},args:{children:"Badge padrão",color:"green",size:"md",disabled:!1},argTypes:{color:{options:["green","blue","red","yellow","black"],control:"select"},size:{options:["xs","sm","md","lg"],control:"radio"}},decorators:[r=>e("div",{className:"flex flex-col flex-wrap justify-center items-center gap-10 max-w-2lx my-0 mx-auto",children:r()})]},y={name:"Playground"},x=n(()=>a(l,{children:[e(o,{size:"xs",children:"Extra Small Badge"}),e(o,{size:"sm",children:"Small Badge"}),e(o,{size:"md",children:"Medium Badge"}),e(o,{size:"lg",children:"Large Badge"})]}),"Sizes"),f=n(()=>a(l,{children:[e(o,{color:"green",children:"Green"}),e(o,{color:"blue",children:"Blue"}),e(o,{color:"red",children:"Red"}),e(o,{color:"yellow",children:"Yellow"}),e(o,{color:"black",children:"Black"})]}),"Colors"),b=n(()=>e(l,{children:e(o,{disabled:!0,children:"Disabled"})}),"Disabled"),h=["Playground","Sizes","Colors","Disabled"];export{f as Colors,b as Disabled,y as Playground,x as Sizes,h as __namedExportsOrder,u as default};
//# sourceMappingURL=Badge.stories-b7d00447.js.map
