import Game from './components/Game';
import { StratagemList } from './components/StratagemList';
import { Header } from './components/Header';
import { css } from '../styled-system/css';
import { useMount } from 'react-use';
import GameEngine from '@/engine/GameEngine';
import { useEffect, useState } from 'react';
import data from './data';

const App = () => {
  const [currentStr, setCurrentStr] = useState<Stratagem | null>();
  const [game, setGame] = useState<GameEngine>(new GameEngine(setCurrentStr));
  const [render, setRender] = useState<number>(0);

  useMount(() => {
    data.missions.map((s) => game.addStr(s));
    data.defensives.map((s) => game.addStr(s));
    data.supply_backpacks.map((s) => game.addStr(s));
    data.supply_weapons.map((s) => game.addStr(s));
    data.offensive_orbitals.map((s) => game.addStr(s));
    data.offensive_eagle.map((s) => game.addStr(s));

    const rd = Math.floor(Math.random() * game.selectedStr.size);
    game.setSequence(Array.from(game.selectedStr)[rd]);
  });

  useEffect(() => {
    console.log('currentStr', currentStr);
  }, [currentStr]);

  return (
    <div className='App'>
      <Header />
      <div
        className={css({
          display: 'grid',
          gridAutoColumns: '1fr',
          gridTemplateColumns: '1fr 3fr',
          gap: 0,
          backgroundColor: 'gray',
        })}
      >
        <StratagemList gameEngine={game} />
        <Game
          gameEngine={game}
          sequence={currentStr}
          render={render}
        />
      </div>
    </div>
  );
};
export default App;
