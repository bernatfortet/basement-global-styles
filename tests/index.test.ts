import styled, { css } from 'styled-components'
import { s } from '../lib//global-styles'

import { parseUnit, createMediaQuery, is } from '../lib/utils'
import { BoxProps, SpacingProps, DimensionProps, PositionProps, AppearanceProps, FlexProps, TextProps } from '../lib//types'

import * as utils from '../lib/utils'
import { spacingProps, dimensionProps } from '../lib/primitive'

test('dimensionProps', () => {
  expect(typeof spacingProps).toBe('function')
  expect(typeof dimensionProps).toBe('object')
})