import React from 'react';
import List from './List';


const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <main>
      {(items.length)? (
         <List 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}/>
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
  )
}

export default Content