import React, { useState, useEffect } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import { Noticias } from "./Noticias"
import './Estilos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Topusa = () => {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bf62ff8fc1d04889b654b2726a01aeef');
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
    <div className="inicio">
    <div className="banner"></div>
    <div className="search-bar-welcome">
    <input value={search} onChange={find} type="text" placeholder='Search' className='form-control '/>
    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
    </div>

<Container>
    <h2>Top business headlines in the US right now</h2>
    <hr></hr>
        <Row>
        {data.map(article => {
            return(
                <Noticias
                    author={article.author}
                    title={article.title}
                    description={article.description}
                    urlToImage={article.urlToImage}
                    publishedAt={article.publishedAt}
                />
            )
        })}
        </Row>
    </Container>
    </div>
  )
}

export default Topusa