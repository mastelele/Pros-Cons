import React, { Component } from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import ListItem from './ListItem'

class ItemsList extends Component {
  state = {
    items: [{ value: '', key: uuid() }],
  }

  onChangeHandler = (e, index) => {
    const { value } = e.target
    const { items } = this.state
    const newItems = [...items]
    const updatedItem = newItems[index]
    if (index === newItems.length - 1) {
      newItems.push({
        value: '',
        key: uuid(),
      })
    } else if (!value) {
      newItems.splice(index, 1)
    }
    updatedItem.value = `${value}`
    this.setState({ items: [...newItems] })
  }

  render() {
    const { items } = this.state
    return (
      <OrderedList>
        {items.map((item, index) => (
          <ListItem
            key={item.key}
            value={item.value}
            onChange={e => {
              this.onChangeHandler(e, index)
            }}
          ></ListItem>
        ))}
      </OrderedList>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

ItemsList.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)

const OrderedList = styled.ol({
  listStylePosition: 'inside',
  overflowY: 'auto',
  padding: '10px 20px',
})
