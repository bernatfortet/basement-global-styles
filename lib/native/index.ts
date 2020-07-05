import React from 'react'
import { View } from 'react-native'

import styled from 'styled-components'

import { s } from '../global-styles'
import { boxProps, textProps } from '../primitive'


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

const globalStyles = {
	...s,
	boxProps,
	textProps,
}

// Helpers

export { globalStyles as s }
// Exported Utils
export { parseUnit } from '../utils'