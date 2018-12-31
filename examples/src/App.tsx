import * as React from 'react'
import styled, { css } from 'styled-components'

import { Box, s } from '@bernatfortet/global-styles'



type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props
  return(
    <Test bg='black' color='white' p={[20, 60]} mh={200} >
      App
    </Test>
  )
}

export default App

const Test = styled(Box)`
  ${s.media.sm}{ background:red;} }
  ${s.media.md}{ background:orange;} }
  ${s.media.lg}{ background:yellow;} }
  ${s.media.xlg}{ background:green;} }
`