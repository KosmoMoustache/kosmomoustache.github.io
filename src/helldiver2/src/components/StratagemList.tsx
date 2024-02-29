import data from '@/data';
import JSXStratagem from './Stratagem';
import GameEngine from '@/engine/GameEngine';
import { css } from 'styled-system/css';

export const StratagemList = ({ gameEngine }: { gameEngine: GameEngine }) => {
  data.missions.map((s) => createList);
  data.defensives.map((s) => createList);
  data.supply_backpacks.map((s) => createList);
  data.supply_weapons.map((s) => createList);
  data.offensive_orbitals.map((s) => createList);
  data.offensive_eagle.map((s) => createList);

  return (
    <ul
      className={css({
        backgroundColor: 'coral',
        padding: '.5em 0 .5em 0',

        overflow: 'scroll',
        overflowX: 'hidden',
        maxHeight: 'calc(100vh - 100px)',
      })}
    >
      {Object.keys(data).map((key, i, a) => {
        const el: JSX.Element[] = data[key as keyof Data].map((s) => {
          return (
            <JSXStratagem
              key={s.id}
              icon={s.icon}
              name={s.name}
              cb={() => gameEngine.addStr(s)}
            />
          );
        });
        return (
          <li key={key}>
            <JSXStratagem
              key={`category-${key}`}
              icon=''
              name={key}
              isTitle
              cb={() => console.log('WIP')}
            />
            {el}
          </li>
        );
      })}
    </ul>
  );
};

function createList(str: Stratagem[]): JSX.Element[] {
  const el: JSX.Element[] = [];

  return el;
}
