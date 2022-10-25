import React from 'react'
import {useState} from 'react'
import {AddCategory, GridGift} from './components'

const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['Dragon ball']);
  
    const onAddCategory = (newCategorie) => {
        
        if(categories.includes(newCategorie)) return;

        setCategories([newCategorie,...categories])
    };

    return (
        <>
            <h3>GiftExpertApp</h3>

            <AddCategory onNewCategory={onAddCategory}/>
                    
                {
                    categories.map(( categoria ) => (
                            <GridGift key={categoria} categoria={categoria}/>
                    ))
                }
            
        </>
    );
}

export default GifExpertApp