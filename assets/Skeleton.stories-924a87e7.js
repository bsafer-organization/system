var g=Object.defineProperty;var o=(a,r)=>g(a,"name",{value:r,configurable:!0});import{l as e,c as s}from"./index-341021b4.js";import{j as n,a as l}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const y={parameters:{storySource:{source:`import { Skeleton, Text } from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Core/Skeleton'
} as Meta

interface PlaygroundProps {
  width: string
  height: string
  rounded: string
  backgroundColor: string
  className?: string
}

export const Playground: StoryFn<PlaygroundProps> = ({
  backgroundColor,
  height,
  width,
  rounded,
  className
}) => {
  return (
    <div className="w-screen max-w-[500px] flex flex-col gap-10">
      <Skeleton
        className={
          className || \`\${backgroundColor} \${height} \${width} \${rounded}\`
        }
      />
    </div>
  )
}

Playground.args = {
  className: '',
  width: 'w-full',
  height: 'h-10',
  rounded: 'rounded-md',
  backgroundColor: 'bg-grey-200'
}
Playground.argTypes = {
  width: {
    options: ['w-full', 'w-5', 'w-10', 'w-20', 'w-40', 'w-80'],
    control: 'inline-radio'
  },
  height: {
    options: ['h-5', 'h-10', 'h-20', 'h-40', 'h-80'],
    control: 'inline-radio'
  },
  rounded: {
    options: [
      'rounded-xs',
      'rounded-md',
      'rounded-lg',
      'rounded-xl',
      'rounded-2xl',
      'rounded-3xl',
      'rounded-4xl',
      'rounded-full'
    ],
    control: 'select'
  },
  backgroundColor: {
    options: [
      'bg-grey-100',
      'bg-grey-200',
      'bg-grey-300',
      'bg-grey-400',
      'bg-grey-500',
      'bg-grey-600',
      'bg-grey-700',
      'bg-grey-800',
      'bg-assistant-red-light',
      'bg-assistant-blue-light',
      'bg-assistant-green-light',
      'bg-assistant-yellow-light'
    ],
    control: 'select'
  }
}

export const Colors = () => {
  return (
    <div className="w-[500px] grid grid-cols-4 gap-4">
      <div className="col-span-4">
        <Text>AllColors</Text>
      </div>
      <Skeleton className="bg-assistant-red-light cols-span-1" />
      <Skeleton className="bg-assistant-blue-light cols-span-1" />
      <Skeleton className="bg-assistant-green-light cols-span-1" />
      <Skeleton className="bg-assistant-yellow-light cols-span-1" />
    </div>
  )
}

export const Sizes = () => {
  return (
    <div className="w-[500px] flex gap-4">
      <div className="flex-1">
        <Text>Width</Text>
        <Skeleton />
      </div>
      <div className="flex-1">
        <Text>height</Text>
        <Skeleton className="h-52" />
      </div>
      <div className="flex-1">
        <Text>Both</Text>
        <Skeleton className="w-40 h-40" />
      </div>
    </div>
  )
}

export const Rounded = () => {
  return (
    <div className="w-[500px] flex gap-4">
      <div className="flex-1">
        <Text>Default</Text>
        <Skeleton />
      </div>
      <div className="flex-1">
        <Text>rounded-xl</Text>
        <Skeleton className="rounded-xl" />
      </div>
      <div className="flex-1">
        <Text>rounded-full</Text>
        <Skeleton className="mb-2 rounded-full w-20 h-20" />
        <Skeleton className="rounded-full" />
      </div>
    </div>
  )
}
`,locationsMap:{playground:{startLoc:{col:52,line:16},endLoc:{col:1,line:32},startBody:{col:52,line:16},endBody:{col:1,line:32}},colors:{startLoc:{col:22,line:82},endLoc:{col:1,line:94},startBody:{col:22,line:82},endBody:{col:1,line:94}},sizes:{startLoc:{col:21,line:96},endLoc:{col:1,line:113},startBody:{col:21,line:96},endBody:{col:1,line:113}},rounded:{startLoc:{col:23,line:115},endLoc:{col:1,line:133},startBody:{col:23,line:115},endBody:{col:1,line:133}}}}},title:"Core/Skeleton"},t=o(({backgroundColor:a,height:r,width:d,rounded:i,className:c})=>n("div",{className:"w-screen max-w-[500px] flex flex-col gap-10",children:n(e,{className:c||`${a} ${r} ${d} ${i}`})}),"Playground");t.args={className:"",width:"w-full",height:"h-10",rounded:"rounded-md",backgroundColor:"bg-grey-200"};t.argTypes={width:{options:["w-full","w-5","w-10","w-20","w-40","w-80"],control:"inline-radio"},height:{options:["h-5","h-10","h-20","h-40","h-80"],control:"inline-radio"},rounded:{options:["rounded-xs","rounded-md","rounded-lg","rounded-xl","rounded-2xl","rounded-3xl","rounded-4xl","rounded-full"],control:"select"},backgroundColor:{options:["bg-grey-100","bg-grey-200","bg-grey-300","bg-grey-400","bg-grey-500","bg-grey-600","bg-grey-700","bg-grey-800","bg-assistant-red-light","bg-assistant-blue-light","bg-assistant-green-light","bg-assistant-yellow-light"],control:"select"}};const f=o(()=>l("div",{className:"w-[500px] grid grid-cols-4 gap-4",children:[n("div",{className:"col-span-4",children:n(s,{children:"AllColors"})}),n(e,{className:"bg-assistant-red-light cols-span-1"}),n(e,{className:"bg-assistant-blue-light cols-span-1"}),n(e,{className:"bg-assistant-green-light cols-span-1"}),n(e,{className:"bg-assistant-yellow-light cols-span-1"})]}),"Colors"),w=o(()=>l("div",{className:"w-[500px] flex gap-4",children:[l("div",{className:"flex-1",children:[n(s,{children:"Width"}),n(e,{})]}),l("div",{className:"flex-1",children:[n(s,{children:"height"}),n(e,{className:"h-52"})]}),l("div",{className:"flex-1",children:[n(s,{children:"Both"}),n(e,{className:"w-40 h-40"})]})]}),"Sizes"),v=o(()=>l("div",{className:"w-[500px] flex gap-4",children:[l("div",{className:"flex-1",children:[n(s,{children:"Default"}),n(e,{})]}),l("div",{className:"flex-1",children:[n(s,{children:"rounded-xl"}),n(e,{className:"rounded-xl"})]}),l("div",{className:"flex-1",children:[n(s,{children:"rounded-full"}),n(e,{className:"mb-2 rounded-full w-20 h-20"}),n(e,{className:"rounded-full"})]})]}),"Rounded"),k=["Playground","Colors","Sizes","Rounded"];export{f as Colors,t as Playground,v as Rounded,w as Sizes,k as __namedExportsOrder,y as default};
//# sourceMappingURL=Skeleton.stories-924a87e7.js.map
