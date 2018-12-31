import * as React from 'react'
import styled from 'styled-components'

import { Box } from '@bernatfortet/global-styles'



type Props = {
}

const App: React.SFC<Props> = (props: Props) => {
  const {} = props

  return(
    <Box p={20}>
      <Box asfs bg='black' color='white' p={12} br={4}>
        App
      </Box>
    </Box>
  )
}

export default App