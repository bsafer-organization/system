var s=Object.defineProperty;var l=(n,a)=>s(n,"name",{value:a,configurable:!0});import{g as o,A as c}from"./index-341021b4.js";import{j as e,F as t}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const r=[{value:"ocean",label:"Ocean"},{value:"blue",label:"Blue"},{value:"purple",label:"Purple"},{value:"red",label:"Red"},{value:"orange",label:"Orange"},{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"forest",label:"Forest"},{value:"slate",label:"Slate"},{value:"silver",label:"Silver"}],f={title:"Core/Select",component:o,parameters:{storySource:{source:`import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectProps } from '@bsafer-system/react'
import { ArrowUp2 } from 'iconsax-react'

const options = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' }
]

export default {
  title: 'Core/Select',
  component: Select,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=446%3A2391&t=fE8HNjTfArbFMfN1-0'
    }
  },
  args: {
    closeMenuOnScroll: false,
    closeMenuOnSelect: false,
    options,
    defaultValue: { value: 'ocean', label: 'Ocean' },
    disabled: false,
    label: 'Colors',
    optional: false,
    onValueChange: (value: any) => {
      console.log(value)
    }
  },
  argTypes: {
    closeMenuOnScroll: {
      control: 'boolean'
    },
    closeMenuOnSelect: {
      control: 'boolean'
    },
    options: {
      control: 'null'
    },
    disabled: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    },
    optional: {
      control: 'boolean'
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex justify-center items-center w-96">{Story()}</div>
      )
    }
  ]
} as Meta<SelectProps<any>>

export const Playground: StoryObj<SelectProps<any>> = {}

export const Optional = () => {
  return (
    <>
      <Select optional={true} label="Colors" options={options} />
    </>
  )
}

export const Error = () => {
  return (
    <>
      <Select error="Error" label="Colors" options={options} />
    </>
  )
}

export const Multiple = () => {
  return (
    <>
      <Select
        multiple={true}
        optional={true}
        label="Colors"
        options={options}
        onValueChange={(value: any) => {
          console.log(value)
        }}
      />
    </>
  )
}

export const CustomSelect = () => {
  return (
    <div className="w-40">
      <Select
        padding="4px 8px"
        options={options}
        backgroundColor="#E9EBED"
        border="1px solid transparent"
        borderRadius="full"
        dropdownIndicator={{
          icon: ArrowUp2,
          variant: 'Linear',
          hoverColor: 'grey'
        }}
      />
    </div>
  )
}
`,locationsMap:{optional:{startLoc:{col:24,line:71},endLoc:{col:1,line:77},startBody:{col:24,line:71},endBody:{col:1,line:77}},error:{startLoc:{col:21,line:79},endLoc:{col:1,line:85},startBody:{col:21,line:79},endBody:{col:1,line:85}},multiple:{startLoc:{col:24,line:87},endLoc:{col:1,line:101},startBody:{col:24,line:87},endBody:{col:1,line:101}},"custom-select":{startLoc:{col:28,line:103},endLoc:{col:1,line:120},startBody:{col:28,line:103},endBody:{col:1,line:120}}}},design:{type:"figma",url:"https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=446%3A2391&t=fE8HNjTfArbFMfN1-0"}},args:{closeMenuOnScroll:!1,closeMenuOnSelect:!1,options:r,defaultValue:{value:"ocean",label:"Ocean"},disabled:!1,label:"Colors",optional:!1,onValueChange:n=>{console.log(n)}},argTypes:{closeMenuOnScroll:{control:"boolean"},closeMenuOnSelect:{control:"boolean"},options:{control:"null"},disabled:{control:"boolean"},label:{control:"text"},optional:{control:"boolean"}},decorators:[n=>e("div",{className:"flex justify-center items-center w-96",children:n()})]},g={},S=l(()=>e(t,{children:e(o,{optional:!0,label:"Colors",options:r})}),"Optional"),y=l(()=>e(t,{children:e(o,{error:"Error",label:"Colors",options:r})}),"Error"),C=l(()=>e(t,{children:e(o,{multiple:!0,optional:!0,label:"Colors",options:r,onValueChange:n=>{console.log(n)}})}),"Multiple"),x=l(()=>e("div",{className:"w-40",children:e(o,{padding:"4px 8px",options:r,backgroundColor:"#E9EBED",border:"1px solid transparent",borderRadius:"full",dropdownIndicator:{icon:c,variant:"Linear",hoverColor:"grey"}})}),"CustomSelect"),O=["Playground","Optional","Error","Multiple","CustomSelect"];export{x as CustomSelect,y as Error,C as Multiple,S as Optional,g as Playground,O as __namedExportsOrder,f as default};
//# sourceMappingURL=Select.stories-141ee751.js.map
