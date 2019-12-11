import React from 'react'
import styled from '@emotion/styled'
import Cons from './Cons'
import Pros from './Pros'

const ProsCons = () => {
  return (
    <Wrapper>
      <Header>Should I eat McDonalds?</Header>
      <ProsConsWrapper>
        <Pros></Pros>
        <Cons></Cons>
      </ProsConsWrapper>
    </Wrapper>
  )
}

export default ProsCons

const Wrapper = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const Header = styled.div({
  backgroundColor: '#aaaaaa',
  fontSize: '2rem',
  color: '#ffffff',
  textAlign: 'center',
  padding: '15px 0',
})

const ProsConsWrapper = styled.div({
  display: 'flex',
  height: '100%',
})
