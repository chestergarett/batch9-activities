
import {useEffect} from 'react';
import {useParams, Route, Link, useRouteMatch} from 'react-router-dom';

import LoadingSpinner from '../components/UI/LoadingSpinner';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from '../components/hooks/use-http';
import {getSingleQuote} from '../components/lib/api';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning react is fun'},
    {id: 'q2', author: 'Maximillian', text: 'Learning react is great'},
]

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
 
    const {quoteId} = params;
    const {sendRequest, status, data: loadedQuote,error} = useHttp(getSingleQuote, true);

    useEffect( () => {
        sendRequest();
    }, [sendRequest, quoteId])

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(status === 'pending'){
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if (error){
        return <p className='centered'>{error}</p>
    }

    if (loadedQuote.text){
        return <p>No quote found!</p>
    }

    
    return (
    <>
    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
    <Route path={match.path} exact>
        <div className='centered'>
            <Link to={`${match.url}/comments`} className='btn--flat'>
                Load Comments
            </Link>
        </div>
    </Route>
    <Route path={`${match.path}/comments`}>
        <Comments />
    </Route>
    </>
    )
}

export default QuoteDetail;
