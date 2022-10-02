import React, { useState, useEffect } from "react"
import axios from "axios"
import { Articulos } from "./Articulos"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Table } from 'react-bootstrap';
import './Estilos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'




const Listanews = () => {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-10-01&to=2022-10-01&sortBy=popularity&apiKey=bf62ff8fc1d04889b654b2726a01aeef');
        console.log(response)
        setArticles(response.data.articles)
        }
        getArticles()
           
    }, [])

    const find =(e) => {
        setSearch(e.target.value)
    }

    let data = []
        if(!search){
            data = articles
        }
        else{
            data = articles.filter((dato =>
                dato.title.toLowerCase().includes(search.toLocaleLowerCase())
            ))
   }

  return (
    <div className="table-news">
    <Container>
    <h2>Breaking News</h2>
    <hr></hr>
    <div className="search-bar-welcome">
    <input value={search} onChange={find} type="text" placeholder='Search' className='form-control '/>
    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon-table" />
    </div>
    <Table responsive>
      <thead>
        <tr className="head-table">
          <th>Author</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
      {data.map(article => (
            <tr key={article}> 
                <td><Articulos author={article.author} /></td>
                <td><Articulos title={article.title} /></td>
                <td><Articulos description={article.description} /></td>
                <td><Articulos urlToImage={article.urlToImage} /></td>
            </tr>
        ))}
      </tbody>
      </Table>
      </Container>
    </div>
  )
}

export default Listanews