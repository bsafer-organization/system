import { PatternFormat } from 'react-number-format'
import { w, W } from 'windstitch'

export const InputContainer = w.fieldset(
    'border-none p-0 m-0 w-full min-w-0',
    {}
)

export const InputLabel = w.label(
    `
    font-bold text-grey-800 text-xs text-ellipsis whitespace-nowrap overflow-hidden
    `,
    {}
)

    export const OptionalBadge = w.span(
    `
    font-regular text-grey-400 text-xs
    py-[.125rem] px-1
    bg-grey-100 rounded
    `,
    {}
)

    export const InputElementContainer = w.div(
    `
    w-full min-w-0
    flex items-center gap-4
    py-3 px-4 rounded-lg
    border border-grey-400

    text-grey-800

    focus-within:border-black

    [&>svg]:w-4 [&>svg]:h-4 [&>svg]:shrink-0
    `,
    {
        variants: {
        error: (error: boolean) =>
            error
            ? 'border-assistant-red-main focus-within:border-assistant-red-main'
            : '',
        disabled: (disabled: boolean) =>
            disabled
            ? 'bg-grey-100 border-grey-600 text-grey-600 placeholder:text-grey-600'
            : ''
        },
        defaultVariants: {
        error: false,
        disabled: false
        }
    }
)

    export const InputElement = w( PatternFormat,
    {
        className:
        `
            w-full min-w-0
            bg-transparent

            text-sm text-inherit font-regular
            placeholder:text-grey-600 placeholder:font-light placeholder-shown:
        `
    }
)

    export const ErrorTextContainer = w.div(
    `
    text-xs text-assistant-red-main
    flex items-center gap-2

    mt-1 
    `,
    {}
)

export type InputElementProps = W.Infer<typeof InputElement>