import {useState, useEffect} from 'react';
import axios from 'axios';
import MainContainer from '../UI/MainContainer';
import News from './News';
import {v4} from 'uuid';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewsCompiled = () => {
    const apiKey = 'e04155e2fe9546c7be5c2ad77aec96ee';
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        axios(`https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=10&apiKey=e04155e2fe9546c7be5c2ad77aec96ee`)
        .then(res => {
            setNews(res.data)
            setIsLoading(false);
        })
        .catch(error => {
        console.log(error)
        setIsLoading(false)
        });
    }, [])

    return(
    <MainContainer>
        {!isLoading ?
            news.length!==0 ? news.articles.map(n=>{
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
            }) : "Error loading NEWS API. Please come back after a few minutes." :
        <LoadingSpinner/>}
    </MainContainer>
    )
}

export default NewsCompiled;