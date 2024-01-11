var y=Object.defineProperty;var r=(n,o)=>y(n,"name",{value:o,configurable:!0});import{m as a,M as c}from"./index-341021b4.js";import{r as v}from"./index-406657fe.js";import{a as s,j as e}from"./jsx-runtime-71fb89ed.js";import"./index-7c736eb3.js";import"./iframe-2763bc4f.js";import"./index-5aa49b9b.js";const U={parameters:{storySource:{source:`import {
  Heading,
  SortableSelect,
  SortableSelectOption,
  SortableSelectProps
} from '@bsafer-system/react'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Organisms/SortableSelect'
} as Meta

type PlaygroundProps = SortableSelectProps & { optionLimitBoolean?: boolean }

type User = {
  id: string
  name: string
  register: string
}

const users = Array.from(Array(3).keys()).map((index) => {
  const inc = index + 1
  return {
    id: inc.toString(),
    name: \`User-\${inc}\`,
    register: inc.toString().padStart(4, '0')
  }
})

export const Playground: StoryFn<PlaygroundProps> = (props) => {
  const { error, optionsLimit, optionLimitBoolean, label, disabled, optional } =
    props
  const [selectedUsers, setSelectedUsers] = useState<
    SortableSelectOption<User>[]
  >(
    // users.map((user) => ({
    //   label: user.name,
    //   value: user.id,
    //   meta: user
    // }))
    []
  )
  return (
    <div className="w-[95vw] grid grid-cols-12 gap-10">
      <div className="col-span-full md:col-span-5">
        <SortableSelect
          value={selectedUsers}
          label={label}
          optional={optional}
          options={users.map((user) => ({
            label: user.name,
            value: user.id,
            meta: user
          }))}
          error={error}
          disabled={disabled}
          optionsLimit={optionsLimit || optionLimitBoolean}
          onValuesChange={(options) => {
            console.log('options', options)
            setSelectedUsers(options)
          }}
          selectProps={{
            placeholder: 'Selecione um usuário'
          }}
        />
      </div>

      <div className="col-span-full md:col-span-7 pr-4">
        <Heading as="h6">Result (onValuesChange)</Heading>
        <div className="w-full overflow-x-hidden pr-4">
          {selectedUsers.map((user, index) => {
            return (
              <div key={index} className="flex gap-3 mb-3">
                <span className="bg-assistant-blue-light flex p-1 justify-center items-center rounded text-assistant-blue-dark">
                  {index + 1}
                </span>
                <div className="p-2 rounded bg-grey-100 flex-1">
                  <pre className="text-sm whitespace-pre-wrap">
                    {JSON.stringify(selectedUsers[index], null, 2)}
                  </pre>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Playground.args = {
  label: 'Usuários',
  optional: false,
  disabled: false,
  error: '',
  optionsLimit: undefined,
  optionLimitBoolean: false
}

Playground.argTypes = {
  optionsLimit: {
    name: 'optinLimit (Number)',
    control: 'number'
  },
  optionLimitBoolean: {
    name: 'optinLimit (Boolean)'
  }
}

export const Errors = () => {
  return (
    <div className="w-[400px]">
      <SortableSelect
        options={users.map((user) => ({
          label: user.name,
          value: user.id,
          meta: user
        }))}
        error={'Campo obrigatório'}
        selectProps={{
          placeholder: 'Selecione um usuário'
        }}
      />
    </div>
  )
}

interface WithOptionsLimitsProps {
  optionsLimitNumber: number
  optionsLimitBoolean: boolean
}

export const WithOptionLimits: StoryFn<WithOptionsLimitsProps> = ({
  optionsLimitBoolean,
  optionsLimitNumber
}) => {
  return (
    <div className="w-[600px] grid grid-cols-2 gap-4">
      <article>
        <Heading as="h6" className="mb-4">
          Limited by option amount (true)
        </Heading>
        <SortableSelect
          options={users.map((user) => ({
            label: user.name,
            value: user.id,
            meta: user
          }))}
          optionsLimit={optionsLimitBoolean}
          selectProps={{
            placeholder: 'Selecione um usuário'
          }}
        />
      </article>
      <article>
        <Heading as="h6" className="mb-4">
          Limited by number
        </Heading>
        <SortableSelect
          options={users.map((user) => ({
            label: user.name,
            value: user.id,
            meta: user
          }))}
          optionsLimit={optionsLimitNumber}
          selectProps={{
            placeholder: 'Selecione um usuário'
          }}
        />
      </article>
    </div>
  )
}

WithOptionLimits.args = {
  optionsLimitBoolean: false,
  optionsLimitNumber: 5
}
WithOptionLimits.argTypes = {
  optionsLimitBoolean: {
    name: \`optionsLimit (boolean)\`
  },
  optionsLimitNumber: {
    name: 'optionsLimit (number)'
  }
}
`,locationsMap:{playground:{startLoc:{col:52,line:31},endLoc:{col:1,line:90},startBody:{col:52,line:31},endBody:{col:1,line:90}},errors:{startLoc:{col:22,line:111},endLoc:{col:1,line:127},startBody:{col:22,line:111},endBody:{col:1,line:127}},"with-option-limits":{startLoc:{col:65,line:134},endLoc:{col:1,line:174},startBody:{col:65,line:134},endBody:{col:1,line:174}}}}},title:"Organisms/SortableSelect"},l=Array.from(Array(3).keys()).map(n=>{const o=n+1;return{id:o.toString(),name:`User-${o}`,register:o.toString().padStart(4,"0")}}),d=r(n=>{const{error:o,optionsLimit:i,optionLimitBoolean:b,label:g,disabled:L,optional:S}=n,[m,h]=v.useState([]);return s("div",{className:"w-[95vw] grid grid-cols-12 gap-10",children:[e("div",{className:"col-span-full md:col-span-5",children:e(a,{value:m,label:g,optional:S,options:l.map(t=>({label:t.name,value:t.id,meta:t})),error:o,disabled:L,optionsLimit:i||b,onValuesChange:t=>{console.log("options",t),h(t)},selectProps:{placeholder:"Selecione um usuário"}})}),s("div",{className:"col-span-full md:col-span-7 pr-4",children:[e(c,{as:"h6",children:"Result (onValuesChange)"}),e("div",{className:"w-full overflow-x-hidden pr-4",children:m.map((t,p)=>s("div",{className:"flex gap-3 mb-3",children:[e("span",{className:"bg-assistant-blue-light flex p-1 justify-center items-center rounded text-assistant-blue-dark",children:p+1}),e("div",{className:"p-2 rounded bg-grey-100 flex-1",children:e("pre",{className:"text-sm whitespace-pre-wrap",children:JSON.stringify(m[p],null,2)})})]},p))})]})]})},"Playground");d.args={label:"Usuários",optional:!1,disabled:!1,error:"",optionsLimit:void 0,optionLimitBoolean:!1};d.argTypes={optionsLimit:{name:"optinLimit (Number)",control:"number"},optionLimitBoolean:{name:"optinLimit (Boolean)"}};const H=r(()=>e("div",{className:"w-[400px]",children:e(a,{options:l.map(n=>({label:n.name,value:n.id,meta:n})),error:"Campo obrigatório",selectProps:{placeholder:"Selecione um usuário"}})}),"Errors"),u=r(({optionsLimitBoolean:n,optionsLimitNumber:o})=>s("div",{className:"w-[600px] grid grid-cols-2 gap-4",children:[s("article",{children:[e(c,{as:"h6",className:"mb-4",children:"Limited by option amount (true)"}),e(a,{options:l.map(i=>({label:i.name,value:i.id,meta:i})),optionsLimit:n,selectProps:{placeholder:"Selecione um usuário"}})]}),s("article",{children:[e(c,{as:"h6",className:"mb-4",children:"Limited by number"}),e(a,{options:l.map(i=>({label:i.name,value:i.id,meta:i})),optionsLimit:o,selectProps:{placeholder:"Selecione um usuário"}})]})]}),"WithOptionLimits");u.args={optionsLimitBoolean:!1,optionsLimitNumber:5};u.argTypes={optionsLimitBoolean:{name:"optionsLimit (boolean)"},optionsLimitNumber:{name:"optionsLimit (number)"}};const W=["Playground","Errors","WithOptionLimits"];export{H as Errors,d as Playground,u as WithOptionLimits,W as __namedExportsOrder,U as default};
//# sourceMappingURL=SortableSelect.stories-f286bd84.js.map
