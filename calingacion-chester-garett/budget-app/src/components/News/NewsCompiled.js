import {useState, useEffect} from 'react';
import axios from 'axios';
import MainContainer from '../UI/MainContainer';
import News from './News';
import {v4} from 'uuid';

const NewsCompiled = () => {
    const apiKey = 'e04155e2fe9546c7be5c2ad77aec96ee'
    const [news, setNews] = useState([])

    useEffect(()=>{
        axios(`https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=10&apiKey=e04155e2fe9546c7be5c2ad77aec96ee`)
        .then(res => {
            setNews(res.data)
        })
        .catch(error => console.log(error));
    }, [])

    console.log(news)
    return(
    <MainContainer>
        {news.length!==0 ? news.articles.map(n=>{
            return (
                <News
                    key={v4()} 
                    author={n.author}
                    title={n.title} 
                    url={n.url}
                    urlToImage={n.urlToImage}
                    description={n.description}
                />
            )
        }) : "Error loading NEWS API. Please come back after a few minutes."}
    </MainContainer>
    )
}

export default NewsCompiled;