var s=Object.defineProperty;var o=(e,r)=>s(e,"name",{value:r,configurable:!0});import{Q as t}from"./index-341021b4.js";import{j as n}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const p={title:"Core/Toggle",component:t,parameters:{storySource:{source:`import { Toggle, ToggleProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Core/Toggle',
  component: Toggle,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A229&t=ZnZVNQWSuGnCMrwJ-0'
    }
  },
  args: {
    text: '',
    checked: false
  },
  decorators: [
    (Story) => <div className="w-screen max-w-screen-sm">{Story()}</div>
  ]
} as Meta<ToggleProps>

export const Playground: StoryObj<ToggleProps> = {}

export const WithoutText = () => {
  return <Toggle />
}

export const WithText = () => {
  return <Toggle text="Texto inserido" className="w-[25rem]" />
}
`,locationsMap:{"without-text":{startLoc:{col:27,line:24},endLoc:{col:1,line:26},startBody:{col:27,line:24},endBody:{col:1,line:26}},"with-text":{startLoc:{col:24,line:28},endLoc:{col:1,line:30},startBody:{col:24,line:28},endBody:{col:1,line:30}}}},design:{type:"figma",url:"https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A229&t=ZnZVNQWSuGnCMrwJ-0"}},args:{text:"",checked:!1},decorators:[e=>n("div",{className:"w-screen max-w-screen-sm",children:e()})]},x={},u=o(()=>n(t,{}),"WithoutText"),T=o(()=>n(t,{text:"Texto inserido",className:"w-[25rem]"}),"WithText"),w=["Playground","WithoutText","WithText"];export{x as Playground,T as WithText,u as WithoutText,w as __namedExportsOrder,p as default};
//# sourceMappingURL=Toggle.stories-77d6822c.js.map
