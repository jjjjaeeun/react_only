// ui 폴더에 있는 Top01이라는 앱을 Top라고 부를거라 선언
import Top from './ui/Top01'
import Content from './ui/Content01'
import Bottom from './ui/Bottom01'


function App() {
    console.log('샘플');

    return (
        <div className="App">
            <Top />
            <Content />
            <Bottom />
        </div>
    );
}

export default App;