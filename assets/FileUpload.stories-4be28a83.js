var a=Object.defineProperty;var r=(o,l)=>a(o,"name",{value:l,configurable:!0});import{w as e}from"./index-341021b4.js";import{j as n}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const m={parameters:{storySource:{source:`import { Meta, StoryObj } from '@storybook/react'
import { FileUpload, FileUploadProps } from '@bsafer-system/react'

export default {
  title: 'Core/FileUpload',
  component: FileUpload,
  args: {
    error: '',
    disabled: false,
    onChangeFile: (file) => {
      console.log(file)
    },
    label: 'File upload',
    optional: false,
    supportedFiles: ['docx', 'pdf']
  },
  argTypes: {
    error: {
      control: 'string'
    },
    disabled: {
      control: 'boolean'
    },
    onChangeFile: { action: 'onChangeFile' },
    optional: {
      control: 'boolean'
    }
  },
  decorators: [(Story) => <div className="w-[400px]">{Story()}</div>]
} as Meta<FileUploadProps>

export const Playground: StoryObj<FileUploadProps> = {}

export const Error = () => {
  return <FileUpload error="Arquivo da Guia é obrigatório" />
}
`,locationsMap:{error:{startLoc:{col:21,line:34},endLoc:{col:1,line:36},startBody:{col:21,line:34},endBody:{col:1,line:36}}}}},title:"Core/FileUpload",component:e,args:{error:"",disabled:!1,onChangeFile:o=>{console.log(o)},label:"File upload",optional:!1,supportedFiles:["docx","pdf"]},argTypes:{error:{control:"string"},disabled:{control:"boolean"},onChangeFile:{action:"onChangeFile"},optional:{control:"boolean"}},decorators:[o=>n("div",{className:"w-[400px]",children:o()})]},F={},u=r(()=>n(e,{error:"Arquivo da Guia é obrigatório"}),"Error"),b=["Playground","Error"];export{u as Error,F as Playground,b as __namedExportsOrder,m as default};
//# sourceMappingURL=FileUpload.stories-4be28a83.js.map
