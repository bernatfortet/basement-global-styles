import React from 'react'
import { View } from 'react-native'

import styled from 'styled-components'

import { s } from '../global-styles'
import { boxProps, dimensionProps, spacingProps, textProps } from '../primitive'


const Root = styled(View)``

export const Column = styled(Root)`
	${boxProps}
  ${s.flxCol}
`
export const Row = styled(Root)`
	${boxProps}
  ${s.flxRow}
`

export const Box = styled(Root)`
	${boxProps}
`
export const Flex1 = styled(Root)` display:flex; flex:1;`
export const Spacer = styled(Root)` ${dimensionProps} `

const globalStyles = {
	...s,
	boxProps,
	spacingProps,
	textProps,
	dimensionProps,
}

// Helpers

export { globalStyles as s }
// Exported Utils
export { parseUnit } from '../utils'