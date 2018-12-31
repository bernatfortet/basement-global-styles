import React from 'react'

import styled, { css } from 'styled-components'

import { s } from './global-styles'
import { boxProps, dimensionProps, spacingProps, textProps } from './primitive'
import { MediaProps } from './types';
import { parseUnit, createMediaQuery, defaultBreakpoints } from './utils'

const Root = styled.div``

const size = (size: number) => `width:${size ? size : 24}px; height:${size ? size : 24}px;`

const anim = css` transition:300ms;
	&:hover{ transition: all 100ms; }
`
const unselectable = css` user-select:none; & * { user-select:none; } `
const untouchable = css` ${unselectable} pointer-events:none; & * { pointer-events:none; }  `
const actionable = css` ${unselectable} cursor:pointer;  `

const mediaQueries = defaultBreakpoints.map( unit => createMediaQuery(unit) )

const media = {
  sm: mediaQueries[0],
  md: mediaQueries[1],
  lg: mediaQueries[2],
  xlg: mediaQueries[3],
}

export const Column = styled(Root)` ${boxProps} ${s.flxCol} `

export const Row = styled(Root)` ${boxProps} ${s.flxRow} `

export const Box = styled(Root)` ${boxProps}`

const globalStyles = {
	...s,

	size,
	anim,
	media,
	unselectable,
	untouchable,
	actionable,

	boxProps,
	spacingProps,
	textProps,
  dimensionProps,
  
  breakpoints: defaultBreakpoints,
}

export { globalStyles as s }

// Exported Utils
export { parseUnit } from './utils'