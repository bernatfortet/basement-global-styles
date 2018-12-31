import { CSSProperties, Ref } from 'react'

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

export type FlexProps = {
  jcc?: boolean
  jcsa?: boolean
  jcsb?: boolean
  jcfs?: boolean
  jcfe?: boolean

  aic?: boolean
  aifs?: boolean
  aife?: boolean
  ass?: boolean
  asfs?: boolean
  asfe?: boolean
  asc?: boolean
  aib?: boolean

  jss?: boolean
  jsfs?: boolean
  jsfe?: boolean
  jsc?: boolean

  row?: boolean
  column?: boolean
  col?: boolean
  
  vCenter?: boolean
  hCenter?: boolean

  center?: boolean

  flxWrap?: boolean
  flex?: number | string
  flex1?: boolean
  flxOrder?: number
}

export type RowColProps = {
  hCenter?: boolean,
  vCenter?: boolean,
}

export type PositionProps = {
  pabs?: boolean,
  prel?: boolean,
  pfix?: boolean,

  top?: number | string,
  botttom?: number | string,
  left?: number | string,
  right?: number | string,
}

export type AppearanceProps = {
  background?: string, // depracated
  bg?: string,
  br?: string | number,
  color?: string,

  opacity?: number,
  op?: number,
}

export interface BoxProps extends SpacingProps, RowColProps {
  style?: CSSProperties,
  className?: string,
  center?: boolean,
  tag?: any
}


export type GlobalStyles = {
  pabs: string,
  prel: string,
  
  flex: string,
  flx: string,
  flex1: string,
  flxRow: string,
  flxCol: string,
  flxRowReverse: string,
  flxColReverse: string,
  flxWrap: string,
  aifs: string,
  aic: string,
  ais: string,
  aife: string,
  aib: string,

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

  /** width:100%; height:100%; left:0; top:0; bottom:0; right:0; */
  full: string,
  /** text-overflow: ellipsis; overflow: hidden; white-space: nowrap; */
  ellipsis: string,

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

export interface TextProps {

  fs?: number | string,

  // Font Weight ---
  /** Font Weight: 300 */
  light?: boolean,

  /** Font Weight: 400 */
  regular?: boolean,

  /** Font Weight: 500 */
  medium?: boolean,

  /** Font Weight: 600 */
  semi?: boolean,

  /** Font Weight: 700 */
  bold?: boolean,

  /** Font Weight: 800 */
  black?: boolean,

  /** Font Weight */
  weight?: number | string,


  // Alignment ---

  /** text-align: center => Depracated, use tac */
  center?: boolean,

  /** text-align: right => Depracated, use tar  */
  right?: boolean,

  /** text-align: left */
  tal?: boolean,

  /** text-align: right */
  tar?: boolean,

  /** text-align: center */
  tac?: boolean,


  // Other --- 
  /** Line height */
  lh?: number | string,

  /** Letter Spacing */
  ls?: number | string,

  /** text-transform: uppercase */
  upcase?: boolean,
}