import './App.css';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import nodeEmoji from 'node-emoji';
import { useState } from 'react';
import ChildrenPropExample from './ChildernPropExample';
import MyComponent from './Components';
import MapOverArrays from './MapOverArrays';
import ShowAndDistruct from './ShowAndDistruct';
import StateIsAsync from './StateIsAsync';

function RadomEmoji(){
  const [emoji, setEmoji] = useState(nodeEmoji.random().emoji);
  const [emojiName, setEmojiName] = useState('smile');
  return(
  <div>
   <button onClick={() => setEmoji(nodeEmoji.random().emoji)}>Random</button>
   <br />
   Emoji: {emoji}
   <br/>
    <input
    value={emojiName}
    onChange={(event) => setEmojiName(event.currentTarget.value)
    }
    />
    <br/>
    {nodeEmoji.hasEmoji(emojiName)
    ? nodeEmoji.get(emojiName)
    : 'Emoji not found'}

  </div>
)
}

function EventHundlers() {
  const [text, setText] = useState('');
  return(
  <>
    <input
    value={text}
    onChange={(event) => setText(event.currentTarget.value)}
    />
    <br />
    Text: {text}
  </>
  )
}

function Form(){
  const [email, setEmail] = useState('');
  function handleChange(event){
    setEmail(event.currentTarget.value);
      }
      return(
        <div>
          <label>
            Sing up for our newsLetter<br />
            <input type="email" value={email} onChange={handleChange} />
          </label>
          <br /> Email adress entered: {email}
        </div>
      )
}

function Counter(){
  const [count, setCount] = useState(555);
  return(
    <>

    <button onClick={() => setCount(count + 1)}>+</button>
    {' '}{count}{' '}
    <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

function SpecialButton() {
  return <button onClick={() => alert('Hello!')}>Hello!</button>
}

function Greeting(props){
  return <h1>Hello! My name is {' '}
{props.userName}
    </h1>
}

function App() {
  const user = {
    name: 'Alexey',
    url: 'https://media-exp1.licdn.com/dms/image/D5635AQH1hDp1JI0dZg/profile-framedphoto-shrink_200_200/0/1657614321779?e=1662714000&v=beta&t=75RbWl0BrbDu5g_HMVdziKAXmrz8f9O2s4JIrGT3f28'
  }
  return (

    <div className="App">
      <header className="App-header">
<Greeting userName={user.name} />

<img src={user.url} alt='my pic' />
<br />

<h2>This is my training page</h2>
<br />

<SpecialButton />
<br />
Counter
<br />
<Counter />
<br />
<Counter />
<br />
<Form />
<br />
<EventHundlers />
<br />
< RadomEmoji />
<br />
<h1>State is Async</h1>
<StateIsAsync />
<br />
<ShowAndDistruct />
<br />
<MapOverArrays />
<br />
<h1>Components</h1>
<MyComponent />
<br /><br />
<ChildrenPropExample />
<br /><br /><br /><br /><br /><br />
      </header>
    </div>
  );
}

export default App;
