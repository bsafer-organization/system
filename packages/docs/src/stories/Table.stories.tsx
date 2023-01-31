import { RootProps, Table } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'

// import { IconButton } from '@bsafer-system/react'

export default {
  title: 'Organisms/Table',
  component: Table.Root,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=793%3A5668&t=FkuppCnTCtqkzOcs-0'
    }
  },
  args: {
    hasBackground: true,
    children: [
      <>
        <Table.Header.Root>
          <Table.Header.Row>
            <Table.Header.Cell>
              <span>Primeira Coluna</span>
            </Table.Header.Cell>
            <Table.Header.Cell>
              <span>Segunda Coluna</span>
            </Table.Header.Cell>
            <Table.Header.Cell>
              <span>Terceira Coluna</span>
            </Table.Header.Cell>
          </Table.Header.Row>
        </Table.Header.Root>
        <Table.Body.Root>
          <Table.Body.Row>
            <Table.Body.Cell>
              <span>1/1</span>
            </Table.Body.Cell>
            <Table.Body.Cell>
              <span>1/2</span>
            </Table.Body.Cell>
            <Table.Body.Cell>
              <span>1/3</span>
            </Table.Body.Cell>
          </Table.Body.Row>
          <Table.Body.Row>
            <Table.Body.Cell>
              <span>2/1</span>
            </Table.Body.Cell>
            <Table.Body.Cell>
              <span>2/2</span>
            </Table.Body.Cell>
            <Table.Body.Cell>
              <span>2/3</span>
            </Table.Body.Cell>
          </Table.Body.Row>
          <Table.Body.Row>
            <Table.Body.Cell>
              <span>3/1</span>
            </Table.Body.Cell>
            <Table.Body.Cell>
              <span>3/2</span>
            </Table.Body.Cell>
            <Table.Body.Cell>
              <span>3/3</span>
            </Table.Body.Cell>
          </Table.Body.Row>
        </Table.Body.Root>
      </>
    ]
  },
  argTypes: {
    hasBackground: {
      description: `If the table rows have background, hasBackground will receive true.
        Otherwise, it will receive false.`,
      defaultValue: true
    },
    children: {
      description:
        'Table content. Table has its proper children: &lt;Table.Header&gt;&lt;/Table.Header&gt; and &lt;Table.Body&gt;&lt;/Table.Body&gt;',
      control: 'none'
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-10 max-w-2lx my-0 mx-auto">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<RootProps>

export const Playground: StoryObj<RootProps> = {}

export const TableWithCards = () => {
  return (
    <Table.Root hasBackground>
      <Table.Header.Root>
        <Table.Header.Row className="p-5">
          <Table.Header.Cell className="col-span-2">
            <span>Máquinas/Equipamentos</span>
          </Table.Header.Cell>
          <Table.Header.Cell className="col-span-2"></Table.Header.Cell>
          <Table.Header.Cell>
            <span>QR-code</span>
          </Table.Header.Cell>
        </Table.Header.Row>
      </Table.Header.Root>
      <Table.Body.Root>
        <Table.Body.Row>
          <Table.Body.Cell className="gap-2 col-span-2">
            <div className="w-10 h-10 bg-cover bg-center bg-[url('../../docs/images/block_image.png')] rounded" />
            <span className="self-center">Rotuladeira - Envasadora 1 </span>
          </Table.Body.Cell>
          <Table.Body.Cell className="self-center col-span-2">
            <div className="flex gap-4">
              <span>Rotuladora</span>
              <span>|</span>
              <span>Envase</span>
              <span>|</span>
              <span>Linha1</span>
              <span>|</span>
              <span>Nescafé</span>
            </div>
          </Table.Body.Cell>
          <Table.Body.Cell className="self-center">
            {/* <IconButton>
              <ScanBarcode />
            </IconButton> */}
          </Table.Body.Cell>
        </Table.Body.Row>
        <Table.Body.Row>
          <Table.Body.Cell className="gap-2 col-span-2">
            <div className="w-10 h-10 bg-cover bg-center bg-[url('../../docs/images/block_image.png')] rounded" />
            <span className="self-center">Rotuladeira - Envasadora 1 </span>
          </Table.Body.Cell>
          <Table.Body.Cell className="self-center col-span-2">
            <div className="flex gap-4">
              <span>Rotuladora</span>
              <span>|</span>
              <span>Envase</span>
              <span>|</span>
              <span>Linha1</span>
              <span>|</span>
              <span>Nescafé</span>
            </div>
          </Table.Body.Cell>
          <Table.Body.Cell className="self-center">
            {/* <IconButton>
              <ScanBarcode />
            </IconButton> */}
          </Table.Body.Cell>
        </Table.Body.Row>
        <Table.Body.Row>
          <Table.Body.Cell className="gap-2 col-span-2">
            <div className="w-10 h-10 bg-cover bg-center bg-[url('../../docs/images/block_image.png')] rounded" />
            <span className="self-center">Rotuladeira - Envasadora 1 </span>
          </Table.Body.Cell>
          <Table.Body.Cell className="self-center col-span-2">
            <div className="flex gap-4">
              <span>Rotuladora</span>
              <span>|</span>
              <span>Envase</span>
              <span>|</span>
              <span>Linha1</span>
              <span>|</span>
              <span>Nescafé</span>
            </div>
          </Table.Body.Cell>
          <Table.Body.Cell className="self-center">
            {/* <IconButton>
              <ScanBarcode />
            </IconButton> */}
          </Table.Body.Cell>
        </Table.Body.Row>
        <Table.Body.Row>
          <Table.Body.Cell className="gap-2 col-span-2">
            <div className="w-10 h-10 bg-cover bg-center bg-[url('../../docs/images/block_image.png')] rounded" />
            <span className="self-center">Rotuladeira - Envasadora 1 </span>
          </Table.Body.Cell>
          <Table.Body.Cell className="self-center col-span-2">
            <div className="flex gap-4">
              <span>Rotuladora</span>
              <span>|</span>
              <span>Envase</span>
              <span>|</span>
              <span>Linha1</span>
              <span>|</span>
              <span>Nescafé</span>
            </div>
          </Table.Body.Cell>
          <Table.Body.Cell className="self-center">
            {/* <IconButton>
              <ScanBarcode />
            </IconButton> */}
          </Table.Body.Cell>
        </Table.Body.Row>
      </Table.Body.Root>
    </Table.Root>
  )
}

export const CollapsedTable = () => {
  return (
    <Table.Root hasBackground={false}>
      <Table.Header.Root>
        <Table.Header.Row>
          <Table.Header.Cell>
            <span>Atividades</span>
          </Table.Header.Cell>
          <Table.Header.Cell>
            <span>Máquina</span>
          </Table.Header.Cell>
          <Table.Header.Cell>
            <span>Setor</span>
          </Table.Header.Cell>
          <Table.Header.Cell>
            <span>Cadeados em uso</span>
          </Table.Header.Cell>
        </Table.Header.Row>
      </Table.Header.Root>
      <Table.Body.Root>
        <Table.Body.Row>
          <Table.Body.Cell>
            <span>Limpeza</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>Tesoura</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>Latoaria</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>2</span>
          </Table.Body.Cell>
        </Table.Body.Row>
        <Table.Body.Row>
          <Table.Body.Cell>
            <span>Limpeza</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>Picador de Fio de Cobre</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>Latoaria</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>1</span>
          </Table.Body.Cell>
        </Table.Body.Row>
        <Table.Body.Row>
          <Table.Body.Cell>
            <span>Manutenção</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>Expansora</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>Latoaria</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>1</span>
          </Table.Body.Cell>
        </Table.Body.Row>
        <Table.Body.Row>
          <Table.Body.Cell>
            <span>Inspeção geral</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>Expansora</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>Latoaria</span>
          </Table.Body.Cell>
          <Table.Body.Cell>
            <span>1</span>
          </Table.Body.Cell>
        </Table.Body.Row>
      </Table.Body.Root>
    </Table.Root>
  )
}
