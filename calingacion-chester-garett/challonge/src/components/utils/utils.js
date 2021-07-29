import {useContext} from 'react';
import GameContext from '../../context/game-context.js'
import axios from '../../api/challongeConfig.js';

const getTournaments = () => {
    return axios.get('./tournaments.json', {data: null})
    .then(res => res)
    .catch(err => console.error(err))
}

const getTournament = (url) => {
    return axios.get(`./tournaments/${url}.json`, {data: null})
    .then(res => res)
    .catch(err => console.error(err))
}

const postTournaments = ({type, name, url, tournament_type, starts_at, description}) => {
    return axios.post('./tournaments.json', {
        data: {
            type: type,
            attributes: {
                name: name,
                url: url,
                tournament_type: tournament_type,
                starts_at: starts_at,
                description: description
            }
        }
    })
}

const editTournament = ({url,starts_at,description}) => {
    return axios.post(`./tournaments/${url}.json`, {
        data: {
            type: "tournament",
            attributes: {
                starts_at: starts_at,
                description: description,
                }
            }
    })
}

const changeTournament = (url, change_state) => {
    return axios.put(`./tournaments/${url}/change_state.json`,{
        data: {
            type: `TournamentState`,
            attributes: {
                state: change_state
            }
        }
    })
}

const getMatches = (url) => {
    return axios.get(`./tournaments/${url}/matches.json`, {data: null})
    .then(res => res)
    .catch(err => console.error(err))
}



export {getTournaments, getTournament, postTournaments, editTournament, changeTournament, getMatches};
