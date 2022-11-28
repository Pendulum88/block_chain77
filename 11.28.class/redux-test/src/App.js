// import { createStore } from "redux";
// createStore : 이름 그대로 store를 만드는 함수. Deprecated 됐다.
// Deprecated : 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될 (컴퓨터 시스템 기능 등)
// createStore를 대신하는 함수가 @reduxjs/toolkit 라이브러리의 configureStore 메서드이다
// createStore가 왜 살아났느냐? 기존의 코드들이 너무 많아서, 사용자가 너무 많다

import { Provider } from "react-redux";
// React에서 Redux를 사용하기 위한 Root 컴포넌트를 가져온다 (Provider)

// import { composeWithDevTools } from "redux-devtools-extension";
// Browser의 Redux DevTool과 연결해주는 함수이다

import logo from "./logo.svg";
import "./App.css";

import { store } from "./storeTest";

// 동사무소에 가서 주민등록등본을 발급신청했다
//    dispatch를 사용해 action의 type으로 주민등록등본을 보냈다
// 접수원은 주민등록증과 500원을 받았다
//    dispatch의 payload의 pay로 500원을 포함하며 idCard로 true를 포함했다
//    reducer는 dispatch가 보낸 action을 받았다
// 주민등록등본을 찾아 출력한다
//    reducer는 받은 action을 기준으로 작업을 실행했다
//    주민임을 확인하기 위해 idCard를 받은것을 확인했다
//    500원은 수수료로 챙겼다
// 출력된 주민등록등본을 나에게 줬다
//    state에 주민등록등본이 정의되었으며 해당 내용은 View 컴포넌트에서 확인했다

let i = 0;

function App() {
  return (
    <Provider store={store}>
      {/* 
      Redux를 사용하기 위해 Root컴포넌트로 전체를 감싸준다
      기존의 Root 컴포넌트는 Provider의 자식 컴포넌트가 된다
      Provider의 props로 store를 전달한다
       */}
      <div className="App">
        <button
          onClick={() => {
            store.dispatch({ type: "plusOne", payload: { input: i++ } });
            // dispatch 메서드를 사용해서 action({ type: "plus", payload: {} })을 reducer에 전달한다
          }}
        >
          + 1
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "plusTwo", payload: {} });
          }}
        >
          + 2
        </button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
