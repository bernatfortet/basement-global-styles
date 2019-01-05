import * as React from 'react'
import styled, { css } from 'styled-components'

import { Column, Box, s } from '../../lib/index'



type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  return(
    <Row vCenter className='links'>
      <Row h={200} m={[20, 200]}>123123</Row>
      <Box h={100} m={[20, 200]}>asdf</Box>
    </Row>
  )
}

export default App

const Row = styled(Box)` ${s.flxRow} `

const Test = styled(Box)`
  ${s.media.sm}{ background:red;} }
  ${s.media.md}{ background:orange;} }
  ${s.media.lg}{ background:yellow;} }
  ${s.media.xlg}{ background:green;} }
`