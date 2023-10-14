import React from 'react'
import  {ProjectsData}  from '../../data/Projects'

function Works() {
  document.title = "Works"
  return (
    <div>

      <p>hola</p>

      {ProjectsData.map((item) => (
        <>
        <h2>{item.name}</h2>
        <img src={item.ImageUrl} alt={item.name} />
        <a href={item.Github} target="_blank" rel="noopener noreferrer"></a>
        
        </>
      ))}


    </div>
  )
}

export default Works