import React from 'react'
import UserClass from '../nav-component/UserClass'
import axios from 'axios'

const apiKey = `39d9cca99be24f8410b1b6df90ed2ee0	—`
const appId = `8f56ffcd`
const apiUrl = `https://api.edamam.com/api/recipes/v2?q=${'coffee'}&app_id=${appId}&app_key=${apiKey}`;

const Blog = () => {

  const fetchRecipes =async () => {
    const data =await axios.get(apiUrl)
    console.log(data)
  }
  return (
    <div>
      <button onClick={() => {
        fetchRecipes()
      }}>Fetch</button>
    </div>
  )
}

export default Blog