import * as React from 'react'
import styled, { css } from 'styled-components'
// import { Box, s } from '@bernatfortet/global-styles'

import { Column, Box, Row, s } from './lib/index'



type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  return(
    <Row vCenter className='links'>
      <Row bg='orange' mh={20}>123123</Row>
      <Box bg='orange' mh={20}>asdf</Box>
    </Row>
  )
}

export default App

const Test = styled(Box)`
  ${s.media.sm}{ background:red;} }
  ${s.media.md}{ background:orange;} }
  ${s.media.lg}{ background:yellow;} }
  ${s.media.xlg}{ background:green;} }
`