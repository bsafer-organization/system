import { w } from 'windstitch'

export const ModalCloseButton = w.button(
  `
  w-10 h-10 shrink-0 flex justify-center items-center bg-white rounded-full text-black
  focus-visible:ring-1 focus-visible:ring-black hover:text-grey-700 transition-all
`,
  {}
)
