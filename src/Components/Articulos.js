import React from 'react'
import './Estilos.css'

export const Articulos = ({ title, author, description, urlToImage }) => {
  return (
    <div>
        <img src={urlToImage} alt={urlToImage} className="Image"/>
        <span className='d-block'>{title}</span>
        <span className='d-block'>{author}</span>
        <span className='d-block'>{description}</span>
    </div>
  )
}