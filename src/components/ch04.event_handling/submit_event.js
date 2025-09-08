function App() {

    const ChangeTest = (event) => {
        const where = event.target.value;
        console.log(`이동할 페이지 : ${where}`);
        {/* value 값은 where에 저장함 */ }

        if (where === '-') {
            alert('이동할 페이지를 선택해 주세요')
        } else {
            document.getElementById('myform').action = where;
            // id="myform" 의 속성을  where(=value) 로 변경, 이동할 페이지 정보 변경

            document.getElementById('myform').submit();
            // submit()은 누르면 바로 동작하는 함수라 ()괄호를 넣어줘야함, 해당 페이지로 양식을 제출
        }
    }

    const SubmitTest = (event) => {
        console.log(`이벤트 유형 : ${event.type}`);
        const isChecked = document.getElementById('go').checked; {/* 체크 여부를 확인하는 속성 */ }

        if (isChecked === true) {
            alert(`액션 페이지로 이동합니다.`);
        } else {
            alert(`액션 페이지로 이동하지 않습니다.`);
            event.preventDefault(); // 이벤트 전파 방지 , 기본값(전송 누를시 이동)을 막는다는 뜻
        }
    }


    {/* 체크 여부를 확인하는 속성 */ }
    return (
        <div className="App">
            <h2>Submit Test</h2>

            <form id="myform" onSubmit={SubmitTest} action={`http://www.naver.com`}> {/*form = 양식이라는뜻 */}

                <select onChange={ChangeTest}> {/*=아래로 여는 목록을 보여줌 // ChangeTest 함수 생성 */}

                    <option value="-" >--이동할 곳을 선택해 주세요. </option>
                    <option value="http://www.naver.com" > 네이버 </option>
                    <option value="http://www.daum.net" > 다음 </option>
                    <option value="http://www.yahoo.com" > 야후 </option>
                </select>

                <br /><br />

                <input type="checkbox" id="go" />체크 상태일때만 해당 페이지로 이동
                <br /><br /> {/* 체크 박스 생성 */}

                <input type="submit" value="전송" /> {/* 전송 버튼 생성 */}
            </form>
            {/*input태그의 서브밋 누를시 위에 form action 으로 이동함 */}

        </div>
    );
}

export default App;
