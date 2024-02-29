import { css } from 'styled-system/css';
import { token } from 'styled-system/tokens';
import Image from './Image';
import GameEngine from '@/engine/GameEngine';

const Stratagem = ({
  icon,
  name,
  isTitle,
  cb,
}: {
  icon: string;
  name: string;
  isTitle?: boolean;
  cb?: () => void;
}) => {
  return (
    <li
      onClick={() => cb && cb()}
      data-title={isTitle}
      style={{
        borderBottom: isTitle ? '5px solid gray' : '1px solid red',
        backgroundColor: isTitle ? 'red' : '',
      }}
      className={css({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        padding: '.3em 0 .3em 0',

        '& img': {
          padding: '0 1em 0 1.5em',
        },

        _hover: {
          backgroundColor: 'white',
        },
      })}
    >
      <Image src={icon} />
      <p>{name}</p>
    </li>
  );
};

export default Stratagem;
