import styled from "styled-components";

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

// children은 props에 원래 존재하는 프로퍼티
// const Card = (props) => {
//   console.log(props);
//   return null;
// };

const Card = ({ cardClassName, title, children }) => {
  return (
    <>
      <CardDiv className={cardClassName}>
        <h3>{title}</h3>
        <hr />
        <div>{children}</div>
      </CardDiv>
    </>
  );
};

const ShareCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
        eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
        et praesentium nostrum dolores culpa cupiditate unde doloremque labore
        beatae accusamus.
      </p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};

const SettingCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};

const Test = () => {
  return <p>hello world</p>;
};

const TestTwo = () => {
  return <p>hello world2</p>;
};

function App() {
  return (
    <>
      <Card cardClassName="setting" title="챌린지 설정">
        <SettingCard />
        <Test>
          <TestTwo />
          <TestTwo />
        </Test>
      </Card>
      <Card cardClassName="share" title="서비스 공유하기">
        <ShareCard />
      </Card>
    </>
  );
}

export default App;

// const CardTwo = (props) => {
//   return (
//     <>
//       <CardDivTwo>
//         <h3>서비스 공유하기</h3>
//         <hr />
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
//           eveniet, laudantium, deleniti autem sequi molestias magni quia,
//           aliquam et praesentium nostrum dolores culpa cupiditate unde
//           doloremque labore beatae accusamus.
//         </p>
//         <div>
//           <button>이미지 저장</button>
//           <button>트위터</button>
//           <button>페이스북</button>
//         </div>
//       </CardDivTwo>
//     </>
//   );
// };
