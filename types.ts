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
  aib?: boolean,

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
  flxOrder?: number,

  background?: string, // depracated
  bg?: string,
  br?: string | number,
  color?: string,

  tag?: any

  opacity?: number,
  op?: number,
}


export type GlobalStyles = {
  pabs: boolean,
  prel: boolean,
  
  flex: boolean,
  flx: boolean,
  flx1: boolean,
  flxRow: boolean,
  flxCol: boolean,
  flxRowReverse: boolean,
  flxColReverse: boolean,
  flxWrap: boolean,
  aifs: boolean,
  aic: boolean,
  ais: boolean,
  aife: boolean,
  aib: boolean,

  jcc: boolean,
  jcfs: boolean,
  jcfe: boolean,
  jcsb: boolean,
  jcsa: boolean,

  asfs: boolean,
  asfe: boolean,
  asc: boolean,
  ass: boolean,

  jsfs: boolean,
  jsfe: boolean,
  jsc: boolean,
  jss: boolean,

  if: boolean,

  tal: boolean,
  tac: boolean,
  tar: boolean,

  ofh: boolean,

  cover: boolean,
  contain: boolean,

  anchor: boolean,

  full: boolean,
  ellipsis: boolean,
  fixedFull: boolean,

  spacingProps: boolean,
  boxProps: boolean,
  textProps: boolean,

  dimensionProps: boolean,
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
  upcase?: boolean,
}