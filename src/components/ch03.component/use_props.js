// ui 폴더에 있는 Top01이라는 앱을 Top라고 부를거라 선언
import Top from './ui/Top02'
import Content from './ui/Content02'
import Bottom from './ui/Bottom02'


function App() {
    //console.log('샘플');
    const breadList = ["소금빵", "단팥빵", "샌드위치", "도넛", "소보루빵"];
    const coffeeList = ["아메", "라떼", "아바라", "콜드브루"];

    return (
        <div className="App">
            <Top greeting="포레스트 커피" welcome="어서오세요. 재밌는 시간되시길." />

            {/* <Content bread1="소금빵" bread2="단팥빵" bread3="샌드위치" bread4="도넛" />*/}
            {/*breadList를 props로 전달하기 */}
            <Content type="ul" menus={breadList} />
            <hr />
            <Content type="ol" menus={coffeeList} />
            <Bottom goodbye="안녕히가세요" comment="다음에 또오세요" />
        </div>
    );
}

export default App;