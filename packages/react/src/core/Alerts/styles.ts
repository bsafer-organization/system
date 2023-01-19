import { w, W } from 'windstitch'

export const AlertContainer = w.div(
    `
      w-[28.125rem]
      min-h-14
      flex flex-col
      items-center
      gap-2
      px-6 py-4
      shadow-lg
    `
)

export const Alert = w.div(
    `
      flex
      gap-8
      [&_svg]:shrink-0
    `
)

export const AlertMessage = w.div(
    `
      flex gap-2 text-md content-center
    `,
    {
        defaultVariants: {
            feedback: 'success'
        },
        variants: {
            feedback: {
                success: 'text-assistant-green-main',
                warning: 'text-assistant-yellow-main',
                error: 'text-assistant-red-main',
                info: 'text-assistant-blue-main'
            }
        }
    }
)

export const AlertComplement = w.span(
    `
      text-sm
      w-5/6
      text-grey-800
    `
)

export type AlertContainerProps = W.Infer<typeof AlertMessage>