import GameEngine from '@/engine/GameEngine';
import { css } from 'styled-system/css';

const Game = ({
  gameEngine,
  sequence,
  render,
}: {
  gameEngine: GameEngine;
  sequence: Stratagem | null | undefined;
  render: number;
}) => {
  if (gameEngine.currentStr === null) {
    return <>'No Game Started'</>;
  } else {
    const imgs: HTMLImageElement[] = [];
    for (const direction of gameEngine.currentStr.sequence.split('')) {
      const img = document.createElement('img');
      img.src = `./assets/arrow_${direction}.webp`;
      imgs.push(img);
    }
    return (
      <ul>
        {imgs.map((img) => (
          <li
            className={css({
              display: 'inline-block',
            })}
          >
            <img
              src={img.src}
              alt='arrow'
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default Game;
