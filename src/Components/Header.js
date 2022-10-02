import React from 'react'
import './Estilos.css'
import logo from '../logo_news.png'
import { Container, Navbar } from 'react-bootstrap';

export const Header = () => {
  return (
    <div>
      <Navbar bg='white' className='shadow p-0'>
        <Container className='justify-content-center'>
          <Navbar.Brand href="#home" className='text-center'>
            <img
              alt="news"
              src={logo}
              width="17%"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
