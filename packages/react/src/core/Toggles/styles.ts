import { w, W } from 'windstitch'
import * as Switch from '@radix-ui/react-switch';

export const ToggleContainer = w.div(
    `flex items-center text-sm`,
    {
        defaultVariants: {
            checked: false
        },
        variants: {
            text: (text: string) =>  !!text ?
            'px-4 py-2 justify-between rounded' :
            'bg-transparent justify-center',
            checked: (checked: boolean) => checked ? 
            'bg-assistant-blue-light' :
            'bg-grey-100'
        }
    }
)

export const ToggleRoot = w(Switch.Root, {
    className: `
        data-[state='checked']:bg-assistant-blue-main
        data-[state='unchecked']:bg-grey-400
        relative inline-flex w-10 h-6 flex-shrink-0 cursor-pointer rounded-full transition-colors
        duration-200 ease-in-out focus:outline-none
    `
})

export const ToggleThumb = w(Switch.Thumb, {
    className: `
        data-[state='checked']:translate-x-4 data-[state='checked']:bg-white
        data-[state='unchecked']:translate-x-0 data-[state='unchecked']:bg-grey-800
        pointer-events-none inline-block h-5 w-5 mt-0.5 ml-0.5 transform rounded-full
        transition duration-200 ease-in-out
    `
})

export type ToggleContainerProps = W.Infer<typeof ToggleContainer>