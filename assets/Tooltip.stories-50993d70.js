var p=Object.defineProperty;var l=(i,s)=>p(i,"name",{value:s,configurable:!0});import{o as t,c as n,d as r,x as d}from"./index-341021b4.js";import{a as e,j as o}from"./jsx-runtime-71fb89ed.js";import"./index-406657fe.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const v={parameters:{storySource:{source:`import {
  Button,
  Heading,
  Input,
  Text,
  Tooltip,
  TooltipProps
} from '@bsafer-system/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

type TooltipStoryProps = TooltipProps['Root'] &
  TooltipProps['Content'] &
  TooltipProps['Trigger']

export default {
  title: 'Core/Tooltip'
} as Meta

export const Playground: StoryFn<TooltipStoryProps> = (props) => {
  return (
    <Tooltip.Root
      skipDelayDuration={props.skipDelayDuration}
      delayDuration={props.delayDuration}
      disableHoverableContent={props.disableHoverableContent}
    >
      <Tooltip.Trigger>
        <Text size="lg">Hover me!</Text>
      </Tooltip.Trigger>

      <Tooltip.Content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

Playground.argTypes = {
  skipDelayDuration: {
    table: {
      defaultValue: { summary: 300 }
    }
  },
  disableHoverableContent: {
    table: {
      defaultValue: { summary: false }
    }
  },
  delayDuration: {
    table: {
      defaultValue: { summary: 300 }
    }
  },
  open: {
    control: 'boolean',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  children: {
    control: {
      type: null
    }
  },
  portal: {
    table: {
      defaultValue: { summary: 'undefined' }
    },
    control: {
      type: null
    }
  },
  onOpenChange: {
    table: {
      defaultValue: { summary: 'undefined' }
    },
    control: {
      type: null
    }
  }
}

Playground.args = {
  delayDuration: 300,
  skipDelayDuration: 300,
  disableHoverableContent: false,
  align: 'center',
  alignOffset: 0,
  side: 'top',
  sideOffset: 8,
  sticky: 'partial',
  avoidCollisions: true,
  collisionBoundary: [],
  collisionPadding: 0,
  hideWhenDetached: false,
  arrow: {
    width: 10,
    height: 5,
    hidden: false
  },
  children: <Text size="lg">Hover me!</Text>,
  onOpenChange: (open: any) => console.log('Tooltip: ', open)
}

export const TootipWithoutArrow = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Text size="lg">Hover me! (but without arrow)</Text>
      </Tooltip.Trigger>

      <Tooltip.Content arrow={{ hidden: true }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

TootipWithoutArrow.storyName = 'Tootip Without Arrow'

export const TootipWithHugeText = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Text size="lg">Huge text in tooltip...</Text>
      </Tooltip.Trigger>

      <Tooltip.Content arrow={{ hidden: true }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, eaque
        iste ut numquam tempora natus consectetur veniam impedit consequuntur
        eveniet voluptate quod architecto earum provident doloribus laudantium a
        quia doloremque. (max-w-md)
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

TootipWithHugeText.storyName = 'Tootip With Huge Text'

export const TooltipWithCustomContent = () => {
  return (
    <div className="h-[98vh]">
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Register here!</Text>
        </Tooltip.Trigger>

        <Tooltip.Content
          avoidCollisions
          className="bg-white shadow-md p-4 rounded-lg flex flex-col gap-2"
          arrow={{
            className: 'fill-white'
          }}
        >
          <Input placeholder="Enter your name" label="Name" />
          <Input placeholder="email@email.com" label="Email" />
          <Input placeholder="8 - 15 characters" label="Password" />
          <Button>Register now!</Button>
        </Tooltip.Content>
      </Tooltip.Root>
    </div>
  )
}

TooltipWithCustomContent.storyName = 'Tootip With Custom Content'

export const TooltipPositions = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Top</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="top">On top!</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Left</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="left">On left!</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Right</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="right">On right!</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Bottom</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="bottom">On bottom!</Tooltip.Content>
      </Tooltip.Root>
    </div>
  )
}

TooltipPositions.storyName = 'Tootip Positions'

export const TooltipOffset = () => {
  return (
    <div className="flex flex-col gap-6">
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">32px</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="top" sideOffset={32}>
          Offset 32px!
        </Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">64px</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="top" sideOffset={32}>
          Ofsset 64px!
        </Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger>
          <Text size="lg">Any value</Text>
        </Tooltip.Trigger>

        <Tooltip.Content side="top" sideOffset={150}>
          Ofsset to any where (150px)
        </Tooltip.Content>
      </Tooltip.Root>
    </div>
  )
}

TooltipOffset.storyName = 'Tootip Offset'
`,locationsMap:{playground:{startLoc:{col:54,line:19},endLoc:{col:1,line:35},startBody:{col:54,line:19},endBody:{col:1,line:35}},"tootip-without-arrow":{startLoc:{col:34,line:104},endLoc:{col:1,line:116},startBody:{col:34,line:104},endBody:{col:1,line:116}},"tootip-with-huge-text":{startLoc:{col:34,line:120},endLoc:{col:1,line:135},startBody:{col:34,line:120},endBody:{col:1,line:135}},"tooltip-with-custom-content":{startLoc:{col:40,line:139},endLoc:{col:1,line:162},startBody:{col:40,line:139},endBody:{col:1,line:162}},"tooltip-positions":{startLoc:{col:32,line:166},endLoc:{col:1,line:202},startBody:{col:32,line:166},endBody:{col:1,line:202}},"tooltip-offset":{startLoc:{col:29,line:206},endLoc:{col:1,line:240},startBody:{col:29,line:206},endBody:{col:1,line:240}}}}},title:"Core/Tooltip"},a=l(i=>e(t.Root,{skipDelayDuration:i.skipDelayDuration,delayDuration:i.delayDuration,disableHoverableContent:i.disableHoverableContent,children:[o(t.Trigger,{children:o(n,{size:"lg",children:"Hover me!"})}),o(t.Content,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit"})]}),"Playground");a.argTypes={skipDelayDuration:{table:{defaultValue:{summary:300}}},disableHoverableContent:{table:{defaultValue:{summary:!1}}},delayDuration:{table:{defaultValue:{summary:300}}},open:{control:"boolean",table:{defaultValue:{summary:"undefined"}}},children:{control:{type:null}},portal:{table:{defaultValue:{summary:"undefined"}},control:{type:null}},onOpenChange:{table:{defaultValue:{summary:"undefined"}},control:{type:null}}};a.args={delayDuration:300,skipDelayDuration:300,disableHoverableContent:!1,align:"center",alignOffset:0,side:"top",sideOffset:8,sticky:"partial",avoidCollisions:!0,collisionBoundary:[],collisionPadding:0,hideWhenDetached:!1,arrow:{width:10,height:5,hidden:!1},children:o(n,{size:"lg",children:"Hover me!"}),onOpenChange:i=>console.log("Tooltip: ",i)};const c=l(()=>e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"Hover me! (but without arrow)"})}),o(t.Content,{arrow:{hidden:!0},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit"})]}),"TootipWithoutArrow");c.storyName="Tootip Without Arrow";const u=l(()=>e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"Huge text in tooltip..."})}),o(t.Content,{arrow:{hidden:!0},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, eaque iste ut numquam tempora natus consectetur veniam impedit consequuntur eveniet voluptate quod architecto earum provident doloribus laudantium a quia doloremque. (max-w-md)"})]}),"TootipWithHugeText");u.storyName="Tootip With Huge Text";const T=l(()=>o("div",{className:"h-[98vh]",children:e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"Register here!"})}),e(t.Content,{avoidCollisions:!0,className:"bg-white shadow-md p-4 rounded-lg flex flex-col gap-2",arrow:{className:"fill-white"},children:[o(r,{placeholder:"Enter your name",label:"Name"}),o(r,{placeholder:"email@email.com",label:"Email"}),o(r,{placeholder:"8 - 15 characters",label:"Password"}),o(d,{children:"Register now!"})]})]})}),"TooltipWithCustomContent");T.storyName="Tootip With Custom Content";const g=l(()=>e("div",{className:"flex flex-col gap-6",children:[e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"Top"})}),o(t.Content,{side:"top",children:"On top!"})]}),e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"Left"})}),o(t.Content,{side:"left",children:"On left!"})]}),e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"Right"})}),o(t.Content,{side:"right",children:"On right!"})]}),e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"Bottom"})}),o(t.Content,{side:"bottom",children:"On bottom!"})]})]}),"TooltipPositions");g.storyName="Tootip Positions";const m=l(()=>e("div",{className:"flex flex-col gap-6",children:[e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"32px"})}),o(t.Content,{side:"top",sideOffset:32,children:"Offset 32px!"})]}),e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"64px"})}),o(t.Content,{side:"top",sideOffset:32,children:"Ofsset 64px!"})]}),e(t.Root,{children:[o(t.Trigger,{children:o(n,{size:"lg",children:"Any value"})}),o(t.Content,{side:"top",sideOffset:150,children:"Ofsset to any where (150px)"})]})]}),"TooltipOffset");m.storyName="Tootip Offset";const w=["Playground","TootipWithoutArrow","TootipWithHugeText","TooltipWithCustomContent","TooltipPositions","TooltipOffset"];export{a as Playground,m as TooltipOffset,g as TooltipPositions,T as TooltipWithCustomContent,u as TootipWithHugeText,c as TootipWithoutArrow,w as __namedExportsOrder,v as default};
//# sourceMappingURL=Tooltip.stories-50993d70.js.map
