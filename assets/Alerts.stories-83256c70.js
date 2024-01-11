var a=Object.defineProperty;var n=(s,r)=>a(s,"name",{value:r,configurable:!0});import{J as e}from"./index-341021b4.js";import{j as o,a as t}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const f={title:"Core/Alerts",component:e,parameters:{storySource:{source:`import { AlertProps, Alerts } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Alerts',
  component: Alerts,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A325&t=yFGXEsdXrdkco4En-0'
    }
  },
  args: {
    feedback: 'success',
    message: 'Mensagem de feedback para o usuário',
    complement: 'Texto complementar sobre o feedback apresentado.'
  },
  argTypes: {
    feedback: {
      control: 'inline-radio',
      options: ['success', 'warning', 'error', 'info'] as PropsToArray<
        AlertProps['feedback']
      >
    }
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
} as Meta<AlertProps>

export const Playground: StoryObj<AlertProps> = {}

export const Feedbacks = () => {
  return (
    <div className="flex flex-col gap-8">
      <Alerts
        message="Mensagem de feedback para o usuário - success"
        feedback="success"
      />
      <Alerts message="Mensagem de feedback para o usuário" />
      <Alerts message="Mensagem de feedback para o usuário" feedback="error" />
      <Alerts message="Mensagem de feedback para o usuário" feedback="info" />
    </div>
  )
}

export const WithoutComplementText = () => {
  return <Alerts message="Mensagem de feedback para o usuário" />
}

export const WithComplementText = () => {
  return (
    <Alerts
      message="Mensagem de feedback para o usuário"
      complement="Texto complementar sobre o feedback apresentado."
    />
  )
}
`,locationsMap:{feedbacks:{startLoc:{col:25,line:40},endLoc:{col:1,line:52},startBody:{col:25,line:40},endBody:{col:1,line:52}},"without-complement-text":{startLoc:{col:37,line:54},endLoc:{col:1,line:56},startBody:{col:37,line:54},endBody:{col:1,line:56}},"with-complement-text":{startLoc:{col:34,line:58},endLoc:{col:1,line:65},startBody:{col:34,line:58},endBody:{col:1,line:65}}}},design:{type:"figma",url:"https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A325&t=yFGXEsdXrdkco4En-0"}},args:{feedback:"success",message:"Mensagem de feedback para o usuário",complement:"Texto complementar sobre o feedback apresentado."},argTypes:{feedback:{control:"inline-radio",options:["success","warning","error","info"]}},decorators:[s=>o("div",{className:"flex flex-col flex-wrap justify-center items-center gap-10 max-w-2xl my-0 mx-auto",children:s()})]},g={},b=n(()=>t("div",{className:"flex flex-col gap-8",children:[o(e,{message:"Mensagem de feedback para o usuário - success",feedback:"success"}),o(e,{message:"Mensagem de feedback para o usuário"}),o(e,{message:"Mensagem de feedback para o usuário",feedback:"error"}),o(e,{message:"Mensagem de feedback para o usuário",feedback:"info"})]}),"Feedbacks"),x=n(()=>o(e,{message:"Mensagem de feedback para o usuário"}),"WithoutComplementText"),k=n(()=>o(e,{message:"Mensagem de feedback para o usuário",complement:"Texto complementar sobre o feedback apresentado."}),"WithComplementText"),y=["Playground","Feedbacks","WithoutComplementText","WithComplementText"];export{b as Feedbacks,g as Playground,k as WithComplementText,x as WithoutComplementText,y as __namedExportsOrder,f as default};
//# sourceMappingURL=Alerts.stories-83256c70.js.map
