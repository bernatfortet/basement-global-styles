import * as React from 'react'
import * as ReactNative from 'react-native'
import * as types from './types'

export type DimensionProps = types.DimensionProps
export type SpacingProps = types.SpacingProps
export type BoxProps = types.BoxProps
export type s = types.s

export type TextProps = types.TextProps

export type Box = React.ComponentType<BoxProps & ReactNative.ViewProperties>
export type Row = React.ComponentType<BoxProps & types.RowColProps & ReactNative.ViewProperties>
export type Column = React.ComponentType<BoxProps & types.RowColProps & ReactNative.ViewProperties>