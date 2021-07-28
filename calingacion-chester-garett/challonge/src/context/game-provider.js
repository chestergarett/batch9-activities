import {useState,useContext, useEffect} from 'react';
import GameContext from './game-context.js'
import {getTournaments, getTournament} from '../components/utils/utils.js'; 

const GameProvider = (props) => {    
    const {game, tournaments} = useContext(GameContext);
    const [selected, setSelected] = useState('Basketball');
    const [selectedTourna, setSelectedTourna] = useState('Drafts')
    const [selectedTournaDetails, setSelectedTournaDetails] = useState({
            name: '',
            state: '',
            url: '',
            liveImageURL: '',
            startsAt: '',
            tournament_type: '',
            matches: [],
            participants: [],
    })
    const [selectedURL, setSelectedURL] = useState('')
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
    useEffect( () => {
        getTournaments()
        .then(res => {
                tournaments.push(...res?.data.data)
                filteredTournaments = tournaments?.filter(tourna => tourna.id.includes('bball'))
                setList(filteredTournaments)
            }
        )
        .catch(error => console.log(error))
    }, [])

    //get single tournament page
    useEffect( () => {
        getTournament(selectedURL)
        .then(res => {
                setSelectedTournaDetails({
                    ...selectedTournaDetails,
                    name: res.data.data.attributes.name,
                    state: res.data.data.attributes.state,
                    url: res.data.data.attributes.url,
                    liveImageURL: res.data.data.attributes.liveImageUrl,
                    startsAt: res.data.data.attributes.timestamps.startsAt,
                    tournament_type: res.data.data.attributes.tournamentType,
                    matches: res.data.data.relationships.matches,
                    participants: res.data.included,
                })
                console.log(res)
            }
        )
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