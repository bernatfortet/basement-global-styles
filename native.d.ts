import * as React from 'react'
import * as ReactNative from 'react-native'

import * as types from './types'

declare module '@bernatfortet/global-styles/native' {

  // type exports

  type DimensionProps = types.DimensionProps
  type SpacingProps = types.SpacingProps

  type BoxProps = types.BoxProps

  type TextProps = types.TextProps

  // declared constants (implementations in JS)

  export const s: types.GlobalStyles
  export const Box: React.ComponentType<BoxProps & ReactNative.ViewProperties>
  export const Row: React.ComponentType<BoxProps & types.RowColProps & ReactNative.ViewProperties>
  export const Column: React.ComponentType<BoxProps & types.RowColProps & ReactNative.ViewProperties>

}
