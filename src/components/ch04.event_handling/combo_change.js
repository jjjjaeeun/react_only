function App() {

    const breadList = ["식빵", "바게트", "크루아상"];
    const coffeeList = ["아메리카노", "라떼", "바닐라라떼"];

    const ChangeEvent = (event) => {

        const target_id = event.target.id;
        const target_value = event.target.value;

        if (target_id === "input_box") {
            console.log(`입력 상자 내용: ${target_value}`);

        } else if (target_id === "menu_select") {
            console.log(`선택된 콤보 상자 값: ${target_value}`);

            if (target_value === '-') {
                document.getElementById('image01').src = '';
                alert('항목을 선택해주세요');
            }

        }

    }

    return (
        <div className="App">
            <h2>콤보 체인지</h2>
            <input id="input_box" onChange={ChangeEvent} />
            <select id="menu_select" onChange={ChangeEvent}>
                <option value="-">항목을 선택해 주세요</option>
                <option value="bread">빵</option>
                <option value="coffee">음료</option>
            </select>


        </div>
    );
}

export default App;