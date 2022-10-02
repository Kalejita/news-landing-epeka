import React from 'react'
import './Estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Col } from 'react-bootstrap';

export const Noticias = ({ title, author, description, urlToImage, publishedAt }) => {

  return (

    <Col xs="12" md="3" className='noticia'>
      <Card>
        <div className='Imagen-card'><Card.Img variant="top" src={urlToImage} alt={urlToImage} /></div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
          <div className='d-flex justify-content-end'>
          <Card.Subtitle className='fst-italic fw-normal'>{new Date(publishedAt).toDateString()}</Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}