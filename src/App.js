import logo from './logo.svg';
import './App.css';

import { useState} from 'react';

function App() {
  //useState는 초기값으로 1이 담긴 time이라는 변수와
  //time을 업데이트 하기 위한 setTime이라는 함수를 배열 형태로 변환
  const [time, setTime] = useState(1);

  //setTime함수로 state를 업데이트 시켜주면 comopnent는 browser상에서 다시 렌더링된다.
  const handleClick = () =>{
    setTime(time + 1)//setTime의 인자로는 setState로 반영될 값이 들어간다
  };
  console.log('업데이트');

  return (
    <div>
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
