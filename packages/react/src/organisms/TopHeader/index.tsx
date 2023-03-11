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
  return (
    <RootContainer data-testid="top_header__testid" {...props}>
      {children}
    </RootContainer>
  )
}

function Leading({ children, ...props }: LeadingProps) {
  return (
    <LeadingContainer data-testid="top_header_leading__testid" {...props}>
      {children}
    </LeadingContainer>
  )
}

function Center({ children, ...props }: CenterProps) {
  return (
    <CenterContainer data-testid="top_header_center__testid" {...props}>
      {children}
    </CenterContainer>
  )
}

function Trailing({ children, ...props }: TrailingProps) {
  return (
    <TrailingContainer data-testid="top_header_trailing__testid" {...props}>
      {children}
    </TrailingContainer>
  )
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
