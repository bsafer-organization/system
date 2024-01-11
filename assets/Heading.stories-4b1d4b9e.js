var r=Object.defineProperty;var t=(a,i)=>r(a,"name",{value:i,configurable:!0});import{M as n,c as o}from"./index-341021b4.js";import{a as s,j as e}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const y={title:"Core/Heading",component:n,parameters:{storySource:{source:`import { Heading, HeadingProps, Text } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Heading',
  component: Heading,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Za7vr5EZ8X9Nuk9Ibn4zXr/Foundations?node-id=0%3A1&t=MiQGdhHsZublWo6t-0'
    }
  },
  args: {
    children: 'Lorem ipsum dolor sit!',
    weight: 'bold',
    color: 'inherit',
    as: 'h2'
  },
  argTypes: {
    as: {
      control: {
        type: 'inline-radio',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as PropsToArray<HeadingProps['as']>
      }
    },
    weight: {
      control: {
        type: 'inline-radio',
        options: ['bold', 'black', 'regular'] as PropsToArray<HeadingProps['weight']>
      }
    },
    color: {
      control: {
        type: 'select',
        options: ['black', 'inherit', 'white', 'background', 'transparent',
        'primary-main', 'secondary-main',
        'assistant-blue-main', 'assistant-blue-light', 'assistant-blue-dark',
        'assistant-green-main', 'assistant-green-light', 'assistant-green-dark',
        'assistant-yellow-main', 'assistant-yellow-light', 'assistant-yellow-dark',
        'assistant-red-main', 'assistant-red-light', 'assistant-red-dark',
        'grey-900', 'grey-800', 'grey-700', 'grey-600', 'grey-500', 'grey-400',
        'grey-300', 'grey-200', 'grey-100'] as PropsToArray<HeadingProps['color']>
      }
    }
  }
} as Meta<HeadingProps>

export const Playground: StoryObj<HeadingProps> = {
  decorators: [
    (Story, { args }) => (
      <div className=" max-w-md text-assistant-yellow-main flex flex-col gap-4">
        {args.color === 'inherit' && (
          <Text color="inherit" as="p">
            (Parent Color)
          </Text>
        )}
        {Story()}
      </div>
    )
  ]
}

export const HTMLElements = () => {
  return (
    <div className="flex flex-col gap-4 text-assistant-yellow-main ">
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
    </div>
  )
}

export const Weights = () => {
  return (
    <div className="flex flex-col gap-4 text-assistant-yellow-main">
      <Heading weight="regular">Heading Regular</Heading>
      <Heading weight="bold">Heading Bold</Heading>
      <Heading weight="black">Heading Black</Heading>
    </div>
  )
}
`,locationsMap:{"html-elements":{startLoc:{col:28,line:64},endLoc:{col:1,line:75},startBody:{col:28,line:64},endBody:{col:1,line:75}},weights:{startLoc:{col:23,line:77},endLoc:{col:1,line:85},startBody:{col:23,line:77},endBody:{col:1,line:85}}}},design:{type:"figma",url:"https://www.figma.com/file/Za7vr5EZ8X9Nuk9Ibn4zXr/Foundations?node-id=0%3A1&t=MiQGdhHsZublWo6t-0"}},args:{children:"Lorem ipsum dolor sit!",weight:"bold",color:"inherit",as:"h2"},argTypes:{as:{control:{type:"inline-radio",options:["h1","h2","h3","h4","h5","h6"]}},weight:{control:{type:"inline-radio",options:["bold","black","regular"]}},color:{control:{type:"select",options:["black","inherit","white","background","transparent","primary-main","secondary-main","assistant-blue-main","assistant-blue-light","assistant-blue-dark","assistant-green-main","assistant-green-light","assistant-green-dark","assistant-yellow-main","assistant-yellow-light","assistant-yellow-dark","assistant-red-main","assistant-red-light","assistant-red-dark","grey-900","grey-800","grey-700","grey-600","grey-500","grey-400","grey-300","grey-200","grey-100"]}}}},H={decorators:[(a,{args:i})=>s("div",{className:" max-w-md text-assistant-yellow-main flex flex-col gap-4",children:[i.color==="inherit"&&e(o,{color:"inherit",as:"p",children:"(Parent Color)"}),a()]})]},u=t(()=>s("div",{className:"flex flex-col gap-4 text-assistant-yellow-main ",children:[e(n,{as:"h1",children:"Heading 1"}),e(n,{as:"h2",children:"Heading 2"}),e(n,{as:"h3",children:"Heading 3"}),e(n,{as:"h4",children:"Heading 4"}),e(n,{as:"h5",children:"Heading 5"}),e(n,{as:"h6",children:"Heading 6"})]}),"HTMLElements"),w=t(()=>s("div",{className:"flex flex-col gap-4 text-assistant-yellow-main",children:[e(n,{weight:"regular",children:"Heading Regular"}),e(n,{weight:"bold",children:"Heading Bold"}),e(n,{weight:"black",children:"Heading Black"})]}),"Weights"),x=["Playground","HTMLElements","Weights"];export{u as HTMLElements,H as Playground,w as Weights,x as __namedExportsOrder,y as default};
//# sourceMappingURL=Heading.stories-4b1d4b9e.js.map
