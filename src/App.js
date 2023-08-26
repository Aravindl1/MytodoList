
import Search from './Search';
import Additem from './components/Additem';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './components/Home';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo'))
    );

  const [newItem, setNewItem] = useState('')
  const [search,setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length -1 ].id + 1 : 1;
    const addNewItem = {id, checked:false,item}
    const listItems = [...items,addNewItem]
    setItems(listItems)

    localStorage.setItem('todo',JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
     e.preventDefault()
     if (!newItem) return;
     setNewItem('')
     addItem(newItem)
  }

  const handleCheck = (id) => {
      const listItems = items.map((item) =>
        item.id===id ? {...item,checked:!item.checked}:item)
        setItems(listItems)
        localStorage.setItem('todo',JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => 
    item.id !== id)
    setItems(listItems)
    localStorage.setItem('todo',JSON.stringify(listItems))
  }

  return (
    <div className='App' >
        <Home/>
        <Additem
         newItem={newItem}
         setNewItem={setNewItem}
         handleSubmit={handleSubmit}/>
         <Search
           search={search}
           setSearch={setSearch}/>
        <Content 
         items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
         handleCheck={handleCheck}
         handleDelete={handleDelete}/>
        <Footer/>
    </div>
  );
}

export default App;
