import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { useState } from 'react';

const divStyles = (changeColor) => css`
color: ${changeColor ? 'green' : 'yellow'};
`;
export default function MyComponent() {
  const [changeColor, setChangeColor] = useState(false);
  const [inputName, setInputName] = useState('');
  return(
  <div style={{color: 'red'}}>
    <h1>{inputName}</h1>
  <form onSubmit={(event) => {event.preventDefault();
  }} >
    <label>
      Name: {' '}
      <input onChange={(event) => {setInputName(event.currentTarget.value)}}
      value={inputName} />
      <button onClick={() => {setInputName('')}}>
        reset
      </button>
    </label>
  </form>
  <div css={divStyles(changeColor)}><h2>CSS IN REACT</h2></div>
  <button onClick={() => {setChangeColor(!changeColor)}}>Change color</button>
  </div>
  );
}
