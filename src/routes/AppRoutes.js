// 'react-router-dom'은 라우팅을 위한 라이브러리
// 기본적으로 설치가 안되어있음, 차후 설치 해야함
// npm istall react-router-dom 엔터
import { Routes, Route } from 'react-router-dom';

// ch02 장
// 기호 .은 현재 폴더, ..은 상위 폴더 , / 폴더 구분자
//import 앱이름 from '전체 경로 / 파일명'
import AppLetConst from './../components/ch02.es6_syntax/let_const';
import AppTemplateString from './../components/ch02.es6_syntax/template_string';
import AppSubjectList from './../components/ch02.es6_syntax/make_subject_list';
import AppMakeFunction from '../components/ch02.es6_syntax/make_function';
import AppArrowfunction from '../components/ch02.es6_syntax/arrow_function';
import AppArraymap from '../components/ch02.es6_syntax/array_map';
import AppSpreadOperator from '../components/ch02.es6_syntax/spread_operator';


//ch03장
import AppClassComponent from '../components/ch03.component/Components01';
import AppFunctionComponent from '../components/ch03.component/Components02';
import AppComponentSeparate from '../components/ch03.component/component_separate';
import AppFileSeparator from '../components/ch03.component/file_separator';
import AppUseProps from '../components/ch03.component/use_props';
import AppMakeTabel01 from '../components/ch03.component/array_and_table_01';
import AppMakeTabel02 from '../components/ch03.component/array_and_table_02';

//ch04장
import AppClickEvent from '../components/ch04.event_handling/click_event';
import AppChangeEvent from '../components/ch04.event_handling/change_event';
import AppMouseEvent from '../components/ch04.event_handling/mouse_event';
import AppKeyEvent from '../components/ch04.event_handling/key_event';

function AppRoutes() {
    return (
        <Routes>
            {/*element 속성에는 컴포넌트 자체가 아니라 jsx 요소를 넣어야합니다. */}
            <Route path='/' element={<AppLetConst />} />
            <Route path='/let_const' element={<AppLetConst />} />
            <Route path='/template_string' element={<AppTemplateString />} />
            <Route path='/make_subject_list' element={<AppSubjectList />} />
            <Route path='/make_function' element={<AppMakeFunction />} />
            <Route path='/arrow_function' element={<AppArrowfunction />} />
            <Route path='/array_map' element={<AppArraymap />} />
            <Route path='/spread_operator' element={<AppSpreadOperator />} />

            <Route path='/Components01' element={<AppClassComponent />} />
            <Route path='/Components02' element={<AppFunctionComponent />} />
            <Route path='/component_separate' element={<AppComponentSeparate />} />
            <Route path='/file_separator' element={<AppFileSeparator />} />
            <Route path='/use_props' element={<AppUseProps />} />
            <Route path='/array_and_table_01' element={<AppMakeTabel01 />} />
            <Route path='/array_and_table_02' element={<AppMakeTabel02 />} />

            <Route path='/click_event' element={<AppClickEvent />} />
            <Route path='/change_event' element={<AppChangeEvent />} />
            <Route path='/mouse_event' element={<AppMouseEvent />} />
            <Route path='/key_event' element={<AppKeyEvent />} />

        </Routes>

    );

};

export default AppRoutes;