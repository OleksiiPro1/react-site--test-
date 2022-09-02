import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { useState } from 'react';

const mainStyles = css`
color: green;
`;
export default function MyComponent() {
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
  <div css={mainStyles}><h2>1111111111111111</h2></div>
  </div>
  );
}
