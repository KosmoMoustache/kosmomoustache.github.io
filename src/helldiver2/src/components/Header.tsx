import { css } from 'styled-system/css';

export const Header = () => {
  return (
    <header
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'green',
        height: 100,
        '& img': {
          height: 100,
        },
        '& h1': {
          fontSize: '4xl',
        },
      })}
    >
      <div>
        <img
          src='./assets/logo.png'
          alt='Logo HellDivers2'
        />
      </div>
      <div>
        <h1>Centre d’entraînement des HellDivers</h1>
      </div>
    </header>
  );
};
