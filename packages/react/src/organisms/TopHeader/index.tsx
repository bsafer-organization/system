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

function Leading({ children }: LeadingProps) {
  return <LeadingContainer>{children}</LeadingContainer>
}

function Center({ children }: CenterProps) {
  return <CenterContainer>{children}</CenterContainer>
}

function Trailing({ children }: TrailingProps) {
  return <TrailingContainer>{children}</TrailingContainer>
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
