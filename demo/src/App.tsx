import * as React from 'react'
import styled, { css } from 'styled-components'

import { Column, Box, Row, s, BoxProps } from '../../dist/index'
import { boxProps } from '../../dist/primitive';

export const Box2 = styled.div <BoxProps>` ${boxProps}`

type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  return <ResponsiveRow w='100%' flex1 center >
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
    <Box sz={40} bg='red' m={8} />
  </ResponsiveRow>
  
  // return(
  //   <Row vCenter className='links'>
  //     <Box bg='orange' p={[50, 40]} m={[{base: 40, sm: 0}]}>I'm a box with Padding and Margin</Box>
  //   </Row>
  // )
}

export default App


const Wrapper = styled(Box)`
  ${s.media.lg` background: green; `}
  ${s.media.md` background: red; `}
  ${s.media.sm` background: blue; `}
`
const Test = styled.div` ${s.boxProps} ${s.media.lg` display:none;`}`


export const ResponsiveRow = styled(Box).attrs({ flexDirection: ['column', 'row']})`
`