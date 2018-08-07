export type DimensionProps = {
  w?: string | number,
  h?: string | number,
  size?: string | number,
  minw?: string | number,
  minh?: string | number,
  maxw?: string | number,
  maxh?: string | number,
}

export interface SpacingProps extends DimensionProps {
  m?: number,
  mh?: number,
  mv?: number,
  mt?: number,
  mr?: number,
  mb?: number,
  ml?: number,
  p?: number,
  ph?: number,
  pv?: number,
  pt?: number,
  pr?: number,
  pb?: number,
  pl?: number,
}


export interface BoxProps extends SpacingProps {
  style?: any,
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

  wrap?: boolean,
  flxWrap?: boolean,
  flex?: number | string,
  order?: number,

  background?: string,
  br?: string | number,
  color?: string,

  smHide?: boolean,
  mdHide?: boolean,
  lgHide?: boolean,

  tag?: any
}

export type RowColProps = {
  hCenter?: boolean,
  vCenter?: boolean,
}

type BoxComponentProps = {
  row?: boolean,
}
export type Box = React.SFC<BoxComponentProps & RowColProps & BoxProps & React.BaseHTMLAttributes<any>>
export type Row = React.SFC<BoxProps & RowColProps & React.BaseHTMLAttributes<any>>
export type Column = React.SFC<BoxProps & RowColProps & React.BaseHTMLAttributes<any>>

export type s = {
  abs: string,
  absHCenter: string,
  absVCenter: string,
  rel: string,

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
  rounded: string,
  cardShadow: string,

  cover: string,
  contain: string,

  anchor: string,

  full: string,
  ellipsis: string,
  fixedFull: string,
  size: (s: number) => string,

  spacingProps: string,
  boxProps: string,
  row: boolean,

  flex: number | string,



}

export type WebBoxProps = {
  unselectable: string,
  untouchable: any,
  anim: string,
  mediaDimensions: {
    sm: number,
    md: number,
    lg: number,
  }
  media: {
    sm: any,
    md: any,
    lg: any,
  },
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

  black?: boolean,
  white?: boolean,
  blue?: boolean,
  red?: boolean,
  green?: boolean,
}