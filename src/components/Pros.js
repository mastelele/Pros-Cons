import React from 'react'
import styled from '@emotion/styled'
import ItemsList from './ItemsList'

const Pros = () => {
  return (
    <Wrapper>
      <Header>Pros</Header>
      <ItemsList></ItemsList>
    </Wrapper>
  )
}

export default Pros

const Wrapper = styled.div({
  height: '100%',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid',
})

const Header = styled.div({
  fontSize: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
  borderBottom: '1px solid',
})
