import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const BookDetails = () => {
  const[book,setBook] = useState([])
  
  const {id} = useParams();
  console.log(id)
  useEffect(()=>{
    axios.get(`https://example-data.draftbit.com/books/`)
    .then(res => {
      setBook(res.data);
    });
  },[id])
  const sujata= book.find((value)=>
  value.id === parseInt(id)
  )
  return (
    <div className='bookdetails'>
      <div className='bookimage'>
      <h2>{sujata?.title}</h2>
      <img src={sujata?.image_url}/>
      </div>
      <div className='bookdescription'> 
        <h2>
          Description
        </h2>
        <p>{sujata?.description}</p>
        <h2>Authors</h2>
        <p>{sujata?.authors}</p>
        <h2>Genres</h2>
        <p>{sujata?.genres}</p>
      </div>
    </div>
    
  
  )
}

export default BookDetails;