var s=Object.defineProperty;var o=(n,e)=>s(n,"name",{value:e,configurable:!0});import{Y as t}from"./index-341021b4.js";import{j as a}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const f={title:"Core/MaskInput",component:t,parameters:{storySource:{source:`import { MaskInput, MaskInputProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Core/MaskInput',
  component: MaskInput,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A325&t=yFGXEsdXrdkco4En-0'
    }
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: false,
    optional: false,
    startIcon: false,
    endIcon: false,
    error: '',
    format: '(%%) %%%%%-%%%%',
    mask: ' ',
    patternChar: '%',
    allowEmptyFormat: true
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>]
} as Meta<MaskInputProps>

export const Playground: StoryObj<MaskInputProps> = {}

export const LimitedInput = () => {
  const value = 1234
  const MAX_LIMIT = 101
  return (
    <MaskInput
      label="Limited Input"
      placeholder="0 -> 100"
      format="######"
      error=""
      value={value}
      isAllowed={(values) => {
        const { floatValue } = values
        return floatValue! < MAX_LIMIT
      }}
    />
  )
}

export const InputWithOnValueChange = () => {
  return (
    <MaskInput
      label="OnValueChange Input"
      placeholder="Digite aqui"
      format="######"
      error=""
      onValueChange={(values, sourceInfo) => {
        console.log(values, sourceInfo)
      }}
    />
  )
}
`,locationsMap:{"limited-input":{startLoc:{col:28,line:31},endLoc:{col:1,line:47},startBody:{col:28,line:31},endBody:{col:1,line:47}},"input-with-on-value-change":{startLoc:{col:38,line:49},endLoc:{col:1,line:61},startBody:{col:38,line:49},endBody:{col:1,line:61}}}},design:{type:"figma",url:"https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A325&t=yFGXEsdXrdkco4En-0"}},args:{label:"Label",placeholder:"Placeholder",disabled:!1,optional:!1,startIcon:!1,endIcon:!1,error:"",format:"(%%) %%%%%-%%%%",mask:" ",patternChar:"%",allowEmptyFormat:!0},decorators:[n=>a("div",{className:"w-96",children:n()})]},h={},g=o(()=>a(t,{label:"Limited Input",placeholder:"0 -> 100",format:"######",error:"",value:1234,isAllowed:r=>{const{floatValue:l}=r;return l<101}}),"LimitedInput"),M=o(()=>a(t,{label:"OnValueChange Input",placeholder:"Digite aqui",format:"######",error:"",onValueChange:(n,e)=>{console.log(n,e)}}),"InputWithOnValueChange"),y=["Playground","LimitedInput","InputWithOnValueChange"];export{M as InputWithOnValueChange,g as LimitedInput,h as Playground,y as __namedExportsOrder,f as default};
//# sourceMappingURL=MaskInput.stories-8908f91a.js.map
