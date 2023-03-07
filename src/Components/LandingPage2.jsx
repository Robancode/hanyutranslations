import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Table,
  Card,
  Image,
} from "react-bootstrap";

import RositaPhoto from "./../assets/rositablackandwhite.jpeg";

import {
  StyledNavbar,
  ButtonsArea,
  StyledAvatar,
  StyledFooter,
  LandingPageButtons,
  StyledContainer,
  BackgroundImage,
} from "./Styled";

const LandingPage2 = () => {
  // Calculate competitive pricing table
  const pricePerWord = 0.08; // price per word in GBP
  const wordCounts = [5000, 10000, 15000];
  const prices = wordCounts.map((count) => `£${count * pricePerWord}`);

  return (
    <>
      {/* Top navbar */}
      <StyledNavbar bg='dark' variant='dark' expand='md'>
        <Container>
          <Navbar.Brand href='#home'>Hanyu Translations</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav' className='justify-content-end'>
            <Nav className='ml-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#pricing'>Services</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>

      {/* First load area */}
      <StyledContainer id='home'>
        {/* <Row className='my-5'> */}
        <Col className='d-flex justify-content-center'>
          <Col className='col-md-4'></Col>
          <Row style={{ height: "fit-content", alignSelf: "center" }}>
            <Row
              className='py-5'
              style={{
                background: "rgb(210 222 236 / 69%)",
                borderRadius: "1rem",
              }}
            >
              <h1 className='display-5 fw-bold pb-4'>
                Welcome to Hanyu Translations
              </h1>
              <LandingPageButtons className='flex-column '>
                <Button
                  variant='primary'
                  size='lg'
                  href='mailto:rositabannert@hotmail.co.uk'
                >
                  Get in touch
                </Button>
                <Button
                  size='lg'
                  variant='secondary'
                  href='mailto:rositabannert@hotmail.co.uk'
                >
                  Request prices
                </Button>
                <Button
                  size='lg'
                  variant='outline-primary'
                  href='mailto:rositabannert@hotmail.co.uk'
                >
                  Book an initial consultation
                </Button>
              </LandingPageButtons>
            </Row>
          </Row>
          <BackgroundImage />
        </Col>

        {/* </Row> */}
      </StyledContainer>

      {/* Competitive pricing table */}
      <StyledContainer id='pricing'>
        <Row className='my-5'>
          <Col>
            <h2>Our Competitive Pricing</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Word Count</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to 5,000 words</td>
                  <td>{prices[0]}</td>
                </tr>
                <tr>
                  <td>Up to 10,000 words</td>
                  <td>{prices[1]}</td>
                </tr>
                <tr>
                  <td>Up to 15,000 words</td>
                  <td>{prices[2]}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        {/* Competitive pricing table */}
        <Row className='my-5'>
          <Col>
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
                  <td>£0.10</td>
                </tr>
                <tr>
                  <td>English to Simplified Chinese translation</td>
                  <td>£0.12</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </StyledContainer>

      {/* About */}
      <StyledContainer id='about'>
        <Row>
          <Col className='text-center d-flex justify-content-center flex-column align-items-center'>
            <StyledAvatar src={RositaPhoto} alt='Avatar' fluid />
            <p>
              <strong>Rosita Bannert</strong>
              <br />
              <i>CEO and Translator</i>
            </p>
            <p>
              HSK 6 speaker with experience living in Shanghai. UCL graduate
              based in London.
            </p>
            <di class='col-lg-6 mx-auto'>
              <p class='lead mb-4'>
                We provide high-quality Chinese to English and English to
                Chinese translations for businesses and individuals. With over
                400,000 Chinese people in England, we can help you reach a wider
                audience and increase your revenue.
              </p>
              <div class='d-grid gap-2 d-sm-flex justify-content-sm-center'></div>
            </di>
          </Col>
        </Row>
      </StyledContainer>

      {/* Contact */}
      <StyledContainer id='contact'>
        <Row>
          <Col className='text-center d-flex justify-content-center flex-column align-items-center'>
            Contact us via email or through our instagram page
          </Col>
        </Row>
        <Row className='py-3'>
          <Col>
            <Button
              variant='primary'
              size='lg'
              href='mailto:rositabannert@hotmail.co.uk'
            >
              Get in touch
            </Button>
          </Col>
        </Row>
      </StyledContainer>

      {/* bottom footer */}
      <StyledFooter>
        <Container>
          <div className='d-flex m-2 gap-3 justify-content-sm-between align-items-center'>
            <div>
              <Navbar.Brand href='#'>Hanyu Translations</Navbar.Brand>
            </div>
            <div>Developed by RositaDev @{new Date().getFullYear()}</div>
          </div>
        </Container>
      </StyledFooter>
    </>
  );
};

export default LandingPage2;
