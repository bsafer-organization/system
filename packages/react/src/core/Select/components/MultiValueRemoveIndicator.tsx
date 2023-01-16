import { CloseCircle } from 'iconsax-react'
import { components, MultiValueRemoveProps } from 'react-select'

export const MultiValueRemoveIndicator = (
  props: MultiValueRemoveProps<unknown, true>
) => {
  return (
    <components.MultiValueRemove {...props}>
      <CloseCircle variant="Bold" size={16} />
    </components.MultiValueRemove>
  )
}
