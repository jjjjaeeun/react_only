import { Button, Form, InputGroup } from "react-bootstrap";

import './../css/FormStyle.css';
import { useState } from "react";

/*등록 화면과의 차이점
1. 코멘트: 등록 > 수정
2. 수정할 상품 정보가 props로 넘어와야함
3. 각 입력 양식에 이전에 기입했던 정보를 미리 넣어 주어야 합니다.
    일반 양식은 value 속성에 명시하면 됨
    콤보 박스는 selected 속성에 명시
    라디오 버튼이나 체크박스는 checked 속성에 명시
4. id 항목은 사용자에게 보여주되, 읽기 전용으로 처리하면 됩니다.
    가짜 id는 읽기 전용, 진짜 정보는 type="hidden"으로 처리합니다.
 */
function App({ product, onSubmitUpdate }) {

    const comment = '수정'; // 코드에서 반복적인 단어는 변수로 만들어 JSX 문법으로 처리

    // 넘겨진 이전 상품 정보를 관리해야 하므로, state로 값을 할당
    const [formData, setFormData] = useState(product);

    /*개발자가 전송 버튼을 눌러 전송 이벤트에 의하여 이함수가 동작 */
    const SumittedData = (event) => {
        event.preventDefault(); // 이벤트 전파 방지
        // const formData = event.target; // 전송된 폼 양식 객체 정보
        onSubmitUpdate(formData);
    }

    /*이 함수(event handler)는 입력 양식의 값이 변경될 때 마다 호출됨 */
    const InputChange = (event) => {
        const { name, value } = event.target;
        console.log(`파라미터 이름: ${name}, 새로운 값: ${value}`);

        /*전개 연산자를 사용하여 과거 데이터를 보존화되, 신규 바뀐 정보만 다시 갱신 */
        /* previous 변수는 리액트가 자동으로 넣어주는 값으로, 이름은 개발자 마음대로 정하면 됨 */
        setFormData((previous) => ({ ...previous, [name]: value }));
    }

    return (
        <div >
            <h2>상품 {comment}</h2>
            <form action="#" onSubmit={SumittedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">아이디</InputGroup.Text>

                    <input name="id" type="hidden" onChange={InputChange} value={product.id} />

                    <Form.Control type="text" name="fakeid" onChange={InputChange} value={product.id} disabled></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이름</InputGroup.Text>
                    <Form.Control type="text" name="name" onChange={InputChange} value={product.name}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">가격</InputGroup.Text>
                    <Form.Control type="text" name="price" onChange={InputChange} value={product.price} ></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">카테고리</InputGroup.Text>
                    <Form.Select name="category" onChange={InputChange} >
                        <option value="-">-- 카테고리를 선택해 주세요.</option>
                        <option value="bread" selected={product.category === 'bread'}>빵</option>
                        <option value="beverage" selected={product.category === 'beverage'}>음료</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock" onChange={InputChange} value={product.stock} ></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image" onChange={InputChange} value={product.image} ></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">세부설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description" onChange={InputChange} value={product.description} ></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button type="submit">{comment}</Button>
                </div>
            </form>
        </div>
    );
}

export default App;