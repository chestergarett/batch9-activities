import {useState,useContext, useEffect} from 'react';
import GameContext from './game-context.js'
import {getTournaments, getTournament, getMatches} from '../components/utils/utils.js'; 

const GameProvider = (props) => {    
    const {game} = useContext(GameContext);
    const [selected, setSelected] = useState('Basketball');
    const [selectedTourna, setSelectedTourna] = useState('Drafts')
    const [selectedTournaDetails, setSelectedTournaDetails] = useState({
            name: '',
            state: '',
            description: '',
            url: '',
            liveImageURL: '',
            startsAt: '',
            tournament_type: '',
            matches: [],
            participants: [],
    })
    const [selectedURL, setSelectedURL] = useState('')
    let tournaments
    const [list, setList] = useState(tournaments)

    const selectedHandler = (e) => {
        setSelected(e.target.getAttribute('name'))
    }

    const selectedTournaHandler = (e) => {
        setSelectedTourna(e.target.getAttribute('name'))
        setSelectedURL(e.target.getAttribute('url'))
    }

    
    let filteredTournaments

    //get all tournaments
        getTournaments()
        .then(res => {
                tournaments = new Array(...res?.data.data)
                filteredTournaments = tournaments?.filter(tourna => tourna.id.includes('bball'))
                setList(filteredTournaments)
            }
        )
        .catch(error => console.log(error))
    

    //get single tournament page
        getTournament(selectedURL)
        .then(res => {
                setSelectedTournaDetails({
                    ...selectedTournaDetails,
                    name: res.data.data.attributes.name,
                    state: res.data.data.attributes.state,
                    description: res.data.data.attributes.description,
                    url: res.data.data.attributes.url,
                    liveImageURL: res.data.data.attributes.liveImageUrl,
                    startsAt: res.data.data.attributes.timestamps.startsAt,
                    tournament_type: res.data.data.attributes.tournamentType,
                    matches: res.data.data.relationships.matches,
                    participants: res.data.included,
                })
            }
        )
        .catch(error => console.log(error))
        


    //get matches of a tournament
    useEffect( () => {
        getMatches(selectedURL)
        .then(res => {
                console.log(res)
            })
        .catch(error => console.log(error))
    }, [selectedURL])

    return <GameContext.Provider value={{
        game, 
        tournaments, 
        selected, 
        selectedHandler, 
        list,
        selectedTourna,
        selectedURL,
        selectedTournaDetails,
        selectedTournaHandler
        }}>
            {props.children}
        </GameContext.Provider>
}

export default GameProvider;