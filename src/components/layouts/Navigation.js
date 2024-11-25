import {Button, Container, Nav, Navbar} from 'react-bootstrap';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className='bg-emerald-500 h-16' >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <button href="#action1" className='pl-7 pr-16 text-teal-50 text-2xl font-bold'>Home</button>
            <button href="#action2" className='pr-16 text-teal-50 text-2xl font-bold'>119 구조된 반려동물 찾기 서비스</button>
            <button href="#action2" className='pr-16 text-teal-50 text-2xl font-bold'>지도로 찾아보기</button>
            <button href="#action2" className='pr-16 text-teal-50 text-2xl font-bold'>커뮤니티</button>
            <button href="#action2" className='pr-16 text-teal-50 text-2xl font-bold'>캘린더</button>
            <button href="#action2" className='pr-16 text-teal-50 text-2xl font-bold'>후원</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;