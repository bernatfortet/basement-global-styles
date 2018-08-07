import {
  Box as GsBox, BoxProps as bp, Column as GsColumn, Row as GsRow, s as globalStyles
} from '@bernatfortet/global-styles'
import * as mainStyles from './main'

export const m = mainStyles
export const Box = GsBox
export const Row = GsRow
export const Column = GsColumn
export const s = globalStyles
export type BoxProps = bp
export type ColorShortcuts = mainStyles.ColorShortcuts