import { useState } from 'react';

export default function StateIsAsync() {
const [title, setTitle] = useState('First title!!!');

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => {setTitle('Second title')}} >click</button>
    </div>
  );
}