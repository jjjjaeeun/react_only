import { Table } from "react-bootstrap";

function App({ contents, onClickToContent }) {

    /* 테이블 특정 행의 셀 1개를 클릭함 */
    const ClickItem = (event) => {
        /* 선택한 항목의 부모 요소의 id를 읽어서 할당함 */
        const itemId = event.target.parentNode.id; // 상품 id // <tr id={item.id}
        console.log(`선택된 상품 id:  ${itemId}`)

        onClickToContent(itemId); /* 상위 컴포넌트에 해당 id를 넘겨 줍니다. */
    };

    const ProductList = () => {

        return (
            <tbody>
                {contents.map((item, index) => (
                    <tr id={item.id} key={index}>
                        <td align="center" onClick={ClickItem}>{item.name}</td>
                        {/* props로 데이터가 넘어오면 문자 형식, 숫자 형식으로 바꾼 다음 3자리 마다 콤마 유형을 추가함. */}
                        <td align="right" onClick={ClickItem}>{Number(item.price).toLocaleString()} 원</td>
                        <td align="center" onClick={ClickItem}>{item.category === 'bread' ? '빵' : '음료'}</td>
                    </tr>
                ))}
            </tbody>
        );
    };


    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>가격</th>
                        <th>카테고리</th>
                    </tr>
                </thead>
                {/* 화살표 함수를 사용하여 상품 목록을 만들어 줍니다. */}
                {ProductList()}
            </Table>
        </>
    );
};

export default App;