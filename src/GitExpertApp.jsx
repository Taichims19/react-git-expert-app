
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';



export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch',]);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    // console.log(newCategory);
    // setCategories([...categories, 'Valorant']); primera forma
    setCategories((categories) => [newCategory, ...categories]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GitExpertApp</h1>

      {/* Input */}
      <AddCategory

        onNewCategory={(value) => onAddCategory(value)}

      />

      {/* Listado de Items o Gif */}

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }



    </>
  )
}
