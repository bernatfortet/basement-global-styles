import React from 'react'
import { View } from 'react-native'


import styled, { css } from 'styled-components'

import { s } from './global-styles'
import { c } from './global-colors'
import { boxProps, dimensionProps, spacingProps, textProps } from './primitive'


const Root = styled(View)``

export const Column = styled(Root)`
  ${ p => p.hCenter ? s.aic : '' }
  ${ p => p.vCenter ? s.jcc : '' }
	${boxProps}
  ${s.flxCol}
`
export const Row = styled(Root)`
  ${ p => p.hCenter ? s.jcc : '' }
	${ p => p.vCenter ? s.aic : '' }
	${boxProps}
  ${s.flxRow}
`

export const Box = styled(Root)`
	${boxProps}
	${ p => (p.column || p.col) ? s.flxCol : '' }
	${ p => p.row ? s.flxRow : '' }
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
export { parseUnit } from './utils'