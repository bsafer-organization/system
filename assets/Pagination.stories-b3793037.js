var c=Object.defineProperty;var r=(a,n)=>c(a,"name",{value:n,configurable:!0});import{R as p}from"./index-406657fe.js";import{Z as o}from"./index-341021b4.js";import{j as e,a as t}from"./jsx-runtime-71fb89ed.js";import"./iframe-2763bc4f.js";import"./index-7c736eb3.js";import"./index-5aa49b9b.js";const m=[{n:1,value:"ocean",label:"Ocean"},{n:2,value:"blue",label:"Blue"},{n:3,value:"purple",label:"Purple"},{n:4,value:"red",label:"Red"},{n:5,value:"orange",label:"Orange"},{n:6,value:"yellow",label:"Yellow"},{n:7,value:"green",label:"Green"},{n:8,value:"forest",label:"Forest"},{n:9,value:"slate",label:"Slate"},{n:10,value:"silver",label:"Silver"},{n:11,value:"black",label:"Black"},{n:12,value:"laranja",label:"Laranja"},{n:13,value:"branco",label:"Branco"},{n:14,value:"sim",label:"Sim"},{n:15,value:"nao",label:"Não"}],x={parameters:{storySource:{source:`import React from 'react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Pagination, PaginationProps } from '@bsafer-system/react'

interface IOptions {
  n: number
  value: string
  label: string
}

const options: IOptions[] = [
  { n: 1, value: 'ocean', label: 'Ocean' },
  { n: 2, value: 'blue', label: 'Blue' },
  { n: 3, value: 'purple', label: 'Purple' },
  { n: 4, value: 'red', label: 'Red' },
  { n: 5, value: 'orange', label: 'Orange' },
  { n: 6, value: 'yellow', label: 'Yellow' },
  { n: 7, value: 'green', label: 'Green' },
  { n: 8, value: 'forest', label: 'Forest' },
  { n: 9, value: 'slate', label: 'Slate' },
  { n: 10, value: 'silver', label: 'Silver' },
  { n: 11, value: 'black', label: 'Black' },
  { n: 12, value: 'laranja', label: 'Laranja' },
  { n: 13, value: 'branco', label: 'Branco' },
  { n: 14, value: 'sim', label: 'Sim' },
  { n: 15, value: 'nao', label: 'Não' }
]

export default {
  title: 'Organisms/Pagination',
  component: Pagination
} as Meta<PaginationProps<IOptions>>

export const Playground: StoryFn<PaginationProps<IOptions>> = (props) => {
  const [itemsFiltrados, setItemsFiltrados] = React.useState<IOptions[]>()
  return (
    <div className="overflow-hidden flex-1 px-2">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <table className="w-full table-fixed border-separate border-spacing-y-2 px-1">
            <thead className="sticky top-0 bg-background">
              <tr>
                <th>Index</th>
                <th>Color</th>
              </tr>
            </thead>

            <tbody>
              {itemsFiltrados &&
                itemsFiltrados.length > 0 &&
                itemsFiltrados.map((option, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-grey-100 hover:bg-white hover:shadow-md
                  transition-all text-sm [&_td]:py-4 [&_td]:px-6 [&_td_*]:text-sm [&_td_*]:font-light [&_*]:cursor-pointer"
                    >
                      <td className="rounded-l-md" align="center">
                        <span>{option.n}</span>
                      </td>
                      <td className="rounded-l-md" align="center">
                        <span>{option.label}</span>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>

        <Pagination
          perPageOptions={props.perPageOptions}
          initSelectAsFrom={props.initSelectAsFrom}
          items={options}
          onPageChange={({ filteredItems }: { filteredItems: IOptions[] }) => {
            setItemsFiltrados(filteredItems)
          }}
        />
      </div>
    </div>
  )
}

Playground.argTypes = {
  initSelectAsFrom: {
    name: 'initSelectAsFrom: A number to trigger buttons or select component'
  },
  perPageOptions: {
    // control: 'select',
    // options: ['2', '8', '25'],
    name: 'Available number of items per page (any string value)'
  }
}

Playground.args = {
  initSelectAsFrom: 5,
  perPageOptions: ['3', '7', '10']
}
`,locationsMap:{playground:{startLoc:{col:62,line:34},endLoc:{col:1,line:82},startBody:{col:62,line:34},endBody:{col:1,line:82}}}}},title:"Organisms/Pagination",component:o},s=r(a=>{const[n,i]=p.useState();return e("div",{className:"overflow-hidden flex-1 px-2",children:t("div",{className:"flex flex-col h-full overflow-hidden",children:[e("div",{className:"flex-1 overflow-y-auto",children:t("table",{className:"w-full table-fixed border-separate border-spacing-y-2 px-1",children:[e("thead",{className:"sticky top-0 bg-background",children:t("tr",{children:[e("th",{children:"Index"}),e("th",{children:"Color"})]})}),e("tbody",{children:n&&n.length>0&&n.map((l,d)=>t("tr",{className:"bg-grey-100 hover:bg-white hover:shadow-md transition-all text-sm [&_td]:py-4 [&_td]:px-6 [&_td_*]:text-sm [&_td_*]:font-light [&_*]:cursor-pointer",children:[e("td",{className:"rounded-l-md",align:"center",children:e("span",{children:l.n})}),e("td",{className:"rounded-l-md",align:"center",children:e("span",{children:l.label})})]},d))})]})}),e(o,{perPageOptions:a.perPageOptions,initSelectAsFrom:a.initSelectAsFrom,items:m,onPageChange:({filteredItems:l})=>{i(l)}})]})})},"Playground");s.argTypes={initSelectAsFrom:{name:"initSelectAsFrom: A number to trigger buttons or select component"},perPageOptions:{name:"Available number of items per page (any string value)"}};s.args={initSelectAsFrom:5,perPageOptions:["3","7","10"]};const P=["Playground"];export{s as Playground,P as __namedExportsOrder,x as default};
//# sourceMappingURL=Pagination.stories-b3793037.js.map
