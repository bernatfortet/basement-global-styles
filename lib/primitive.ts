import styled, { css } from 'styled-components'
import { s } from './global-styles'

import { parseUnit, createMediaQuery, is } from './utils'
import { BoxProps, SpacingProps, DimensionProps, PositionProps, AppearanceProps, FlexProps, TextProps } from './types'

const defaultBreakpoints = [576, 768, 992, 1200]


export const dimensionProps = css<DimensionProps>`
  ${p => p.display ? `display:${p.display};` : ''}
  
	${p => p.w ? `width:${parseUnit(p.w)};` : ''}
  ${p => p.h ? `height:${parseUnit(p.h)};` : ''}
  
	${p => p.minw ? `min-width:${parseUnit(p.minw)};` : ''}
	${p => p.minh ? `min-height:${parseUnit(p.minh)};` : ''}
	${p => p.maxw ? `max-width:${parseUnit(p.maxw)};` : ''}
  ${p => p.maxh ? `max-height:${parseUnit(p.maxh)};` : ''}

	${p => p.sz ? `width:${parseUnit(p.sz)}; height:${parseUnit(p.sz)};` : ''}
`

// Spacing Properties
const REG = /^[mp][trblhv]?$/
const properties: { [key: string]: string } = {
  m: 'margin',
  p: 'padding'
}
const directions: { [key: string]: string | string[] } = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  v: ['Top', 'Bottom'],
  h: ['Left', 'Right'],
}

const getSpaceStyleName = (key: string) => {
  const [a, b] = key.split('')
  const property = properties[a]
  const direction = directions[b] || ''

  return Array.isArray(direction)
    ? direction.map(dir => property + dir)
    : [property + direction]
}

export const spacingProps = (props: SpacingProps) => {
  const keys = Object.keys(props).filter(key => REG.test(key))
  
  return keys.map(key => {
    const value = props[key]
    const styleNames = getSpaceStyleName(key)
    
    const style = (n: any) => is(n) ? styleNames.reduce((a, prop) => ({
      ...a,
      [prop]: parseUnit(n)
    }), {}) : null
    
    if (!Array.isArray(value)) {
      return style(value)
    }
    
    let styles: any = {}

    const breakpoints = [null, ...defaultBreakpoints.map(createMediaQuery)]
    
    for (let i = 0; i < value.length; i++) {
      const media = breakpoints[i]
      if (!media) {
        styles = style(value[i]) || {}
        continue
      }
      const rule = style(value[i])
      if (!rule) continue
      styles[media] = rule
    }
    return styles
  })
}

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
  
  ${ p => p.zi ? `z-index: ${p.zi};` : '' }
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
  ${dimensionProps}
	${spacingProps}
	${flexProps}
	${positionProps}
	${appearanceProps}
`

