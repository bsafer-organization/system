const availableTokens = ['p-', 'pt-', 'pr-', 'pb-', 'pl-']

export function onlyBoxPaddingTokens(padding?: string) {
  if (!padding) {
    return ''
  }

  const onlyPaddingTokens = padding
    .split(' ')
    .filter((p) => !!availableTokens.find((token) => p.includes(token)))

  return onlyPaddingTokens.join(' ')
}
