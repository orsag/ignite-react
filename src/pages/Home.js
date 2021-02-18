import React, {useEffect} from 'react'
import GameDetail from "../components/GameDetail";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from '../components/Game'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const pathID = location.pathname.split('/')[2]

    useEffect(() => {
        dispatch(loadGames())
    },[dispatch]);

    const { popular, newGames, upcoming } = useSelector(state => state.games)

    return (
        <GameList>
            {pathID && <GameDetail />}
            <Games>
                {upcoming.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <Games>
                {popular.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <Games>
                {newGames.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
`

export default Home;
