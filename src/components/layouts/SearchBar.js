import { Container, Form, Navbar } from 'react-bootstrap';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


function NavScrollExample() {
  return (
    <Navbar expand="lg" >
      <Container fluid className="flex justify-between items-center">
        {/* 왼쪽 끝에 배치된 단추 세개 */}
        <h1 className="text-teal-500 font-Bazzi">단추 세개</h1>

        {/* 중앙 정렬된 Form */}
        <div className="flex-1 flex justify-center">
          <Form className="flex items-center">
            <input
              type="search"
              placeholder="검색어를 입력해주세요"
              className="form-control mx-2 w-72 rounded-lg"
              aria-label="Search"
            />
              <IoSearchSharp className='text-3xl cursor-pointer'/>
          </Form>
        </div>

        <div className='flex justify-end'>
          <Link to="/login" className='pr-3 text-teal-600 text-xl no-underline'>로그인</Link>
          <Link to="/join" className='pr-3 text-teal-600 text-xl no-underline'>회원가입</Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
