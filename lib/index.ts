import React from 'react'

import styled, { css } from 'styled-components'

import { s } from './global-styles'
import { boxProps, textProps, flexProps, layoutProps } from './primitive'
import * as types from './types';
import { defaultBreakpoints } from './utils'
import { space } from './styledSystems';

const Root = styled.div``

const size = (size: number) => `width:${size ? size : 24}px; height:${size ? size : 24}px;`

const anim = css` transition:300ms;
	&:hover{ transition: all 100ms; }
`
const unselectable = css` user-select:none; & * { user-select:none; } `
const untouchable = css` ${unselectable} pointer-events:none; & * { pointer-events:none; }  `
const actionable = css` ${unselectable} cursor:pointer;  `

const mediaDimensions = {
  sm: 500,
  md: 768,
  lg: 1110,
}

const media = {
  sm: (...args: any) => css`
    @media (max-width: ${mediaDimensions.sm}px) {
      ${ css(args)}
    }
  `,
  md: (...args: any) => css`
    @media (max-width: ${mediaDimensions.md}px) {
      ${ css(args)}
    }
  `,
  lg: (...args: any) => css`
    @media (max-width: ${mediaDimensions.lg}px) {
      ${ css(args)}
    }
  `,
  w: (width, ...args: any) => css`
    @media (max-width: ${width}px) {
      ${ css(args)}
    }
  `
}

export const Column = styled(Root).attrs({ col: true })` ${boxProps} `

export const Row = styled(Root).attrs({ row: true })` ${boxProps} `

export const Box = styled(Root)<BoxProps>` ${boxProps}`

const globalStyles = {
  ...s,

  size,
  anim,
  media,
  unselectable,
  untouchable,
  actionable,

  textProps,
  flexProps,
  layoutProps,
  spacingProps: space,
  boxProps,

  breakpoints: defaultBreakpoints,
}

export { globalStyles as s }

// Exported Utils
export { parseUnit } from './utils'

export type BoxProps = types.BoxProps & types.MediaProps