import { merge, getStyle, getStylesForPropMap } from "../utils";
import { UnitValue, PropsToStyleMap } from "../types";

export type DimensionProps = {
  w?: UnitValue,
  h?: UnitValue,
  sz?: UnitValue,
  minw?: UnitValue,
  minh?: UnitValue,
  maxw?: UnitValue,
  maxh?: UnitValue,
}

type DimensionPropsMap = PropsToStyleMap<string | string[]>

const dimensionPropsMap: DimensionPropsMap = {
  sz: ['w', 'h'],
  w: 'width',
  h: 'height',
  maxw: 'maxWidth',
  minw: 'minWidth',
  maxh: 'maxHeight',
  minh: 'minHeight',
}

export function dimensions(props: DimensionProps) {
  return getStylesForPropMap<DimensionProps, DimensionPropsMap>(props, dimensionPropsMap)
}

