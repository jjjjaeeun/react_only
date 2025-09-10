import { Table } from "react-bootstrap";

function App({ contents }) {
    const ProductList = () => {

        return (
            <tbody>
                {contents.map((item, index) => (
                    <tr key={index}>
                        <td align="center">{item.name}</td>
                        {/* props로 데이터가 넘어오면 문자 형식, 숫자 형식으로 바꾼 다음 3자리 마다 콤마 유형을 추가함. */}
                        <td align="right">{Number(item.price).toLocaleString()} 원</td>
                        <td align="center">{item.category === 'bread' ? '빵' : '음료'}</td>
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
}

export default App;