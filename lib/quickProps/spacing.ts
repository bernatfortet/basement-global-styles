import { merge, getStyle, getStylesForPropMap } from "../utils";
import { UnitValue, PropsToStyleMap } from "../types";

export type SpacingProps = {
  m?: UnitValue,
  mt?: UnitValue,
  mr?: UnitValue,
  mb?: UnitValue,
  ml?: UnitValue,

  mh?: UnitValue,
  mv?: UnitValue,

  p?: UnitValue,
  pt?: UnitValue,
  pr?: UnitValue,
  pb?: UnitValue,
  pl?: UnitValue,

  ph?: UnitValue,
  pv?: UnitValue,
}

type SpacingPropsMap = PropsToStyleMap<string | string[]>

const spacingPropsMap: SpacingPropsMap = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',

  mh: ['ml', 'mr'],
  mv: ['mt', 'mb'],

  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',

  ph: ['pl', 'pr'],
  pv: ['pt', 'pb'],
}

export function spacing(props: SpacingProps) {
  return getStylesForPropMap<SpacingProps, SpacingPropsMap>(props, spacingPropsMap)
}

