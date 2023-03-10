import { Input, InputProps } from '../../core/Input/index'

export interface SearchProps {
    /**
     * Input placeholder
     * @default undefined
     */
    placeholder?: InputProps['placeholder']
    /**
     * Disable all component
     * @default false
     */
    disabled?: InputProps['disabled']
    /**
     * Render a message text below input
     * @default undefined
     */
    error?: InputProps['error']
}

/**
 * Render an Input element of the design system
 * with the default endIcon.
 * @param SearchProps
 * @returns `<Search placeholder='Search me...' />`
 */
export const Search = ({ placeholder, disabled, error }: SearchProps) => {
    return (
        <Input
            label=""
            placeholder={placeholder || 'Pesquise aqui'}
            disabled={disabled}
            error={error}
            endIcon
        />
    )
}
