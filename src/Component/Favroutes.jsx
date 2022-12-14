import React from 'react'
import '../App'
import { useAppContext } from './context/appContext';

const Favroutes = () => {
  const{favorites, addToFavorites, removeFromFavorites} = useAppContext();
  console.log("favorites are", favorites);
  const favoritesChecker = (id) => {
    const boolean = favorites.some((items) => items.id === id);
    return boolean;
  }
  return (
    <div className='favorites'>
 {
          favorites.length > 0 ? favorites.map((items)=>(
            <div className='book'><h1>{items.id}</h1>
            <div><h4>{items.title}</h4></div>
            <div><img src={items.image_url}/></div>
            <div>
              {favoritesChecker(items.id) ?
               (<button  onClick={()=>removeFromFavorites(items.id)}>Remove From  Favorite</button>)
            : (<button  onClick={()=>addToFavorites(items)}>Add to Favorite</button>)}
              
            </div>
            </div>

          )):<h1>you dont have any favorites books yet</h1>
        }
    </div>
  )
}

export default Favroutes