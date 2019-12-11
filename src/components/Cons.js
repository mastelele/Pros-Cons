import React from 'react'
import styled from '@emotion/styled'
import ItemsList from './ItemsList'

const Cons = () => {
  return (
    <Wrapper>
      <Header>Cons</Header>
      <ItemsList></ItemsList>
    </Wrapper>
  )
}
export default Cons

const Wrapper = styled.div({
  height: '100%',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
})

const Header = styled.div({
  fontSize: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
  borderBottom: '1px solid',
})
