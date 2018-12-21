import * as React from 'react'
import * as types from './types'

declare module '@bernatfortet/global-styles' {

  // type exports

  type DimensionProps = types.DimensionProps
  type SpacingProps = types.SpacingProps

  type BoxProps = types.BoxProps & types.MediaProps

  type TextProps = types.TextProps

  // declared constants (implementations in JS)

  const s: types.GlobalStyles & types.WebGlobalStyles
  const Box: React.SFC<BoxProps & React.ReactHTMLElement<any>>
  const Row: React.SFC<BoxProps & types.RowColProps & React.ReactHTMLElement<any>>
  const Column: React.SFC<BoxProps & types.RowColProps & React.ReactHTMLElement<any>>

}
