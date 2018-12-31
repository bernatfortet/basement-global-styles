import styled, { css } from 'styled-components'
import { s } from './global-styles'

import { parseUnit } from './utils'
import { BoxProps, SpacingProps, DimensionProps, PositionProps, AppearanceProps, FlexProps, TextProps } from '../types/types'

export const dimensionProps = css<DimensionProps>`
	${p => p.w ? `width:${parseUnit(p.w)};` : ''}
	${p => p.h ? `height:${parseUnit(p.h)};` : ''}
	${p => p.minw ? `min-width:${parseUnit(p.minw)};` : ''}
	${p => p.minh ? `min-height:${parseUnit(p.minh)};` : ''}
	${p => p.maxw ? `max-width:${parseUnit(p.maxw)};` : ''}
  ${p => p.maxh ? `max-height:${parseUnit(p.maxh)};` : ''}
	${p => p.sz ? `width:${parseUnit(p.sz)}; height:${parseUnit(p.sz)};` : ''}
  
`
export const spacingProps = css<SpacingProps>`
	${dimensionProps}
	${'' /* Margin Props */}
	${ p => p.m   	? `margin:${parseUnit(p.m)};` : '' }
	${ p => p.mh   	? `margin-left:${p.mh}px; margin-right:${p.mh}px;` : '' }
	${ p => p.mv   	? `margin-top:${p.mv}px; margin-bottom:${p.mv}px;` : '' }
	${ p => p.mt   	? `margin-top:${p.mt}px;` : '' }
	${ p => p.mr   	? `margin-right:${p.mr}px;` : '' }
	${ p => p.mb   	? `margin-bottom:${p.mb}px;` : '' }
	${ p => p.ml   	? `margin-left:${p.ml}px;` : '' }

	${'' /* Padding Props */}
	${ p => p.p   	? `padding:${parseUnit(p.p)};` : '' }
	${ p => p.ph   	? `padding-left:${p.ph}px; padding-right:${p.ph}px;` : '' }
	${ p => p.pv   	? `padding-top:${p.pv}px; padding-bottom:${p.pv}px;` : '' }
	${ p => p.pt   	? `padding-top:${p.pt}px;` : '' }
	${ p => p.pr   	? `padding-right:${p.pr}px;` : '' }
	${ p => p.pb   	? `padding-bottom:${p.pb}px;` : '' }
	${ p => p.pl   	? `padding-left:${p.pl}px;` : '' }
`

export const flexProps = css<FlexProps>`
	${ p => p.jcc ? s.jcc : ''}
	${ p => p.jcsa ? s.jcsa : ''}
	${ p => p.jcsb ? s.jcsb : ''}
	${ p => p.jcfs ? s.jcfs : ''}
	${ p => p.jcfe ? s.jcfe : ''}

	${ p => p.aic ? s.aic : ''}
	${ p => p.aifs ? s.aifs : ''}
	${ p => p.aife ? s.aife : ''}
	${ p => p.aib ? s.aib : ''}


	${ p => p.ass ? s.ass : ''}
	${ p => p.asfs ? s.asfs : ''}
	${ p => p.asfe ? s.asfe : ''}
	${ p => p.asc ? s.asc : ''}

	${ p => p.jss ? s.jss : ''}
	${ p => p.jsfs ? s.jsfs : ''}
	${ p => p.jsfe ? s.jsfe : ''}
  ${ p => p.jsc ? s.jsc : '' }
  
  ${ p => p.center ? `${s.aic} ${s.jcc}` : ''}
  
	${ p => (p.column || p.col) ? s.flxCol : ''}
  ${ p => p.row ? s.flxRow : '' }
  
  ${ p => p.hCenter && (p.col || p.column) ? s.aic : ''}
  ${ p => p.vCenter && (p.col || p.column) ? s.jcc : ''}

  ${ p => p.hCenter && p.row ? s.jcc : ''}
  ${ p => p.vCenter && p.row ? s.aic : ''}

	${ p => p.flxWrap ? s.flxWrap : ''}
	${ p => p.flxOrder ? `display:flex; order:${p.flxOrder};` : ''}
	${ p => p.flex ? `display:flex; flex:${p.flex};` : ''}
  ${ p => p.flex1 ? `display:flex; flex: 1 1 0%;` : '' }
`

export const positionProps = css<PositionProps>`
	${ p => p.pabs ? s.pabs : ''}
	${ p => p.prel ? s.prel : ''}
	${ p => p.pfix ? `position: fixed;` : ''}

	${ p => p.top ? `top: ${parseUnit(p.top)};` : ''}
	${ p => p.botttom ? `botttom: ${parseUnit(p.botttom)};` : ''}
	${ p => p.left ? `left: ${parseUnit(p.left)};` : ''}
	${ p => p.right ? `right: ${parseUnit(p.right)};` : '' }
`

export const appearanceProps = css<AppearanceProps>`
	${ p => p.background ? `background-color:${p.background};` : ''}
	${ p => p.bg ? `background-color:${p.bg};` : ''}
  ${ p => p.color ? `color:${p.color};` : ''}
  
  ${ p => p.br ? `border-radius:${parseUnit(p.br)};` : ''}
  
	${p => p.opacity ? `opacity:${p.opacity};` : ''}
  ${p => p.op ? `opacity:${p.op};` : ''}
`

export const textProps = css<TextProps>`
  ${p => p.fs ? `font-size:${parseUnit(p.fs)};` : ''}

  ${p => p.light ? `font-weight:300;` : ''}
  ${p => p.regular ? `font-weight:400;` : ''}
  ${p => p.medium ? `font-weight:500;` : ''}
  ${p => p.semi ? `font-weight:600;` : ''}
  ${p => p.bold ? `font-weight:700;` : ''}
  ${p => p.weight ? `font-weight:${p.weight};` : ''}

  ${p => p.center ? `text-align:center;` : ''}
  ${p => p.right ? `text-align:right;` : ''}
  ${p => p.tal ? `text-align:left;` : ''}
  ${p => p.tac ? `text-align:center;` : ''}
  ${p => p.tar ? `text-align:right;` : ''}

  ${p => p.lh ? `line-height:${parseUnit(p.lh)};` : ''}
  ${p => p.ls ? `letter-spacing:${parseUnit(p.ls)};` : ''}
  ${p => p.upcase ? `text-transform:uppercase;` : ''}
`

export const boxProps = css<BoxProps>`
	${spacingProps}
	${flexProps}
	${positionProps}
	${appearanceProps}
`

