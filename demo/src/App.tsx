import * as React from 'react'
import styled, { css } from 'styled-components'

import { Column, Box, Row, s, BoxProps } from '../../lib/index'
import { boxProps } from '../../lib/primitive';

export const Box2 = styled.div <BoxProps>` ${boxProps}`

type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  return <Row w='100%' flex1 center>
    <Box bg='black' br={12} color='red' p={20} mh={[100, 200]} pos='relative' top={100}>
      asdf
      <Test>asdf</Test>
    </Box>
  </Row>
  
  // return(
  //   <Row vCenter className='links'>
  //     <Box bg='orange' p={[50, 40]} m={[{base: 40, sm: 0}]}>I'm a box with Padding and Margin</Box>
  //   </Row>
  // )
}

export default App


const Test = styled.div` ${s.boxProps} ${s.media.lg` display:none;`}`