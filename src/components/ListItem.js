import React from 'react'
import { func, string } from 'prop-types'
import { Input } from './styled/Inputs'
import { OlItem } from './styled/ListItems'

const ListItem = ({ value, onChange }) => {
  return (
    <OlItem>
      <Input value={value} onChange={onChange}></Input>
    </OlItem>
  )
}

ListItem.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
}

export default ListItem
