import React from 'react'
import data from './data.js'
import RecipeCard from './Components/RecipeCard.jsx'

const App = () => {
  console.log(data)
  return (
    <main className='container'>
      <h1>🍴 Recipe Journal</h1>
      {data.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </main>
  )
}

export default App