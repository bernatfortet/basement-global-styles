import styled, { css } from 'styled-components'
import { s } from './global-styles'

const stringOrNumber = ( input ) => typeof input == 'number' ? input+'px' : input

export const dimensionProps = css`
	${p => p.w ? `width:${stringOrNumber(p.w)};` : ''}
	${p => p.h ? `height:${stringOrNumber(p.h)};` : ''}
	${p => p.minw ? `min-width:${stringOrNumber(p.minw)};` : ''}
	${p => p.minh ? `min-height:${stringOrNumber(p.minh)};` : ''}
	${p => p.maxw ? `max-width:${stringOrNumber(p.maxw)};` : ''}
  ${p => p.maxh ? `max-height:${stringOrNumber(p.maxh)};` : ''}
	${p => p.sz ? `width:${stringOrNumber(p.sz)}; height:${stringOrNumber(p.sz)};` : ''}
  
`
export const spacingProps = css`
	${dimensionProps}
	${'' /* Margin Props */}
	${ p => p.m   	? `margin:${stringOrNumber(p.m)};` : '' }
	${ p => p.mh   	? `margin-left:${p.mh}px; margin-right:${p.mh}px;` : '' }
	${ p => p.mv   	? `margin-top:${p.mv}px; margin-bottom:${p.mv}px;` : '' }
	${ p => p.mt   	? `margin-top:${p.mt}px;` : '' }
	${ p => p.mr   	? `margin-right:${p.mr}px;` : '' }
	${ p => p.mb   	? `margin-bottom:${p.mb}px;` : '' }
	${ p => p.ml   	? `margin-left:${p.ml}px;` : '' }

	${'' /* Padding Props */}
	${ p => p.p   	? `padding:${stringOrNumber(p.p)};` : '' }
	${ p => p.ph   	? `padding-left:${p.ph}px; padding-right:${p.ph}px;` : '' }
	${ p => p.pv   	? `padding-top:${p.pv}px; padding-bottom:${p.pv}px;` : '' }
	${ p => p.pt   	? `padding-top:${p.pt}px;` : '' }
	${ p => p.pr   	? `padding-right:${p.pr}px;` : '' }
	${ p => p.pb   	? `padding-bottom:${p.pb}px;` : '' }
	${ p => p.pl   	? `padding-left:${p.pl}px;` : '' }
`

export const boxProps = css`
	${spacingProps}

	${'' /* Flex Props */}
	${ p => p.jcc 		? s.jcc : '' }
	${ p => p.jcsa 		? s.jcsa : '' }
	${ p => p.jcsb 		? s.jcsb : '' }
	${ p => p.jcfs 		? s.jcfs : '' }
	${ p => p.jcfe 		? s.jcfe : '' }

	${ p => p.aic 		? s.aic : '' }
	${ p => p.aifs 		? s.aifs : '' }
	${ p => p.aife 		? s.aife : '' }

	${ p => p.center  ? `${s.aic} ${s.jcc}` : '' }

	${ p => p.ass   	? s.ass : '' }
	${ p => p.asfs   	? s.asfs : '' }
	${ p => p.asfe   	? s.asfe : '' }
	${ p => p.asc   	? s.asc : '' }

	${ p => p.jss   	? s.jss : '' }
	${ p => p.jsfs   	? s.jsfs : '' }
	${ p => p.jsfe   	? s.jsfe : '' }
	${ p => p.jsc   	? s.jsc : '' }

	${ p => p.pabs   	? s.pabs : '' }
	${ p => p.prel   	? s.prel : '' }
	${ p => p.pfix  	? `position: fixed` : '' }

	${ p => p.top   	? `top: ${p.top}` : '' }
	${ p => p.botttom ? `botttom: ${p.botttom}` : '' }
	${ p => p.left   	? `left: ${p.left}` : '' }
	${ p => p.right   ? `right: ${p.right}` : '' }

	${ p => p.wrap 		? s.flxWrap : '' }
	${ p => p.flxWrap ? s.flxWrap : '' }
	${ p => p.flex 		? `display:flex; flex:${p.flex};` : '' }
	${ p => p.order   ? `display:flex; order:${p.order};` : '' }

	${ p => p.background	? `background-color:${p.background};` : '' }
	${ p => p.color 			? `color:${p.color};` : '' }
  ${ p => p.br 					? `border-radius:${stringOrNumber(p.br)};` : '' }
  
	${p => p.opacity ? `opacity:${p.opacity};` : ''}
  ${p => p.op ? `opacity:${p.op};` : ''}
`


export const textProps = css`
  ${p => p.bold ? `font-weight:600;` : ''}
  ${p => p.semi ? `font-weight:500;` : ''}
  ${p => p.color ? `color:${p.color};` : ''}
  ${p => p.lh ? `line-height:${p.lh}px;` : ''}
	${p => p.opacity ? `opacity:${p.opacity};` : ''}
  ${p => p.op ? `opacity:${p.op};` : ''}
  ${p => p.center ? `text-align:center;` : ''}
  ${p => p.right ? `text-align:right;` : ''}
  ${p => p.flex ? `flex:${p.flex};` : ''}
  ${p => p.upcase ? `text-transform:uppercase;` : ''}
`
