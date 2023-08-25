import React from 'react';
import { Link } from 'react-router-dom';

const games = [
    { id: 1, name: 'Game 1' },
    { id: 2, name: 'Game 2' },
    { id: 3, name: 'Game 3' }
];

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        <Link to={`/game/${game.id}`}>{game.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;