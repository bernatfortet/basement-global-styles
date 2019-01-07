import * as React from 'react'
import styled, { css } from 'styled-components'
// import { Box, Row, s } from '@bernatfortet/global-styles'

import { Column, Box, Row, s } from '../../lib/index'
import { dimensions } from '../../lib'

dimensions(
  {
    // sz: 200,
    // w: [50, 100, 200],
    // h: [50 ,100, 200],
    maxh: { sm: 100, lg: 200}
    // key: '',
  }
)

type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  
  return(
    <Row vCenter className='links'>

      <Box bg='orange' p={20} m={20}>I'm a box with Padding and Margin</Box>
      <Box bg='orange' m={20}>asdf</Box>
    </Row>
  )
}

export default App