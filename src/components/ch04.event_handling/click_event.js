function App() {
    {/* event는 이벤트 객체라고 함 */ }
    const ClickEvent01 = (event) => {
        console.log('안녕하세요');
        console.log(event);
    }

    const ClickEvent02 = (name) => {
        const result = `반갑습니다. ${name}님`;
        console.log(result);
    }

    const ClickEvent03 = (x, y) => {
        const result = `${x} 더하기 ${y}는 ${x + y} `;
        console.log(result);
    }

    const ClickEvent04 = (message, event) => {
        const result = `파라미터 정보: ${message} `;
        {/* 매개변수를 파라미터라고 부르기도함 */ }
        console.log(result);

        {/* 해당 이벤트가 보유하고 있는 속성(Property) 목록을 저장할 배열*/ }
        const eventArray = [];

        for (const evt in event) {
            eventArray.push(evt)
        }

        console.log('해당 이벤트 객체가 보유한 속성 정보')
        console.log(eventArray);
        console.log(`이벤트 유형: ${event.type}`);
        console.log(`이벤트 발생 요소: ${event.target}`);
    }

    const ClickEvent05 = (event) => {

        console.log(`해당 요소의 id: ${event.target.id}`);

        const myid = event.target.id;

        if (myid === 'register') {
            console.log('등록하기')
        } else if (myid === 'cancel') {
            console.log('취소하기')
        } else {
            console.log('기타사항')
        }

    }

    {/* */ }
    return (
        <div className="App">
            <h2>클릭 이벤트</h2>
            {/*매개 변수가 0개일때는 함수의 이름만 명시 */}
            {/* 해당 버튼을 클릭했을 때 ClickEvent01 함수가 동작합니다. */}
            <button onClick={ClickEvent01}>매개 변수 0개</button><br />

            {/*매개 변수가 있는 경우 화살표 함수로 둘러 싸야함 */}
            <button onClick={() => ClickEvent02('김규식')}>매개 변수 1개</button><br />

            <button onClick={() => ClickEvent03(14, 5)}>매개 변수 2개</button><br />

            {/* 이벤트 객체를 사용하고자 하는 경우*/}
            <button onClick={(event) => ClickEvent04('hello', event)}>이벤트 객체</button><br />

            {/* html 문서에서 요소를 구분하고자 할 때 id라는 속성을 사용. */}
            <button id="register" onClick={(event) => ClickEvent05(event)}>등록</button>
            <button id="cancel" onClick={(event) => ClickEvent05(event)}>취소</button>

        </div>
    );
}

export default App;