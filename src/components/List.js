import React from 'react'
import LineItem from './LineItem'

const List = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
        <LineItem
            item={item}
            Key = {item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
        ))}
    </ul>
  )
}

export default List