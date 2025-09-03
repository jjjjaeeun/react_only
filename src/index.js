import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App.js 파일을 의미
import reportWebVitals from './reportWebVitals';

// 리액트 라우터를 사용하기위해 BrowserRouter를 App외부에 감싸주는 역할
// App.js 파일을 index.js 파일을 포함하고 있으므로, BrowserRouters는 index.js 파일에 한번만 명시해주면 됨
import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));


/* StrictMode 모드는 개발 도중 발생할 수 있는 문제를 꼼꼼히 감지하기 위하여
rendering을 두번 실행. 따라서, <React.StrictMode> 를 삭제 */

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
