import React from 'react'

import styled, { css } from 'styled-components'

import { s } from './global-styles'
import { boxProps, dimensionProps, spacingProps, textProps } from './primitive'
import { MediaProps } from '../types/types';

const Root = styled.div``

const size = (size) => `width:${size ? size : 24}px; height:${size ? size : 24}px;`
const anim = css` transition:300ms;
	&:hover{ transition: all 100ms; }
`
const unselectable = css` user-select:none; & * { user-select:none; } `
const untouchable = css` ${unselectable} pointer-events:none; & * { pointer-events:none; }  `
const actionable = css` ${unselectable} cursor:pointer;  `

const hideVisually = css` border: 0; clip: rect(0 0 0 0); clipPath: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; white-space: nowrap; width: 1px;
`

const mediaDimensions = {
	sm: 500,
	md: 768,
	lg: 1110,
}

const media = {
  sm: (...args: any ) => css`
    @media (max-width: ${mediaDimensions.sm}px) {
      ${ css(args) }
    }
  `,
	md: (...args: any) => css`
    @media (max-width: ${mediaDimensions.md}px) {
      ${ css(args) }
    }
  `,
	lg: (...args: any) => css`
    @media (max-width: ${mediaDimensions.lg}px) {
      ${ css(args) }
    }
  `,
	w: ( width, ...args: any) => css`
    @media (max-width: ${width}px) {
      ${ css(args) }
    }
  `
}

export const mediaProps = css<MediaProps>`
	${'' /* Media Props */}
	${p => p.smHide ? media.sm` ${hideVisually}` : '' }
	${p => p.mdHide ? media.md` ${hideVisually}` : '' }
	${p => p.lgHide ? media.lg` ${hideVisually}` : '' }
`

export const Column = styled(Root)` ${mediaProps} ${boxProps} ${s.flxCol} `

export const Row = styled(Root)` ${mediaProps} ${boxProps} ${s.flxRow} `

export const Box = styled(Root)` ${mediaProps} ${boxProps}`

const globalStyles = {
	...s,

	size,
	anim,
	media,
	hideVisually,
	unselectable,
	untouchable,
	actionable,

	boxProps,
	spacingProps,
	textProps,
  dimensionProps,
  
  mediaDimensions,
}

export { globalStyles as s }

// Exported Utils
export { parseUnit } from './utils'