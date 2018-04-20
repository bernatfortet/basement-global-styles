import React from 'react'

import styled, { css } from 'styled-components'

import { s } from './global-styles'
import { c } from './global-colors'
import { boxProps, dimensionProps, spacingProps, mediaProps } from './primitive'


const size = (size) => `width:${size ? size : 24}px; height:${size ? size : 24}px;`
const anim = css` transition:300ms;
	&:hover{ transition: all 100ms; }
`
const icon = css` width:${p => p.size}px; height:${p => p.size}px; font-size:${p => p.size}px; `

const unselectable = css` user-select:none; & * { user-select:none; } `
const untouchable = css` ${unselectable} pointer-events:none; & * { pointer-events:none; }  `
const actionable = css` ${unselectable} cursor:pointer;  `

// Usage s.media.sm``
const media = {
  sm: (...args) => css`
    @media (max-width: 500px) {
      ${ css(...args) }
    }
  `,
	md: (...args) => css`
    @media (max-width: 768px) {
      ${ css(...args) }
    }
  `,
	lg: (...args) => css`
    @media (max-width: 1100px) {
      ${ css(...args) }
    }
  `
}

export const hideVisually = css` border: 0; clip: rect(0 0 0 0); clipPath: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; white-space: nowrap; width: 1px;
`

const baseTriangle = css` content:'';  width:0; height:0; `
export const triangleRight = ( size, color ) => css` ${baseTriangle}
	border-top:${size}px solid transparent; border-bottom:${size}px solid transparent; border-left:${size}px solid ${color}; }
`
export const triangleLeft = ( size, color ) => css` ${baseTriangle}
	border-top:${size}px solid transparent; border-bottom:${size}px solid transparent; border-right:${size}px solid ${color}; }
`
export const triangleUp = ( size, color ) => css` ${baseTriangle}
	border-left:${size}px solid transparent; border-right:${size}px solid transparent; border-bottom:${size}px solid ${color}; }
`
export const triangleDown = ( size, color ) => css` ${baseTriangle}
	border-left:${size}px solid transparent; border-right:${size}px solid transparent; border-top:${size}px solid ${color}; }
`


const Root = styled.div``

export const Column = styled(Root)`
  ${p => p.hCenter ? s.aic : '' }
  ${p => p.vCenter ? s.jcc : '' }
  ${s.flxCol}
	${mediaProps}
	${boxProps}
`
export const Row = styled(Root)`
  ${p => p.hCenter ? s.jcc : '' }
	${p => p.vCenter ? s.aic : '' }
  ${s.flxRow}
	${mediaProps}
	${boxProps}
`
export const Box = styled(({ tag, children, ...props }) => React.createElement(tag ? tag : Root, props, children))`
	${boxProps}
	${mediaProps}
	${p => p.column ? s.flxCol : '' }
	${p => p.row ? s.flxRow : '' }
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
	triangleRight,
	triangleLeft,
	triangleUp,
	triangleDown,
	boxProps,
	spacingProps,
}

// Helpers

export { c, globalStyles as s }
