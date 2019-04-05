import { getStylesForPropMap } from "../utils";
import { UnitValue, PropsToStyleMap } from "../types";

export type AppearanceProps = {
  o?: UnitValue,
}

type AppearancePropsMap = PropsToStyleMap<string | string[]>

const appearancePropsMap: AppearancePropsMap = {
  op: 'opacity',
}

export function appearance(props: AppearanceProps) {
  return getStylesForPropMap<AppearanceProps, AppearancePropsMap>(props, appearancePropsMap)
}