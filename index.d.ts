import * as types from './types'

export type DimensionProps = types.DimensionProps
export type SpacingProps = types.SpacingProps

export interface BoxProps extends types.BoxProps, types.WebBoxProps {}

export type s = types.s

export type TextProps = types.TextProps
export type Box = React.SFC<BoxProps & React.BaseHTMLAttributes<any>>
export type Row = React.SFC<BoxProps & types.RowColProps & React.BaseHTMLAttributes<any>>
export type Column = React.SFC<BoxProps & types.RowColProps & React.BaseHTMLAttributes<any>>

