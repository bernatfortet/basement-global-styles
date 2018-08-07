import * as types from './types'

declare module '@bernatfortet/global-styles' {
  
  export type DimensionProps = types.DimensionProps
  export type SpacingProps = types.SpacingProps
  
  export interface BoxProps extends types.BoxProps, types.WebBoxProps {}
  export type Box = types.Box
  export type Row = types.Row
  export type Column = types.Column
  export type s = types.s

  export type TextProps = types.TextProps
}