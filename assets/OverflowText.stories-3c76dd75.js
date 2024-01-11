var s=Object.defineProperty;var t=(r,o)=>s(r,"name",{value:o,configurable:!0});import{h as n}from"./index-341021b4.js";import{a as l,F as d,j as e}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const w={parameters:{storySource:{source:`import { OverflowText } from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Core/OverflowText'
} as Meta

interface PlaygroundProps {
  firstText: string
  secondText: string
}

export const Playground: StoryFn<PlaygroundProps> = ({
  firstText,
  secondText
}) => {
  return (
    <>
      <div className="flex flex-col p-5 border border-grey-400 rounded w-[400px] overflow-hidden resize-x mb-8">
        <OverflowText>{firstText}</OverflowText>
      </div>
      <div className="flex flex-col p-5 border border-grey-400 rounded w-[400px] overflow-hidden resize-x">
        <OverflowText>{secondText}</OverflowText>
      </div>
    </>
  )
}

Playground.args = {
  firstText: 'Compare text to see overflow',
  secondText: 'If text has no overflow, the tooltip is disable'
}
`,locationsMap:{playground:{startLoc:{col:52,line:13},endLoc:{col:1,line:27},startBody:{col:52,line:13},endBody:{col:1,line:27}}}}},title:"Core/OverflowText"},i=t(({firstText:r,secondText:o})=>l(d,{children:[e("div",{className:"flex flex-col p-5 border border-grey-400 rounded w-[400px] overflow-hidden resize-x mb-8",children:e(n,{children:r})}),e("div",{className:"flex flex-col p-5 border border-grey-400 rounded w-[400px] overflow-hidden resize-x",children:e(n,{children:o})})]}),"Playground");i.args={firstText:"Compare text to see overflow",secondText:"If text has no overflow, the tooltip is disable"};const y=["Playground"];export{i as Playground,y as __namedExportsOrder,w as default};
//# sourceMappingURL=OverflowText.stories-3c76dd75.js.map
