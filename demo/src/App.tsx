import * as React from 'react'
import styled, { css } from 'styled-components'

import { Column, Box, Row, s, BoxProps } from '../../lib/index'
import { boxProps } from '../../lib/primitive';


type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  return <Wrapper>
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
  </Wrapper>
}

export default App

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template

// const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args: any) => css`
//     @media (max-width: ${sizes[label] / 16}em) {
//       //@ts-ignore
//       ${css(...args)}
//     }
//   `

//   return acc
// }, {})

const t = css`${s.media.lg` ${s.flxCol} ${s.aic} margin-top:0px; margin-bottom:40px;`}`
console.log('t: ', t)
const Wrapper = styled(Row)` margin:0 auto; margin-bottom:60px; margin-top:120px;
  ${t}
`


export const ResponsiveRow = styled(Box).attrs({ flexDirection: ['column', 'row']})`
`


