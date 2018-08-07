import * as ReactNative from 'react-native'
import * as React from 'react'

export type DimensionProps = {
	w?: string | number,
	h?: string | number,
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

	abs?: boolean,
	rel?: boolean,

	wrap?: boolean,
	flxWrap?: boolean,
	flex?: number,
	order?: number,

	row?: boolean,

	background?: string,
	color?: string,
	br?: string | number,
}


export type RowColProps = {
	hCenter?: boolean,
	vCenter?: boolean,
}

type BoxComponentProps = {
	row?: boolean,
}
export const Box: React.ComponentType<BoxComponentProps & RowColProps & BoxProps & ReactNative.ViewProperties>
export const Row: React.ComponentType<BoxProps & RowColProps & ReactNative.ViewProperties>
export const Column: React.ComponentType<BoxProps & RowColProps & ReactNative.ViewProperties>
export const Spacer: React.ComponentType<BoxProps & ReactNative.ViewProperties>


export const boxProps: string

export const s: {
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

	spacingProps: string,
}

export interface TextProps extends SpacingProps {
	bold?: boolean,
	color?: string,
	lh?: number,
	opacity?: number,
	op?: number,
	center?: boolean,
	right?: boolean,
	flex?: number,
}
