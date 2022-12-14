import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const Booklist = () => {
  const[books,setBooks]=useState([]);

  const{favorites, addToFavorites, removeFromFavorites} = useAppContext();
  const navigate = useNavigate()
  const favoritesChecker = (id) => {
    const boolean = favorites.some((items) => items.id === id);
    return boolean;
  }
useEffect(()=>{
  axios.get('https://example-data.draftbit.com/books?_limit=10')
  .then(res => {
    console.log(res.data);
    setBooks(res.data)
  });
},[])
  return (
    <div className='booklist'>
        {
          books.map((items)=>(
            <div className='book'><h1>{items.id}</h1>
            <div><h4>{items.title}</h4></div>
            <div><img src={items.image_url} onClick={()=>navigate(`/book/${items.id}`)}/></div>
            <div>
              {favoritesChecker(items.id) ?
               (<button  onClick={()=>removeFromFavorites(items.id)}>Remove From  Favorite</button>)
            : (<button  onClick={()=>addToFavorites(items)}>Add to Favorite</button>)}
              
            </div>
            </div>

          ))
        }
        
    </div>
  )
}

export default Booklist