import { useState } from "react";

import Game from "../components/Game";
import MainMenu from "../components/MainMenu";




const Home = () => {
  const [playing, setPlaying] = useState(false);
  const [highscore, setHighscore] = useState(0);

  const start = () => {
    setPlaying(true);
  };

  const gameover = (score) => {
    if (score > highscore) {
      setHighscore(score);
    }
    setPlaying(false);
  };

  return (
    <div className="flex flex-col flex-center justify-center h-screen">
      <div className="flex flex-col text-center items-center">


      {playing ? (
        <Game onGameover={gameover} />
      ) : (
        <div>
        <MainMenu onStart={start}  highscore={highscore} />

        </div>
      )}



      </div>
      <div>
        <h2 className="text-center p-4 m-8">Designed By Colton Smith & Jushawn Macon </h2>
      </div>
    </div>
  );
};

export default Home;
