//넘겨진 프로퍼티는 () 내에 적어주면됨
function App({ greeting, welcome }) {
    // console.log('샘플');

    return (
        <header>
            <h1>{greeting}</h1>
            <p>{welcome}</p>
        </header>
    );
}

export default App;