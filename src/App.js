import React from 'react'
import styled from '@emotion/styled'
import ProsCons from './components/ProsCons'

const App = () => {
  return (
    <AppContainer>
      <ProsCons></ProsCons>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div({
  height: '100vh',
  width: '100vw',
  padding: '10vh 20vw',
  display: 'flex',
})
