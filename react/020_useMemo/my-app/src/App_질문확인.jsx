import { useState, useRef } from "react";

const App = () => {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const getNum = (li) => {
    console.log("렌더링");
    return li.length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // userInfo.push({});
    const newInfo = [...userInfo, { name: name, id: id }];
    inputName.current.value = "";
    inputId.current.value = "";
    inputName.current.focus();
    setUserInfo(newInfo); // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log("렌더링-3");
  };

  const handleInputName = (e) => {
    setName(e.target.value); // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log("렌더링-1");
  };

  const handleInputId = (e) => {
    setId(e.target.value); // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log("렌더링-2");
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          ref={inputId}
        />
        <button type="submit" onClick={handleSubmit}>
          버튼
        </button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>{getNum(userInfo)}</span>
    </>
  );
};

export default App;

/*
### useMemo

useMemo(실행될 것, [값])라고 할 때 useMemo는 렌더링 전에 실행되어 메모이제이션한 것을 반환해줍니다. 값이 바뀌었는지 확인하고 렌더링 전에 저장된 것을 보내주는 것이죠.

### useEffect

반면 useEffect는 렌더링 후에 일어납니다. 렌더링 후에 상태가 업데이트 되었을 때를 감지하여 동작합니다.
*/
