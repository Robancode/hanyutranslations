import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Table,
} from "react-bootstrap";
import * as S from "./Styled";

const LandingPage = () => {
  return (
    <Container>
      {/* First load area */}
      <Row className='my-5'>
        <Col>
          <h1>Welcome to Hanyu Translations</h1>
          <p>
            We provide high-quality translations for businesses and individuals
          </p>
          <S.LandingPageButtons>
            <Button variant='primary'>Get in touch</Button>
            <Button variant='secondary'>Request prices</Button>
            <Button variant='outline-primary'>
              Book an initial consultation
            </Button>
          </S.LandingPageButtons>
        </Col>
      </Row>

      {/* Navigation */}
      <Navbar bg='purple' variant='dark' expand='md'>
        <Navbar.Brand href='#'>Hanyu Translations</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>Services</Nav.Link>
            <Nav.Link href='#'>About</Nav.Link>
            <Nav.Link href='#'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Competitive pricing table */}
      <Row className='my-5'>
        <Col>
          <h2>Our Competitive Pricing</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Service</th>
                <th>Price per word</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Simplified Chinese to English translation</td>
                <td>$0.10</td>
              </tr>
              <tr>
                <td>English to Simplified Chinese translation</td>
                <td>$0.12</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
