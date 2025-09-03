function Top(){
    
    return(
        <header>
            <h1>인사말</h1>
            여러분 안녕하세요~~
        </header>
    );
}

function Content(){
    
    return(
        <nav>
            <ul>
                <li><a href=" http://www.naver.com">네이버</a></li>
                <li><a href=" http://www.daum.net">다음</a></li>
                <li><a href=" http://www.google.com">구글</a></li>
            </ul>
        </nav>
    );
}

function Bottom(){
    
    return(
        <article>
            <h2>맺음말</h2>
            여러분 부자 되시고, 언제나 행복하세요
        </article>
    );
}

/*
JSX 문법 규칙
최상위 태그(요소)는 반드시 1개여야 함
태그들은 대소문자 구분을 함
태그는 열기/ 닫기로 구성되어 있음, 닫을때는 /를 붙임
열기 닫기 사이에 내용물이 없으면,<태그/> 형식으로 작성이 가능
기존 html에서 사용하던 태그들 모두 사용 가능
개발자가 직접 만든 앱도 사용 가능
속성 작성은 값이 숫자 형식이라고 해도 이름 = "값"의 형식으로 작성 (ex: <div age = "20">)
하위 앱으로 넘기는 props 역시 이름 = "값"의 형식으로 작성 (ex: <Top money = "100">)
*/

function App(){
    console.log('컴포넌트별 분리하기');

    return(
        <div name = "김철수">
            <Top money ="100"/>
            <Content />
            <Bottom />
        </div>
    );
}

export default App;