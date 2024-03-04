import { useState } from 'react';
import { AddCategories, GifGrid } from './components';

export function GifExpertApp() {
  const [categories, setcategories] = useState(['Peru','Messi','Ronaldo']);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
    //setcategories(cat=> [...cat,'Valorant']);
  };
  const onDeleteCategory = (deleteCategory) => {
    setcategories((cat) => cat.filter(item=>item !== deleteCategory));
  };
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategories
        //setcategories={setcategories}
        onNewCategory={onAddCategory}
      />
      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} onDeleteCategory={onDeleteCategory} />
      ))}

      {/* GifItem */}
    </>
  );
}
