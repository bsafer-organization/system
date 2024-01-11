var s=Object.defineProperty;var o=(e,i)=>s(e,"name",{value:i,configurable:!0});import{D as n}from"./index-341021b4.js";import{j as r,a as d}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const a={allColors:["inherit","black","white","background","transparent","primary-main","secondary-main","assistant-blue-main","assistant-blue-light","assistant-blue-dark","assistant-green-main","assistant-green-light","assistant-green-dark","assistant-yellow-main","assistant-yellow-light","assistant-yellow-dark","assistant-red-main","assistant-red-light","assistant-red-dark","grey-900","grey-800","grey-700","grey-600","grey-500","grey-400","grey-300","grey-200","grey-100"]},b={title:"Core/Box",component:n,parameters:{storySource:{source:`import { Box, BoxProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { commonArgs } from '../helpers/commonArgs'

export default {
  title: 'Core/Box',
  component: Box,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Za7vr5EZ8X9Nuk9Ibn4zXr/Foundations?node-id=515%3A113&t=zrKCrKX5jnWmeQ3E-0'
    }
  },
  args: {
    children: <span>Box</span>,
    backgroundColor: 'assistant-green-light',
    color: 'black',
    padding: 'p-5'
  },
  argTypes: {
    padding: {
      description: 'padding values string',
      table: {
        defaultValue: { summary: 'p-2' }
      },
      options: [
        'p-5',
        'pt-10',
        'pr-10',
        'pl-10',
        'pb-10',
        'pt-10 pb-10',
        'pl-10 pr-10',
        'p-10'
      ],
      control: 'select'
    },
    children: {
      control: 'null'
    },
    backgroundColor: {
      description: 'Define this background color',
      table: {
        defaultValue: { summary: 'white' }
      },
      options: commonArgs.allColors,
      control: 'select'
    },
    color: {
      description: 'Define this text color',
      table: {
        defaultValue: { summary: 'black' }
      },
      options: commonArgs.allColors,
      control: 'select'
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col justify-center items-center">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<BoxProps>

export const Playground: StoryObj<BoxProps> = {}

export const BorderRadius = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-10">
      <Box padding="p-5" borderRadius="none">
        none
        <br /> border-radius: 0px
      </Box>
      <Box padding="p-5" borderRadius="sm">
        sm
        <br /> border-radius: 0.125rem = 2px
      </Box>
      <Box padding="p-5" borderRadius="md">
        md
        <br /> border-radius: 0.25rem = 4px
      </Box>
      <Box padding="p-5" borderRadius="lg">
        lg
        <br /> border-radius: 0.375rem = 6px
      </Box>
      <Box padding="p-5" borderRadius="xl">
        xl
        <br /> border-radius: 0.5rem = 8px
      </Box>
      <Box padding="p-5" borderRadius="2xl">
        2xl
        <br /> border-radius: 0.75rem = 12px
      </Box>
      <Box padding="p-5" borderRadius="3xl">
        3xl
        <br /> border-radius: 1rem = 16px
      </Box>
      <Box padding="p-5" borderRadius="4xl">
        4xl
        <br /> border-radius: 1.5rem = 24px
      </Box>
      <Box padding="p-5" borderRadius="full">
        full
        <br /> border-radius: 9999px
      </Box>
    </div>
  )
}

export const Padding = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-10 w-full">
      <Box padding="pt-5" borderRadius="md">
        PaddingTop
      </Box>
      <Box padding="pr-5" borderRadius="md">
        PaddingRight
      </Box>
      <Box padding="pb-5" borderRadius="md">
        PaddingBottom
      </Box>
      <Box padding="pl-5" borderRadius="md">
        PaddingLeft
      </Box>
      <Box padding="p-5" borderRadius="md">
        PaddingAll
      </Box>
    </div>
  )
}
`,locationsMap:{"border-radius":{startLoc:{col:28,line:71},endLoc:{col:1,line:112},startBody:{col:28,line:71},endBody:{col:1,line:112}},padding:{startLoc:{col:23,line:114},endLoc:{col:1,line:134},startBody:{col:23,line:114},endBody:{col:1,line:134}}}},design:{type:"figma",url:"https://www.figma.com/file/Za7vr5EZ8X9Nuk9Ibn4zXr/Foundations?node-id=515%3A113&t=zrKCrKX5jnWmeQ3E-0"}},args:{children:r("span",{children:"Box"}),backgroundColor:"assistant-green-light",color:"black",padding:"p-5"},argTypes:{padding:{description:"padding values string",table:{defaultValue:{summary:"p-2"}},options:["p-5","pt-10","pr-10","pl-10","pb-10","pt-10 pb-10","pl-10 pr-10","p-10"],control:"select"},children:{control:"null"},backgroundColor:{description:"Define this background color",table:{defaultValue:{summary:"white"}},options:a.allColors,control:"select"},color:{description:"Define this text color",table:{defaultValue:{summary:"black"}},options:a.allColors,control:"select"}},decorators:[e=>r("div",{className:"flex flex-col justify-center items-center",children:e()})]},x={},B=o(()=>d("div",{className:"grid grid-cols-3 justify-center items-center gap-10",children:[d(n,{padding:"p-5",borderRadius:"none",children:["none",r("br",{})," border-radius: 0px"]}),d(n,{padding:"p-5",borderRadius:"sm",children:["sm",r("br",{})," border-radius: 0.125rem = 2px"]}),d(n,{padding:"p-5",borderRadius:"md",children:["md",r("br",{})," border-radius: 0.25rem = 4px"]}),d(n,{padding:"p-5",borderRadius:"lg",children:["lg",r("br",{})," border-radius: 0.375rem = 6px"]}),d(n,{padding:"p-5",borderRadius:"xl",children:["xl",r("br",{})," border-radius: 0.5rem = 8px"]}),d(n,{padding:"p-5",borderRadius:"2xl",children:["2xl",r("br",{})," border-radius: 0.75rem = 12px"]}),d(n,{padding:"p-5",borderRadius:"3xl",children:["3xl",r("br",{})," border-radius: 1rem = 16px"]}),d(n,{padding:"p-5",borderRadius:"4xl",children:["4xl",r("br",{})," border-radius: 1.5rem = 24px"]}),d(n,{padding:"p-5",borderRadius:"full",children:["full",r("br",{})," border-radius: 9999px"]})]}),"BorderRadius"),y=o(()=>d("div",{className:"grid grid-cols-3 justify-center items-center gap-10 w-full",children:[r(n,{padding:"pt-5",borderRadius:"md",children:"PaddingTop"}),r(n,{padding:"pr-5",borderRadius:"md",children:"PaddingRight"}),r(n,{padding:"pb-5",borderRadius:"md",children:"PaddingBottom"}),r(n,{padding:"pl-5",borderRadius:"md",children:"PaddingLeft"}),r(n,{padding:"p-5",borderRadius:"md",children:"PaddingAll"})]}),"Padding"),f=["Playground","BorderRadius","Padding"];export{B as BorderRadius,y as Padding,x as Playground,f as __namedExportsOrder,b as default};
//# sourceMappingURL=Box.stories-00872e0d.js.map
