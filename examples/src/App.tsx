import * as React from 'react'
import styled, { css } from 'styled-components'

import { Column, Row, Box, s } from '@bernatfortet/global-styles'



type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  return(
    <Row>
      <Box m={[20, 200]}>asdf</Box>
      <Box m={[20, 200]}>asdf</Box>
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