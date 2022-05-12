import React from 'react'
import {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifFrid from './components/GifFrid'

function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch'])

  // const handleAdd = () => {
    //setCategories([...categories, 'goku'])
  //}

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />
        <ol>
          {
            categories.map(category => (
                <GifFrid key={category} category={ category } />
            ))
          }
        </ol>
      </>
    
  )
}

export default GifExpertApp