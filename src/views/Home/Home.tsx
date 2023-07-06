import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Nav from '../../components/Nav/Nav';
import SortingOptions from '../../components/Nav/SortingOptions';

interface Game {
  id: number;
  title: string;
  short_description: string;
}

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
          params: {
            platform: 'pc',
          },
          headers: {
            'X-RapidAPI-Key': '0b86a2b3a2msh983832e4395498ap1a4000jsn1444dbb72f68',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        };

        const response: AxiosResponse<Game[]> = await axios.request(options);
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div>
        <SortingOptions />
        {games.map((game) => (
          <div key={game.id}>
            <h2>{game.title}</h2>
            <p>{game.short_description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
