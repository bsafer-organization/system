import * as Tooltip from '@radix-ui/react-tooltip'
import { CloseCircle } from 'iconsax-react'
import { components, ClearIndicatorProps } from 'react-select'
import { TooltipStyle } from './styles'
import { Text } from '../../Text'

interface ClearIndicatorComponentProps {
  props: ClearIndicatorProps<unknown, true>
  menuIsOpen: boolean
  changeMenuState?: (open: boolean) => void
  onClearValue?: () => Promise<void>
}

export const ClearIndicator = ({
  props,
  menuIsOpen,
  changeMenuState,
  onClearValue
}: ClearIndicatorComponentProps) => {
  const inputElement = document.getElementById('select__input')
  return (
    <components.ClearIndicator
      {...props}
      innerProps={{
        ...props.innerProps,
        onMouseDown: async (event) => {
          if (onClearValue) {
            const onClearValueAction = await onClearValue()
          }
          props.clearValue()
          inputElement?.focus()
          if (changeMenuState) {
            changeMenuState(true)
          }
          event.preventDefault()
        },
        onKeyUp: (key) => {
          if (key.code === 'Space' || key.code === 'Enter') {
            props.clearValue()
            inputElement?.focus()
            if (changeMenuState) {
              changeMenuState(true)
            }
          }
        }
      }}
    >
      <Tooltip.Provider delayDuration={300}>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <TooltipStyle.TriggerContainer>
              <CloseCircle size={16} />
            </TooltipStyle.TriggerContainer>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content>
              <TooltipStyle.Content>
                <Text
                  size="sm"
                  color="grey-700"
                  dangerouslySetInnerHTML={{
                    __html: 'Remover todas as opções selecionadas'
                  }}
                />
                <Tooltip.Arrow className="fill-white" />
              </TooltipStyle.Content>
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </components.ClearIndicator>
  )
}
