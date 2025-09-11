import { Button, Form, InputGroup } from "react-bootstrap";

import './../css/FormStyle.css';

function App({ onSubmitInsert }) {

    const comment = '등록'; // 코드에서 반복적인 단어는 변수로 만들어 JSX 문법으로 처리

    /*개발자가 전송 버튼을 눌러 전송 이벤트에 의하여 이함수가 동작 */
    const SumittedData = (event) => {
        event.preventDefault(); // 이벤트 전파 방지
        const formData = event.target; // 전송된 폼 양식 객체 정보
        onSubmitInsert(formData);
    }

    console.log('샘플');

    return (
        <div >
            <h2>상품 {comment}</h2>
            <form action="#" onSubmit={SumittedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이름</InputGroup.Text>
                    <Form.Control type="text" name="name"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">가격</InputGroup.Text>
                    <Form.Control type="text" name="price"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">카테고리</InputGroup.Text>
                    <Form.Select name="category">
                        <option value="-">-- 카테고리를 선택해 주세요.</option>
                        <option value="bread">빵</option>
                        <option value="beverage">음료</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">세부설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description"></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button type="submit">{comment}</Button>
                </div>
            </form>
        </div>
    );
}

export default App;