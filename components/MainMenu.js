const MainMenu = (props) => {
  return (
    <>
      <div className="text-7xl mb-2">🏆</div>
      <div className="text-7xl font-bold mb-4">Sports Trivia Game</div>
      <div className="text-4xl font-bold mb-4">Combination of short answer 😈 and true/false questions (case insensitive)</div>
      <div className="text-4xl mb-8">Highscore: {props.highscore}</div>
      <button
        className="w-48 bg-indigo-500 text-white font-bold rounded-lg text-xl p-4 m-2 hover:bg-indigo-700"
        onClick={props.onStart}
      >
        New Game
      </button>

    </>
  );
};

export default MainMenu;
