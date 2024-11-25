import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            <Link to="/" className='pl-7 pr-16 text-teal-50 text-2xl font-bold no-underline'>Home</Link>
            <Link to="#action2" className='pr-16 text-teal-50 text-2xl font-bold no-underline'>119 구조된 반려동물 찾기 서비스</Link>
            <Link to="/gis" className='pr-16 text-teal-50 text-2xl font-bold no-underline'>지도로 찾아보기</Link>
            <Link to="#action2" className='pr-16 text-teal-50 text-2xl font-bold no-underline'>커뮤니티</Link>
            <Link to="#action2" className='pr-16 text-teal-50 text-2xl font-bold no-underline'>캘린더</Link>
            <Link to="#action2" className='pr-16 text-teal-50 text-2xl font-bold no-underline'>후원</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;