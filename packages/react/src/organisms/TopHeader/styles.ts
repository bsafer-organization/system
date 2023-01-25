import { W, w } from 'windstitch'

export const RootContainer = w.header(
  `
  w-full h-14 bg-white py-2 px-6
  flex items-center
  border-b border-grey-400
`,
  {
    defaultVariants: {
      className: 'gap-2'
    },
    variants: {
      className: (props: string) => props ?? ''
    }
  }
)

export const LeadingContainer = w.div(
  `
  flex items-center
`,
  {}
)

export const CenterContainer = w.div(
  `
flex items-center flex-1
`,
  {}
)

export const TrailingContainer = w.div(
  `
flex items-center
`,
  {}
)

export type RootProps = W.Infer<typeof RootContainer>
export type LeadingProps = W.Infer<typeof LeadingContainer>
export type CenterProps = W.Infer<typeof CenterContainer>
export type TrailingProps = W.Infer<typeof TrailingContainer>
