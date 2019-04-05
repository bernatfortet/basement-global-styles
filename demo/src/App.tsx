import * as React from 'react'
import styled, { css } from 'styled-components'

import { Column, Box, Row, s } from '../../lib/index'

import { opacity, Box2 } from './styledSystem'

type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  return <Row w='100%' flex1 center>
    <Box2  bg='black' br={12} color='red' p={20} pos='relative' top={100}>
      asdf
    </Box2>
  </Row>
  
  // return(
  //   <Row vCenter className='links'>
  //     <Box bg='orange' p={[50, 40]} m={[{base: 40, sm: 0}]}>I'm a box with Padding and Margin</Box>
  //   </Row>
  // )
}

export default App


const Test = styled.input` ${s.boxProps} `