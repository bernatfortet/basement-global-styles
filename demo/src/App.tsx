import * as React from 'react'
import styled, { css } from 'styled-components'

import { Column, Box, Row, s } from '../../lib/index'
import { dimensions } from '../../lib'

import { opacity, Box2 } from './styledSystem'


dimensions(
  {
    sz: 200,
    w: [50, 100, 200],
    h: [50 ,100, 200],
    maxh: { base: 400, lg: 200, sm: 100, }
    // key: '',
  }
)

type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  return <div>
    <Box2  bg='black' br={12} color={'red'} p={20} op={0.5} pos='relative' top={100} >asdf</Box2>
  </div>
  
  // return(
  //   <Row vCenter className='links'>
  //     <Box bg='orange' p={[50, 40]} m={[{base: 40, sm: 0}]}>I'm a box with Padding and Margin</Box>
  //   </Row>
  // )
}

export default App


const Test = styled.input` ${s.boxProps} `