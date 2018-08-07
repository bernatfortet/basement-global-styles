import React from 'react'

import styled, { css } from 'styled-components'

import { s } from './global-styles'
import { c } from './global-colors'
import { boxProps, dimensionProps, spacingProps, textProps } from './primitive'

const Root = styled.div``

const size = (size) => `width:${size ? size : 24}px; height:${size ? size : 24}px;`
const anim = css` transition:300ms;
	&:hover{ transition: all 100ms; }
`
const icon = css` width:${p => p.size}px; height:${p => p.size}px; font-size:${p => p.size}px; `

const unselectable = css` user-select:none; & * { user-select:none; } `
const untouchable = css` ${unselectable} pointer-events:none; & * { pointer-events:none; }  `
const actionable = css` ${unselectable} cursor:pointer;  `


export const mediaDimensions = {
	sm: 500,
	md: 768,
	lg: 1110,
}

export const media = {
	sm: (...args) => css`
    @media (max-width: ${mediaDimensions.sm}px) {
      ${ css(...args) }
    }
  `,
	md: (...args) => css`
    @media (max-width: ${mediaDimensions.md}px) {
      ${ css(...args) }
    }
  `,
	lg: (...args) => css`
    @media (max-width: ${mediaDimensions.lg}px) {
      ${ css(...args) }
    }
  `,
	w: ( width, ...args) => css`
    @media (max-width: ${width}px) {
      ${ css(...args) }
    }
  `
}

export const hideVisually = css` border: 0; clip: rect(0 0 0 0); clipPath: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; white-space: nowrap; width: 1px;
`

export const mediaProps = css`
	${'' /* Media Props */}
	${p => p.smHide ? media.sm` ${hideVisually}` : '' }
	${p => p.mdHide ? media.md` ${hideVisually}` : '' }
	${p => p.lgHide ? media.lg` ${hideVisually}` : '' }

	${ p => p.if 		? s.if : '' }
`

export const Column = styled(Root)`
  ${p => p.hCenter ? s.aic : '' }
  ${p => p.vCenter ? s.jcc : '' }
	${mediaProps}
	${boxProps}
	${s.flxCol}
`
export const Row = styled(Root)`
  ${p => p.hCenter ? s.jcc : '' }
	${p => p.vCenter ? s.aic : '' }
	${mediaProps}
	${boxProps}
	${s.flxRow}
`
export const Box = styled(({ tag, children, ...props }) => React.createElement(tag ? tag : Root, props, children))`
	${boxProps}
	${mediaProps}
	${p => p.row ? s.flxRow : '' }
	${p => p.row && p.hCenter ? s.jcc : '' }
	${p => p.row && p.vCenter ? s.aic : '' }

`

export const Flex1 = styled(Root)` display:flex; flex:1;`

export const CircularAvatar = styled(Root)`
	width:${p => p.size}px; height:${p => p.size}px;
	background-image:url(${p => p.imageUrl}); background-size:contain;
	border-radius:50%;
`

export const Rounded = styled(Root)` border-radius: ${ p => p.radius ? p.radius : 6 }px `
export const Spacer = styled(Root)` ${dimensionProps} `
export const Card = styled(Rounded, Row)`padding:20px; background-color:white; ${s.cardShadow} `

export const Circle = styled(Root)`
  width: ${ p => p.size ? p.size : 24 }px; height: ${ p => p.size ? p.size : 24 }px; background-color: grey; border-radius:50%;`

export const ScreenContainer = styled(Root)` width:100%; height:100%; ${s.flxRow} ${s.jcsb} ${s.aic} `


const globalStyles = {
	...s,

	size,
	anim,
	icon,
	media,
	hideVisually,
	unselectable,
	untouchable,
	actionable,

	boxProps,
	spacingProps,
	textProps,
	dimensionProps,
}

// Helpers

export { c, globalStyles as s }
