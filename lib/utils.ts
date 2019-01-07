const { isArray } = Array

const DEFAULT_MEDIA_KEY = 'base'
export const is = (n: any) => n !== undefined && n !== null
export const isNum = (n: any): boolean => typeof n === 'number' && !isNaN(n)
export const parseUnit = (n: number | string) => isNum(n) ? n + 'px' : n
export const isNegative = (n: number) => n < 0
export const createMediaQuery = (n: number | string) => `@media screen and (max-width: ${parseUnit(n)})`

export const defaultBreakpoints = [576, 768, 992, 1200]
export const defaultBreakpointsObject = {
  sm: defaultBreakpoints[0],
  md: defaultBreakpoints[1],
  lg: defaultBreakpoints[2],
  xlg: defaultBreakpoints[3],
}

export enum MediaValues {
  base = 'base',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xlg = 'xlg',
}

export const merge = (a, b) => Object.assign({}, a, b,
  Object.keys(b || {}).reduce((obj, key) =>
    Object.assign(obj, {
      [key]: a[key] !== null && typeof a[key] === 'object'
            ? merge(a[key], b[key])
            : b[key],
    }), {}
  )
)

export function getArrayMediaStylesForValues(styleKey, values) {
  let styles: any = {}

  const breakpoints = [null, ...defaultBreakpoints.map(createMediaQuery)]

  for (let i = 0; i < values.length; i++) {
    const value = values[i]
    const media = breakpoints[i]
    if (!media) {
      styles = { [styleKey]: parseUnit(value) }
      continue
    }
    const rule = { [styleKey]: parseUnit(value) }
    if (!rule) continue
    styles[media] = rule
  }
  return styles
}

export function getObjectMediaStylesForValues(styleKey: string, propValues) {
  let styles: any = {}

  Object.entries(propValues).forEach(([mediaKey, propValue]: [string, number]) => {
    console.log('propValues: ', propValues)

    if (mediaKey == DEFAULT_MEDIA_KEY)
      return Object.assign(styles, getSimpleStyle(styleKey, propValue))

    const mediaSize = defaultBreakpointsObject[mediaKey]
    const mediaQuery = createMediaQuery(mediaSize)
    Object.assign(styles, {
      [mediaQuery]: getSimpleStyle(styleKey, propValue)
    })
  })

  return styles
}

export function getStyle(styleKey: string, propValue) {
  if (isArray(propValue))
    return getArrayMediaStylesForValues(styleKey, propValue)

  if (typeof propValue === 'object')
    return getObjectMediaStylesForValues(styleKey, propValue)

  return getSimpleStyle(styleKey, propValue)
}

function getSimpleStyle(styleKey: string, propValue) {
  return { [styleKey]: parseUnit(propValue) }
}



export function getStylesForPropMap<Props, Map>(props: Props, map: Map) {
  const styleKeys = Object.keys(map)
  const propKeys = Object.keys(props).filter(propKey => styleKeys.includes(propKey))

  return propKeys.map(propKey => {
    const value = props[propKey]
    const styleKey = map[propKey] as string

    if (!isArray(styleKey))
      return getStyle(styleKey, value)

    return styleKey.map(propKey => {
      const styleKey = map[propKey] as string
      return getStyle(styleKey, value)
    })
      .reduce(merge, {})

  })
    .reduce(merge, {})
}

