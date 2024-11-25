import {Button, Container, Nav, Navbar} from 'react-bootstrap';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">소개</Nav.Link>
            <Nav.Link href="#action2">입양</Nav.Link>
            <Nav.Link href="#action2">자원봉사</Nav.Link>
            <Nav.Link href="#action2">후원</Nav.Link>
          </Nav>
            <Button variant="outline-success">로그인</Button>
            <Button variant="outline-success">회원가입</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;