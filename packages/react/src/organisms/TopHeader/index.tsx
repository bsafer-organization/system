import {
  CenterContainer,
  CenterProps,
  LeadingContainer,
  LeadingProps,
  RootContainer,
  RootProps,
  TrailingContainer,
  TrailingProps
} from './styles'

function Root({ children, ...props }: RootProps) {
  return <RootContainer {...props}>{children}</RootContainer>
}

function Leading({ children, ...props }: LeadingProps) {
  return <LeadingContainer {...props}>{children}</LeadingContainer>
}

function Center({ children, ...props }: CenterProps) {
  return <CenterContainer {...props}>{children}</CenterContainer>
}

function Trailing({ children, ...props }: TrailingProps) {
  return <TrailingContainer {...props}>{children}</TrailingContainer>
}

export const TopHeader = {
  Root,
  Center,
  Leading,
  Trailing
}

export type TopHeaderProps = {
  RootProps: RootProps
  CenterProps: CenterProps
  LeadingProps: LeadingProps
  TrailingProps: TrailingProps
}
