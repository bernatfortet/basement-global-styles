import { CSSProperties } from 'react'

export type DimensionProps = {
  w?: string | number,
  h?: string | number,
  sz?: number | string,
  minw?: string | number,
  minh?: string | number,
  maxw?: string | number,
  maxh?: string | number,
}

export interface SpacingProps extends DimensionProps {
  m?: number | string,
  mh?: number,
  mv?: number,
  mt?: number,
  mr?: number,
  mb?: number,
  ml?: number,
  
  p?: number | string,
  ph?: number,
  pv?: number,
  pt?: number,
  pr?: number,
  pb?: number,
  pl?: number,
}


export type RowColProps = {
  hCenter?: boolean,
  vCenter?: boolean,
}

export interface BoxProps extends SpacingProps, RowColProps {
  style?: CSSProperties,
  className?: string,

  jcc?: boolean,
  jcsa?: boolean,
  jcsb?: boolean,
  jcfs?: boolean,
  jcfe?: boolean,

  aic?: boolean,
  aifs?: boolean,
  aife?: boolean,
  ass?: boolean,
  asfs?: boolean,
  asfe?: boolean,
  asc?: boolean,

  jss?: boolean,
  jsfs?: boolean,
  jsfe?: boolean,
  jsc?: boolean,

  center?: boolean,

  pabs?: boolean,
  prel?: boolean,
  pfix?: boolean,

  row?: boolean,

  flxWrap?: boolean,
  flex?: number | string,
  flex1?: boolean,
  order?: number,

  background?: string,
  br?: string | number,
  color?: string,

  tag?: any

  opacity?: number,
  op?: number,
}


export type GlobalStyles = {
  pabs: string,
  prel: string,
  
  flex: string,
  flx: string,
  flx1: string,
  flxRow: string,
  flxCol: string,
  flxRowReverse: string,
  flxColReverse: string,
  flxWrap: string,
  aifs: string,
  aic: string,
  ais: string,
  aife: string,

  jcc: string,
  jcfs: string,
  jcfe: string,
  jcsb: string,
  jcsa: string,

  asfs: string,
  asfe: string,
  asc: string,
  ass: string,

  jsfs: string,
  jsfe: string,
  jsc: string,
  jss: string,

  if: string,

  tal: string,
  tac: string,
  tar: string,

  ofh: string,

  cover: string,
  contain: string,

  anchor: string,

  full: string,
  ellipsis: string,
  fixedFull: string,

  spacingProps: string,
  boxProps: string,
  textProps: string,

  dimensionProps: string,
}

export type WebGlobalStyles = {
  size: (s: number) => string,

  hideVisually: string, 
  actionable: string, 
  
  unselectable?: string,
  untouchable?: string,
  anim?: string,
  mediaDimensions?: {
    sm: number,
    md: number,
    lg: number,
  }

  media?: {
    sm: any,
    md: any,
    lg: any,
    w: any,
  },
} 

export type MediaProps = {
  smHide?: boolean,
  mdHide?: boolean,
  lgHide?: boolean,
} 

export interface TextProps extends SpacingProps {
  bold?: boolean,
  semi?: boolean,
  color?: string,
  lh?: number,
  opacity?: number,
  op?: number,
  center?: boolean,
  right?: boolean,
  flex?: number,
  upcase?: boolean,
}