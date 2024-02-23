import React, { useEffect, useState } from 'react'
import Receipe from './Receipe'
import axios from 'axios'
const ReceipeSearch = () => {
    const[receipes,setReceipes]=useState([])
    const[search,setSearch]=useState('')
    const[query,setQuery]=useState('chicken')
    
    const APP_ID='d24fc829';
    const APP_KEY='d8f410679a1f51ff1f571843f297273b';

    const updateSearch=(e)=>{
        setSearch(e.target.value);
        setQuery(e.target.value)
    }
  
    const clearSearch=()=>{
        setSearch('');
        setQuery('')
    }
    useEffect(()=>{
        getReceipes()
    },[query]) //trigger very time on search
    const getReceipes=async()=>{
        try{
            const response=await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            setReceipes(response.data.hits)
        }catch(err){
            console.log('Error in fetching the response',err)
        }
    }
  return (
    <div className='container'>
        <form className='search-form' onSubmit={(e)=>e.preventDefault()}>
            <input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder='Search by name' />

            <button className='search-button' onClick={clearSearch}>Clear</button>
        </form>
      <div className='receipes'>
        {receipes?.map((receipe)=>(
            <Receipe key={receipe.recipe.label}
            title={receipe.recipe.label}
            calories={receipe.recipe.calories}
            image={receipe.recipe.image}
            ingredients={receipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  )
}

export default ReceipeSearch
