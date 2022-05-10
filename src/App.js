//1.const [state,setState] = useState(초기값);
//state: 현재 상태값, setState: state함수를 변경 할 수 있다. 
//setState를 사용해서 state를 변경할 때 마다 component는 다시 rendering된다.

//2.state를 변경할 때 새로 변경될 state값이 이전 state값과 연관되어있다면
//setState의 인자로 새로운 state를 return하는 콜백함수를 넣어주는게 좋다.
//setState((prevState)=>{
// some works..
//return newStae;
//})

//3.useState를 사용해서 초기값을 받아올 때 무거운 일을 해야된다면
//useState의 인자로 콜백함수를 넣어주면 맨 처음 rendering이 될때만 실행되게 할 수 있다.
//useState(()=>{
// return heavyWorks();
//})

import logo from './logo.svg';
import './App.css';

import { useState} from 'react';


// --------------1번 -----------------
// function App() {
//   useState는 초기값으로 1이 담긴 time이라는 변수와
//   time을 업데이트 하기 위한 setTime이라는 함수를 배열 형태로 변환
//   const [time, setTime] = useState(1);

//   setTime함수로 state를 업데이트 시켜주면 comopnent는 browser상에서 다시 렌더링된다.
//   const handleClick = () => {
//     setTime(time + 1)setTime의 인자로는 setState로 반영될 값이 들어간다.
//     let newTime;
//     if( time >= 12 ){
//       newTime = 1;
//     } else {
//       newTime = time +1;
//     }
//     setTime(newTime);
//   };

//   console.log('업데이트');

//   return (
//     <div>
//       <span>현재 시각: {time}시</span>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }


// --------------2번 -----------------

const heavyWork = () =>{
  console.log('엄청 무거운 작업');
  return['홍길동','김민수'];
}

function App(){
  //초기값을 가져올 때 무거운 작업을 해야 한다면 바로 안에 값을 넣어주는게 아니라
  //콜백 형태로 우리가 원하는 값을 리턴해주는 콜백을 넣어주면
  //맨 처음 화면을 렌더링 할 때만 그 함수가 불려지게 된다.
  const [names,setNames] = useState (()=>{
    return heavyWork();
  });

  const [input,setInput] = useState('');


  //onChange:사용자가 입력을 할 때마다 핸들링해줄 함수를 호출 할 수 있도록 
  //현재 input안에 무슨 값이 들어져 있는지 트랙킹해주는 state
  const handleInputChange = (e) => {
    setInput(e.target.value);//setInput을 통해 input state를 업데이트 시켜줄꺼야
  };
    //input state가 사용자의 입력을 받을 때 마다 어떻게 업데이트 되는지 확인
    console.log(input);

    //upload버튼 눌렀을 경우 
  const handleUpload= (e) =>{
    setNames((prevState)=>{//콜백의 인자는 우리가 업데이트 이전 상태의 스테이트를 가지고 있게 된다.
      console.log("이전 state: " ,prevState);
      return([input,...prevState]) //리턴해줄 값은 새로운 스테이트인 배열=배열의 첫번째 값은 input
    });
  };

  return(
  <div>
    <input type = "text" value = {input} onChange={handleInputChange}/>
    <button onClick = {handleUpload}>upload</button>
    {/* names배열을 돌면서 아이템 하나하나마다 p태그를 만들어준다.
    react에서 map을 써서 element를 출력하게 되면 key가 꼭 있어야 한다.(key값:inx)
     */}
    {names.map((name, idx) => {
      return <p key = {idx}> {name} </p>; //p태그 리턴
    })}
  </div>
  );
}

export default App;
