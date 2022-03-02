import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); //창이 다시 실행되는 것을 방지한다.
    if(toDo.trim()===""){
      return;
    }
    setToDos((currentArray) => [toDo.trim(), ...currentArray]);
    setToDo(""); //State를 직접 수정하지 않음   
  };

    return (
    <div> 
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
      <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
      {toDos.map((item, index)=> (
      <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
